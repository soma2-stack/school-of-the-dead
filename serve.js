// serve.js
// A lightweight, dependency-free Node.js static web server to view interactive 3D maps & layouts locally.
// Works out-of-the-box in VS Code - no 'npm install' needed!
// 
// Usage: Node serve.js [port]
// Example: node serve.js 8080

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Port can be configured via environment or command-line arguments (default: 8080)
const PORT = parseInt(process.argv[2] || process.env.PORT || '8080', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
  // Decode URL to handle spaces or special characters in filenames safely
  const decodedUrl = decodeURIComponent(req.url || '');
  let filePath = '.' + decodedUrl.split('?')[0];

  // Route root request
  if (filePath === './') {
    // Check if an exported HTML file exists in current folder, otherwise fall back to 3d_map_layout.html
    if (fs.existsSync('./dead_halls_3d_blueprint_export.html')) {
      filePath = './dead_halls_3d_blueprint_export.html';
    } else {
      filePath = './public/3d_map_layout.html';
    }
  }

  // Handle case where path is just the naked filename in the root directory
  if (!fs.existsSync(filePath) && fs.existsSync('./' + path.basename(filePath))) {
    filePath = './' + path.basename(filePath);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    // Add CORS headers so three.js texture loader won't trigger security exceptions
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { ...headers, 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
            <head><title>404 Not Found</title><style>body { font-family: sans-serif; padding: 40px; background: #0f172a; color: #cbd5e1; }</style></head>
            <body>
              <h1>404 file not found</h1>
              <p>Could not locate the file: <code>${filePath}</code></p>
              <p>Make sure you have placed your exported <code>dead_halls_3d_blueprint_export.html</code> or layout files in this folder.</p>
            </body>
          </html>
        `);
      } else {
        res.writeHead(500, { ...headers, 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { ...headers, 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('\x1b[32m%s\x1b[0m', '-------------------------------------------------------');
  console.log('\x1b[32m%s\x1b[0m', '📡  LOCAL 3D TEXTURE-SERVER IS UP & RUNNING!');
  console.log('\x1b[32m%s\x1b[0m', '-------------------------------------------------------');
  console.log(`Open your browser and navigate to: \x1b[36mhttp://localhost:${PORT}/\x1b[0m`);
  console.log(`Port: ${PORT} (Configure with: node serve.js [port])`);
  console.log('Close with: Ctrl + C');
  console.log('-------------------------------------------------------');
});
