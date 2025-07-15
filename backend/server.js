require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the frontend dist directory
app.use(express.static(path.join(__dirname, "../dist")));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "resume-backend",
  });
});

// API route example
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Fallback: serve index.html for any non-API route
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("PORT environment variable must be set");
}
const HOST = process.env.HOST;
if (!HOST) {
  throw new Error("HOST environment variable must be set");
}
app.listen(PORT, HOST, () => {
  console.log(`Backend server running on http://${HOST}:${PORT}`);
});
