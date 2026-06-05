import { createRequire } from 'module';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const puppeteer = require('C:/Users/jonme/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer-core/lib/cjs/puppeteer/puppeteer-core.js');

const url = process.argv[2] || 'http://localhost:3000';
const outFile = process.argv[3] || 'temporary screenshots/fullpage.png';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Users\\jonme\\.cache\\puppeteer\\chrome\\win64-146.0.7680.31\\chrome-win64\\chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: outFile, fullPage: true });
await browser.close();
console.log(`Saved: ${outFile}`);
