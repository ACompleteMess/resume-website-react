# Resume Website Monorepo

A modern, containerized web application for showcasing your resume, built with Vue.js (frontend) and Node.js (Express, TypeScript) backend. Supports local development, Docker, and Kubernetes workflows.

---

## Monorepo Structure

- `frontend/` — Vue 3 + Vite + TypeScript app
- `backend/` — Node.js + Express + TypeScript API
- `docker/` — Dockerfiles and Nginx config
- `k8s/` — Kubernetes manifests (dev, staging, prod)
- `scripts/` — Utility scripts (health checks, etc.)

---

## Getting Started

### 1. Install dependencies (from project root, uses npm workspaces):
```sh
npm install
```

### 2. Start both frontend and backend (development):
```sh
npm run start:dev
```
- Frontend: [http://localhost:9000](http://localhost:9000)
- Backend: [http://localhost:9001](http://localhost:9001)

### 3. Health Check (ensure both servers are running):
```sh
node scripts/health-check.js development
```

### 4. Run all code quality checks (lint, format, type-check, test):
```sh
npm run check
```

---

## Scripts (from project root)

- `npm run start:dev` — Start both servers in dev mode (uses correct .env files)
- `npm run start:staging` — Start both servers in staging mode
- `npm run start:prod` — Start both servers in production mode
- `npm run build` — Build both frontend and backend for production
- `npm run check` — Lint, format, type-check, and test both frontend and backend
- `npm run clean` — Remove build artifacts
- `npm run clean:all` — Remove build artifacts, node_modules, and lock files
- `node scripts/health-check.js [env]` — Health check for any environment (default: development)

> All scripts are orchestrated from the root using npm workspaces. You can also run scripts in each workspace using `npm run <script> --workspace <workspace>`.

---

## Environment Variables

- **Frontend:** `frontend/.env.development`, `.env.staging`, `.env.production`
- **Backend:** `backend/.env.development`, `.env.staging`, `.env.production`
- **Docker Compose:** `.env.development`, `.env.staging`, `.env.production` (root, for Compose only)

**Example `frontend/.env.development`:**
```
VITE_PORT=9000
VITE_HOST=0.0.0.0
VITE_BACKEND_HOST=localhost
VITE_BACKEND_PORT=9001
```

**Example `backend/.env.development`:**
```
PORT=9001
HOST=0.0.0.0
NODE_ENV=development
```

> Ports: 9000/9001 for dev, 9002/9003 for staging, 9004/9005 for prod. If not set, defaults to 5173 (frontend) and 3000 (backend).

---

## Testing & Quality

- **Frontend unit tests:**
  ```sh
  npm run test --workspace frontend
  ```
- **Backend unit tests:**
  ```sh
  npm run test --workspace backend
  ```
- **Full code quality check:**
  ```sh
  npm run check
  ```
- **Health check:**
  ```sh
  node scripts/health-check.js [development|staging|production]
  ```

---

## Docker & Kubernetes

- **Docker Compose:**
  ```sh
  npm run docker:up
  npm run docker:down
  ```
- **Kubernetes:**
  - Manifests in `k8s/` for dev, staging, prod
  - Use Helm for templated deployments

---

## TypeScript Backend

- The backend is fully migrated to TypeScript. Use `ts-node` for development and `tsc` for builds.
- All backend source files are in `backend/src/` (if not, update accordingly).

---

## Contributing

Pull requests and issues are welcome!

---

## License

[MIT](LICENSE) 