import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('D:/Node/10. Serving Pages/public/home.html', (err, data) => {
      if (err) {
        console.error('Error reading home.html:', err); // Log the error!
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return; // Stop further execution
      }
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(7000, () => console.log('Server Up'));