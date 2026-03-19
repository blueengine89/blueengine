import { execSync } from 'child_process';
import { readdirSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotsDir = join(__dirname, 'temporary screenshots');
mkdirSync(screenshotsDir, { recursive: true });

// Find next screenshot number
const existing = readdirSync(screenshotsDir).filter(f => /^screenshot-\d+/.test(f));
const nums = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)[1])).filter(n => !isNaN(n));
const next = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = join(screenshotsDir, filename);

const chrome = 'C:\\Users\\jonme\\.cache\\puppeteer\\chrome\\win64-146.0.7680.31\\chrome-win64\\chrome.exe';
const tempProfile = join(tmpdir(), `chrome-ss-${Date.now()}`);
mkdirSync(tempProfile, { recursive: true });

const flags = [
  '--headless=new',
  `--screenshot="${outPath}"`,
  '--window-size=1400,900',
  '--hide-scrollbars',
  '--no-sandbox',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-extensions',
  '--disable-background-networking',
  '--disable-sync',
  '--disable-translate',
  '--mute-audio',
  '--virtual-time-budget=3000',
  `--user-data-dir="${tempProfile}"`,
  `"${url}"`,
].join(' ');

try {
  execSync(`"${chrome}" ${flags}`, { stdio: 'pipe' });
  if (existsSync(outPath)) {
    console.log(`Saved: temporary screenshots/${filename}`);
  } else {
    console.error('Chrome ran but screenshot file was not created.');
    process.exit(1);
  }
} finally {
  try { rmSync(tempProfile, { recursive: true, force: true }); } catch {}
}
