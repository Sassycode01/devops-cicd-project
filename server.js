const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <body>
                <h1>DevOps CI/CD Project</h1>
                <p>Application deployed using GitHub Actions, Docker, AWS ECR and ECS.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});