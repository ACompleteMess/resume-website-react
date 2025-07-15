const f = (p, v) =>
  require("fs")
    .readFileSync(p, "utf-8")
    .split("\n")
    .find((l) => l.startsWith(v + "="))
    ?.split("=")[1]
    ?.trim();
const env = process.argv[2] || "development";
const frontendBackendPort = f(`frontend/.env.${env}`, "VITE_BACKEND_PORT");
const backendPort = f(`backend/.env.${env}`, "PORT");
const composeBackendPort = f(`.env.${env}`, "BACKEND_PORT");
const frontendPort = f(`frontend/.env.${env}`, "VITE_PORT");
const composeFrontendPort = f(`.env.${env}`, "FRONTEND_PORT");
console.log(`VITE_BACKEND_PORT (frontend/.env.${env}): ${frontendBackendPort}`);
console.log(`PORT (backend/.env.${env}): ${backendPort}`);
console.log(`BACKEND_PORT (.env.${env}): ${composeBackendPort}`);
console.log(`VITE_PORT (frontend/.env.${env}): ${frontendPort}`);
console.log(`FRONTEND_PORT (.env.${env}): ${composeFrontendPort}`);
if (
  frontendBackendPort && backendPort && composeBackendPort &&
  frontendBackendPort === backendPort && backendPort === composeBackendPort &&
  frontendPort && composeFrontendPort && frontendPort === composeFrontendPort
) {
  console.log(`✅ All ports match: FRONTEND=${frontendPort}, BACKEND=${frontendBackendPort}`);
} else {
  console.log(`❌ Ports do NOT match!`);
  if (frontendBackendPort !== backendPort || backendPort !== composeBackendPort) {
    console.log(`  Backend ports: Frontend env=${frontendBackendPort}, Backend env=${backendPort}, Compose env=${composeBackendPort}`);
  }
  if (frontendPort !== composeFrontendPort) {
    console.log(`  Frontend ports: Frontend env=${frontendPort}, Compose env=${composeFrontendPort}`);
  }
}
