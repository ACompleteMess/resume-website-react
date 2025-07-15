const f = (p, v) =>
  require("fs")
    .readFileSync(p, "utf-8")
    .split("\n")
    .find((l) => l.startsWith(v + "="))
    ?.split("=")[1]
    ?.trim();
const env = process.argv[2] || "development";
const a = f(`.env.${env}`, "VITE_BACKEND_PORT");
const b = f(`backend/.env.${env}`, "PORT");
console.log(
  a && b && a === b
    ? `✅ Ports match: ${a}`
    : `❌ Ports do NOT match! Frontend: ${a}, Backend: ${b}`,
);
