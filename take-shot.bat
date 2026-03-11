@echo off
"C:\Users\jonme\.cache\puppeteer\chrome\win64-146.0.7680.31\chrome-win64\chrome.exe" --headless=new "--screenshot=%1" --window-size=1400,900 --hide-scrollbars --user-data-dir="%TEMP%\chrome-ss" %2
