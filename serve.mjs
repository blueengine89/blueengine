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
  '/contact':                        '/Site Pages/contact.html',
  '/contact/':                       '/Site Pages/contact.html',
  '/services':                       '/Site Pages/Services.html',
  '/services/':                      '/Site Pages/Services.html',
  '/about':                          '/Site Pages/about.html',
  '/about/':                         '/Site Pages/about.html',
  '/approach':                       '/Site Pages/Approach.html',
  '/approach/':                      '/Site Pages/Approach.html',
  '/careers':                        '/Site Pages/careers.html',
  '/careers/':                       '/Site Pages/careers.html',
  '/locations':                      '/Site Pages/locations.html',
  '/locations/':                     '/Site Pages/locations.html',
  '/case-studies':                   '/Site Pages/Case-Studies.html',
  '/case-studies/':                  '/Site Pages/Case-Studies.html',
  '/health-assessment':              '/Site Pages/health-assessment.html',
  '/health-assessment/':             '/Site Pages/health-assessment.html',
  '/testimonials':                   '/Site Pages/testimonials.html',
  '/testimonials/':                  '/Site Pages/testimonials.html',
  '/role-salesforce-consultant-ft':  '/Site Pages/consultant-role.html',
  '/role-salesforce-consultant-ft/': '/Site Pages/consultant-role.html',
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
