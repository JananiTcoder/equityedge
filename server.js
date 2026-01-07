const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(__dirname, "pages.tsx");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
