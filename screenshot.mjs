import { createRequire } from 'module';
import { readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Load puppeteer-core from the temp install outside Google Drive
const puppeteer = require('C:/Users/jonme/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer-core/lib/cjs/puppeteer/puppeteer-core.js');

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotsDir = join(__dirname, 'temporary screenshots');
mkdirSync(screenshotsDir, { recursive: true });

const existing = readdirSync(screenshotsDir).filter(f => /^screenshot-\d+/.test(f));
const nums = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)[1])).filter(n => !isNaN(n));
const next = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = join(screenshotsDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:\\Users\\jonme\\.cache\\puppeteer\\chrome\\win64-146.0.7680.31\\chrome-win64\\chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
// Scroll to element by selector if label matches a known section
if (label) {
  await page.evaluate((lbl) => {
    const selectors = ['.' + lbl + '-section', '#' + lbl, '.' + lbl];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'instant' }); break; }
    }
  }, label);
  await new Promise(r => setTimeout(r, 600));
}
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();

console.log(`Saved: temporary screenshots/${filename}`);
