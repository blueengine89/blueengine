#!/usr/bin/env python3
"""
Run this ONCE locally to generate the GMAIL_TOKEN_JSON secret value.

Steps:
  1. Go to https://console.cloud.google.com/ → APIs & Services → Credentials
  2. Create an OAuth 2.0 Client ID (Desktop app), download the JSON
  3. Run:  python scripts/generate_gmail_token.py path/to/credentials.json
  4. A browser window will open — sign in and grant access
  5. Copy the printed JSON and save it as the GitHub secret GMAIL_TOKEN_JSON
"""
import json
import sys

from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/gmail.modify"]

if len(sys.argv) != 2:
    sys.exit(f"Usage: python {sys.argv[0]} path/to/credentials.json")

flow = InstalledAppFlow.from_client_secrets_file(sys.argv[1], SCOPES)
creds = flow.run_local_server(port=0)

token_data = {
    "token": creds.token,
    "refresh_token": creds.refresh_token,
    "token_uri": creds.token_uri,
    "client_id": creds.client_id,
    "client_secret": creds.client_secret,
    "scopes": list(creds.scopes),
}

print("\n=== Copy this value as the GitHub secret GMAIL_TOKEN_JSON ===\n")
print(json.dumps(token_data))
