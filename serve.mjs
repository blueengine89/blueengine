import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.mjs':  'text/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

const REWRITES = {
  '/contact':                        '/pages/contact.html',
  '/contact/':                       '/pages/contact.html',
  '/services':                       '/pages/Services.html',
  '/services/':                      '/pages/Services.html',
  '/about':                          '/pages/about.html',
  '/about/':                         '/pages/about.html',
  '/approach':                       '/pages/Approach.html',
  '/approach/':                      '/pages/Approach.html',
  '/careers':                        '/pages/careers.html',
  '/careers/':                       '/pages/careers.html',
  '/locations':                      '/pages/locations.html',
  '/locations/':                     '/pages/locations.html',
  '/case-studies':                   '/pages/Case-Studies.html',
  '/case-studies/':                  '/pages/Case-Studies.html',
  '/health-assessment':              '/pages/health-assessment.html',
  '/health-assessment/':             '/pages/health-assessment.html',
  '/testimonials':                   '/pages/testimonials.html',
  '/testimonials/':                  '/pages/testimonials.html',
  '/role-salesforce-consultant-ft':  '/pages/consultant-role.html',
  '/role-salesforce-consultant-ft/': '/pages/consultant-role.html',
  '/salesforce-consultant-washington-dc':  '/pages/salesforce-consultant-washington-dc.html',
  '/salesforce-consultant-washington-dc/': '/pages/salesforce-consultant-washington-dc.html',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  if (REWRITES[urlPath]) urlPath = REWRITES[urlPath];
  const filePath = path.join(__dirname, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + urlPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
