import http from "http";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Determine __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get environment from argument or NODE_ENV, default to development
const env = process.argv[2] || process.env.NODE_ENV || "development";

// Load frontend and backend .env files for the selected environment
dotenv.config({ path: path.join(__dirname, `../frontend/.env.${env}`) });
dotenv.config({ path: path.join(__dirname, `../backend/.env.${env}`) });

// Get ports from environment variables with standard defaults
const BACKEND_PORT = process.env.VITE_BACKEND_PORT || process.env.PORT;
const FRONTEND_PORT = process.env.VITE_PORT;
const HOST = process.env.VITE_HOST || "localhost";
if (!HOST) {
  throw new Error("HOST environment variable must be set");
}

const BACKEND_URL = `http://${HOST}:${BACKEND_PORT}/api/health`;
const FRONTEND_URL = `http://${HOST}:${FRONTEND_PORT}/index.html`;

function checkServer(url, name) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log(`✅ ${name} is running (${res.statusCode})`);
          if (data) {
            try {
              const json = JSON.parse(data);
              console.log(`   ${name} response:`, json);
            } catch (e) {
              // Frontend returns HTML, not JSON
            }
          }
          resolve(true);
        } else {
          console.log(`❌ ${name} returned status ${res.statusCode}`);
          reject(new Error(`${name} returned status ${res.statusCode}`));
        }
      });
    });

    req.on("error", (err) => {
      console.log(`❌ ${name} is not responding: ${err.message}`);
      reject(err);
    });

    req.setTimeout(5000, () => {
      console.log(`❌ ${name} request timed out`);
      req.destroy();
      reject(new Error(`${name} request timed out`));
    });
  });
}

async function runHealthCheck() {
  console.log(`🏥 Running health checks for environment: ${env}\n`);

  try {
    await Promise.all([
      checkServer(BACKEND_URL, "Backend"),
      checkServer(FRONTEND_URL, "Frontend"),
    ]);

    console.log("\n🎉 All services are healthy!");
    console.log(`Frontend: http://${HOST}:${FRONTEND_PORT}`);
    console.log(`Backend:  http://${HOST}:${BACKEND_PORT}`);
  } catch (error) {
    console.log("\n💥 Health check failed:", error.message);
    process.exit(1);
  }
}

runHealthCheck();
