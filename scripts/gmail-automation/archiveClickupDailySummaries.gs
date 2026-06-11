/**
 * Searches the inbox for ClickUp daily summary emails,
 * applies the "Archived via automation" label, and archives them.
 *
 * Deploy as a Google Apps Script time-based trigger:
 *   - Trigger type: Time-driven → Day timer → 10pm to 11pm
 *   - Days: set up 5 separate triggers (Mon–Fri), or use daily + weekday check below
 */
function archiveClickupDailySummaries() {
  const day = new Date().getDay(); // 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat
  if (day === 0 || day === 6) return; // skip weekends

  const label = GmailApp.getUserLabelByName('Archived via automation');
  if (!label) {
    Logger.log('Label "Archived via automation" not found — create it in Gmail first.');
    return;
  }

  const query = 'from:noreply@clickup.com subject:"daily summary" in:inbox';
  const threads = GmailApp.search(query, 0, 50);

  Logger.log('Found ' + threads.length + ' thread(s) to process.');

  threads.forEach(function(thread) {
    thread.addLabel(label);
    thread.moveToArchive();
  });

  Logger.log('Done. Labeled and archived ' + threads.length + ' thread(s).');
}
