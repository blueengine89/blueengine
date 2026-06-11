# Gmail Automation: Archive ClickUp Daily Summaries

Automatically labels and archives ClickUp daily summary emails Mon–Fri at ~10 PM EST.

## Setup (one-time, ~3 minutes)

1. Go to [script.google.com](https://script.google.com) and click **New project**
2. Delete the placeholder code and paste the contents of `archiveClickupDailySummaries.gs`
3. Name the project (e.g. "Archive ClickUp Summaries")
4. Click **Save**, then **Run** once to grant Gmail permissions
5. Set up the trigger:
   - Click the clock icon (**Triggers**) in the left sidebar
   - Click **+ Add Trigger**
   - Function: `archiveClickupDailySummaries`
   - Event source: **Time-driven**
   - Type: **Day timer**
   - Time: **10pm to 11pm**
   - Click **Save**

The script runs daily and skips weekends automatically via the day-of-week check in the code.

## Notes

- The label **"Archived via automation"** must exist in Gmail (it already does).
- The trigger fires sometime within the 10–11 PM window (Google Apps Script does not support exact-minute scheduling).
- Run logs are visible under **Executions** in the Apps Script editor.
