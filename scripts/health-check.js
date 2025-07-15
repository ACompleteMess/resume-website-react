import http from "http";

// Get ports from environment variables with standard defaults
const BACKEND_PORT = process.env.BACKEND_PORT || process.env.PORT;
const FRONTEND_PORT = process.env.FRONTEND_PORT || process.env.VITE_PORT;
const HOST = process.env.HOST;
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
  console.log("🏥 Running health checks...\n");

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
