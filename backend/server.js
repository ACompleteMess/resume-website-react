"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const NODE_ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${NODE_ENV}`;
const envPath = path_1.default.join(__dirname, envFile);
const defaultEnvPath = path_1.default.join(__dirname, ".env");
if (fs_1.default.existsSync(envPath)) {
  dotenv_1.default.config({ path: envPath });
  console.log(`Loaded environment variables from ${envFile}`);
} else if (fs_1.default.existsSync(defaultEnvPath)) {
  dotenv_1.default.config({ path: defaultEnvPath });
  console.log("Loaded environment variables from .env");
} else {
  dotenv_1.default.config();
  console.warn("No .env file found. Environment variables may be missing.");
}
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Serve static files from the frontend dist directory
app.use(express_1.default.static(path_1.default.join(__dirname, "../dist")));
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
  res.sendFile(path_1.default.join(__dirname, "../dist/index.html"));
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
