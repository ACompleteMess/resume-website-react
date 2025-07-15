import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const NODE_ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${NODE_ENV}`;
const envPath = path.join(__dirname, envFile);
const defaultEnvPath = path.join(__dirname, ".env");

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log(`Loaded environment variables from ${envFile}`);
} else if (fs.existsSync(defaultEnvPath)) {
  dotenv.config({ path: defaultEnvPath });
  console.log("Loaded environment variables from .env");
} else {
  dotenv.config();
  console.warn("No .env file found. Environment variables may be missing.");
}

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
app.listen(Number(PORT), HOST, () => {
  console.log(`Backend server running on http://${HOST}:${PORT}`);
});
