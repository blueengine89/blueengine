#!/usr/bin/env python3
"""
Searches Gmail for ClickUp daily summary emails, applies the
'Archived via automation' label, and archives them (removes from inbox).
"""
import json
import os
import sys

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SCOPES = ["https://www.googleapis.com/auth/gmail.modify"]

SEARCH_QUERY = 'from:noreply@clickup.com subject:"daily summary" in:inbox'
AUTOMATION_LABEL_NAME = "Archived via automation"


def get_service():
    token_json = os.environ.get("GMAIL_TOKEN_JSON")
    if not token_json:
        sys.exit("GMAIL_TOKEN_JSON environment variable is not set")

    token_data = json.loads(token_json)
    creds = Credentials(
        token=token_data.get("token"),
        refresh_token=token_data["refresh_token"],
        token_uri=token_data.get("token_uri", "https://oauth2.googleapis.com/token"),
        client_id=token_data["client_id"],
        client_secret=token_data["client_secret"],
        scopes=SCOPES,
    )

    if creds.expired and creds.refresh_token:
        creds.refresh(Request())

    return build("gmail", "v1", credentials=creds)


def get_label_id(service, label_name):
    labels = service.users().labels().list(userId="me").execute().get("labels", [])
    for label in labels:
        if label["name"] == label_name:
            return label["id"]
    # Create it if it doesn't exist
    created = (
        service.users()
        .labels()
        .create(userId="me", body={"name": label_name})
        .execute()
    )
    print(f"Created label '{label_name}' with id {created['id']}")
    return created["id"]


def main():
    service = get_service()
    automation_label_id = get_label_id(service, AUTOMATION_LABEL_NAME)

    result = (
        service.users()
        .messages()
        .list(userId="me", q=SEARCH_QUERY, maxResults=50)
        .execute()
    )
    messages = result.get("messages", [])

    if not messages:
        print("No matching emails found.")
        return

    print(f"Found {len(messages)} matching email(s). Processing...")
    for msg in messages:
        msg_id = msg["id"]
        service.users().messages().modify(
            userId="me",
            id=msg_id,
            body={
                "addLabelIds": [automation_label_id],
                "removeLabelIds": ["INBOX"],
            },
        ).execute()
        print(f"  Archived message {msg_id}")

    print("Done.")


if __name__ == "__main__":
    main()
