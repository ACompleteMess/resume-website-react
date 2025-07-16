# Resume Website Monorepo

A modern, containerized web application for showcasing your resume, built with Vue.js (frontend) and Node.js (Express, TypeScript) backend. Supports local development, Docker, and Kubernetes workflows.

---

## Dependencies & Tooling

**Frontend:**
- Vue 3
- Vite
- TypeScript
- Pinia (state management)
- Vue Router
- Bootstrap
- Font Awesome

**Backend:**
- Node.js
- Express (v5)
- TypeScript
- CORS
- dotenv

**Dev/Build Tools:**
- Vitest (frontend unit testing)
- @vue/test-utils
- ESLint (with Vue, TypeScript, Prettier configs)
- Prettier
- vue-tsc (TypeScript type checking for Vue)
- ts-node (backend dev)
- tsc (TypeScript compiler)
- rimraf (clean scripts)
- concurrently (run multiple scripts)
- cross-env (set env vars in scripts)

**DevOps / Infrastructure:**
- Docker & Docker Compose
- Kubernetes (manifests in k8s/)
- Helm (for templated K8s deployments)
- Nginx (frontend static serving in Docker)

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

- `npm run start:dev` — Start both servers in dev mode (uses environment variables or defaults)
- `npm run start:staging` — Start both servers in staging mode
- `npm run start:prod` — Start both servers in production mode
- `npm run build` — Build both frontend and backend for production
- `npm run check` — Lint, format, type-check, and test both frontend and backend
- `npm run clean` — Remove build artifacts
- `npm run clean:all` — Remove build artifacts, node_modules, and lock files
- `node scripts/health-check.js [env]` — Health check for any environment (default: development)
- `npm run docker:logs` — View logs from Docker Compose services

> All scripts are orchestrated from the root using npm workspaces. You can also run scripts in each workspace using `npm run <script> --workspace <workspace>`.

---

## Environment Variables & Port Strategy

- **Environment variables** are now managed by Docker Compose and Kubernetes manifests. No `.env.*` files are required in the repo.
- **Ports:**
  - **Development:** 9000 (frontend), 9001 (backend)
  - **Staging:** 9002 (frontend), 9003 (backend)
  - **Production:** 9004 (frontend), 9005 (backend)
  - If environment variables are not set, defaults to 5173 (frontend) and 3000 (backend).

---

## Testing & Quality

- **Frontend unit tests:**
  ```sh
  npm run test --workspace frontend
  ```
- **Backend:** No backend unit tests (API is simple and covered by health checks).
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

### Docker Compose
- Healthchecks are configured for both frontend (`/`) and backend (`/api/health`) services.
- Uses environment-specific `.env` files at the root for Compose only (not checked into repo).
- Example usage:
  ```sh
  npm run docker:up:dev
  npm run docker:up:staging  
  npm run docker:up:prod
  ```

### Kubernetes
- Manifests in `k8s/` for dev, staging, prod.
- Liveness and readiness probes are set for both frontend and backend.
- **Image pull policy:**
  - `Never` for dev (uses local images)
  - `IfNotPresent` for staging
  - `Always` for prod
- Use Helm for templated deployments.
- For local dev, ensure images are built locally and use `imagePullPolicy: Never`.

---

## TypeScript Backend

- The backend is fully migrated to TypeScript. Use `ts-node` for development and `tsc` for builds.
- All backend source files are in `backend/`.

---

## Contributing

Pull requests and issues are welcome!

---

## License

[MIT](LICENSE) 