const http = require("http");

const htmlContent = `
  <html>
    <head>
      <title>Welcome</title>
    </head>
    <body style="text-align: center; background-color: #f0f8ff; color: #333;">
      <h1 style="color: #007bff; font-family: Arial, sans-serif; margin-top: 50px;">
        🚀 Welcome to AWS | Evangadi April Batch Students 🎉
      </h1>
      <p style="font-size: 18px;">You're now running your app in a Docker container on EC2!</p>
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
