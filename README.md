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

## Kubernetes Setup (Dev, Staging, Prod)

### Prerequisites

- **Kubernetes cluster** (local with Docker Desktop, minikube, kind, or cloud provider)
- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed and configured
- [Helm](https://helm.sh/docs/intro/install/) installed
- [Docker](https://docs.docker.com/get-docker/) for building images
- (Optional) Container registry access if not using local images

### 1. Build Docker Images

For local clusters (dev), build images locally:
```sh
# From project root
docker build -t resume-frontend:dev -f docker/frontend/Dockerfile .
docker build -t resume-backend:dev -f docker/backend/Dockerfile .
```
For staging/prod, tag and push to your registry:
```sh
# Example for Docker Hub
docker tag resume-frontend:dev your-dockerhub-username/resume-frontend:staging
docker tag resume-backend:dev your-dockerhub-username/resume-backend:staging
docker push your-dockerhub-username/resume-frontend:staging
docker push your-dockerhub-username/resume-backend:staging
```

### 2. Deploy with kubectl (Raw Manifests)

```sh
# Dev
kubectl apply -f k8s/dev/
# Staging
kubectl apply -f k8s/staging/
# Prod
kubectl apply -f k8s/prod/
```

### 3. Deploy with Helm (Templated)

```sh
# Dev
helm install resume-frontend ./k8s/helm/frontend -f k8s/helm/frontend/values-dev.yaml
helm install resume-backend ./k8s/helm/backend -f k8s/helm/backend/values-dev.yaml

# Staging
helm install resume-frontend ./k8s/helm/frontend -f k8s/helm/frontend/values-staging.yaml
helm install resume-backend ./k8s/helm/backend -f k8s/helm/backend/values-staging.yaml

# Prod
helm install resume-frontend ./k8s/helm/frontend -f k8s/helm/frontend/values-prod.yaml
helm install resume-backend ./k8s/helm/backend -f k8s/helm/backend/values-prod.yaml
```
> If upgrading an existing release, use `helm upgrade` instead of `helm install`.

### 4. Verify Deployments

```sh
kubectl get pods
kubectl get services
kubectl get deployments
```

### 5. Access the App

You can access the frontend in Kubernetes using either NodePort or port-forwarding:

- **NodePort (default for local clusters):**
  - The frontend service is exposed on NodePort **30080**.
  - Visit: [http://localhost:30080](http://localhost:30080)

- **kubectl port-forward (alternative):**
  - Forward a local port (e.g., 9000) to the service port (80):
    ```sh
    kubectl port-forward svc/resume-frontend-service 9000:80
    ```
  - Then visit: [http://localhost:9000](http://localhost:9000)

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

## Deploying to GitHub Pages

To deploy the frontend to GitHub Pages:

1. Ensure `vite.config.ts` has the correct base path:
   ```js
   export default defineConfig({
     base: '/resume-website-react/',
     // ...rest of your config
   })
   ```
2. Build the frontend:
   ```sh
   npm run build --prefix frontend
   ```
3. Deploy to GitHub Pages:
   ```sh
   npm run deploy --prefix frontend
   ```

The site will be available at: https://acompletemess.github.io/resume-website-react/ 