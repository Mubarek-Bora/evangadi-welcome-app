const http = require("http");

const htmlContent = `
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Evangadi AWS Launch 🚀</title>
      <style>
        body {
          background: linear-gradient(135deg, #e0f2fe, #f0fdf4);
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
          padding: 50px;
        }
        h1 { color: #2563eb; font-size: 2.8em; margin-bottom: 10px; }
        .typing {
          font-size: 1.2em;
          width: 26ch;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #10b981;
          animation: typing 3s steps(26), blink .5s step-end infinite alternate;
        }
        @keyframes typing { from { width: 0 } to { width: 26ch } }
        @keyframes blink { 50% { border-color: transparent } }
        .note { margin-top: 30px; font-size: 14px; color: #6b7280; }
      </style>
    </head>
    <body>
      <h1>🌟 Welcome to the Future, Team Evangadi! 🌟</h1>
      <div class="typing">Dockerized. Deployed. Delivered.</div>
      <p>🚀 Live on AWS EC2 — built with ❤️ by Mubarek Bora</p>
      <p class="note">April Batch | Instructors: ZED & ISRISH | Evangadi Proud 🎓</p>
    </body>
  </html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlContent);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
