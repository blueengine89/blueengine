import os
import sys
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

LABEL_NAME = "Archived via automation"
SEARCH_QUERY = 'from:noreply@clickup.com subject:"daily summary" in:inbox'


def get_gmail_service():
    creds = Credentials(
        token=None,
        refresh_token=os.environ["GMAIL_REFRESH_TOKEN"],
        client_id=os.environ["GMAIL_CLIENT_ID"],
        client_secret=os.environ["GMAIL_CLIENT_SECRET"],
        token_uri="https://oauth2.googleapis.com/token",
        scopes=["https://www.googleapis.com/auth/gmail.modify"],
    )
    creds.refresh(Request())
    return build("gmail", "v1", credentials=creds)


def get_or_create_label(service, name):
    result = service.users().labels().list(userId="me").execute()
    for label in result.get("labels", []):
        if label["name"] == name:
            return label["id"]
    created = service.users().labels().create(userId="me", body={"name": name}).execute()
    print(f"Created label: {name}")
    return created["id"]


def main():
    service = get_gmail_service()
    label_id = get_or_create_label(service, LABEL_NAME)

    result = service.users().messages().list(userId="me", q=SEARCH_QUERY).execute()
    messages = result.get("messages", [])

    if not messages:
        print("No matching emails found.")
        return

    for msg in messages:
        service.users().messages().modify(
            userId="me",
            id=msg["id"],
            body={
                "addLabelIds": [label_id],
                "removeLabelIds": ["INBOX"],
            },
        ).execute()
        print(f"Archived message {msg['id']}")

    print(f"Done — processed {len(messages)} email(s).")


if __name__ == "__main__":
    main()
