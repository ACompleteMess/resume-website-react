# Resume Website Monorepo

> **⚠️ Testing Note:** Some component tests (HomeView, ExperienceView, ExperienceDetailView) are currently disabled due to React Router DOM module resolution issues in the Jest test environment. The working tests cover data validation, ContactView, AboutView, and SkillsView functionality.

A modern, containerized web application for showcasing your resume, built with React (frontend) and Node.js (Express, TypeScript) backend. Supports local development, Docker, and Kubernetes workflows.

---

## Dependencies & Tooling

**Frontend:**
- React 19
- TypeScript
- React Router DOM
- Zustand (state management)
- Bootstrap 5
- Font Awesome

**Backend:**
- Node.js
- Express (v5)
- TypeScript
- CORS
- dotenv

**Dev/Build Tools:**
- Jest & React Testing Library (frontend unit testing)
- ESLint (with React, TypeScript, Prettier configs)
- Prettier
- TypeScript compiler
- ts-node (backend dev)
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

- `frontend/` — React + TypeScript app
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

### 2. Start frontend and backend (development):
```sh
# Start frontend
npm run frontend
# Start backend (in another terminal)
npm run backend
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

- `npm run frontend` — Start frontend in development mode
- `npm run frontend:staging` — Start frontend in staging mode
- `npm run frontend:prod` — Start frontend in production mode
- `npm run backend` — Start backend in development mode
- `npm run backend:staging` — Start backend in staging mode
- `npm run backend:prod` — Start backend in production mode
- `npm run check` — Lint, format, type-check, and test both frontend and backend
- `npm run clean` — Reinstall dependencies for all workspaces
- `node scripts/health-check.js [env]` — Health check for any environment (default: development)

> All scripts are orchestrated from the root using npm workspaces. You can also run scripts in each workspace using `npm run <script> --workspace <workspace>`.

---

## Environment Variables & Port Strategy

- **Environment variables** are managed by Docker Compose and Kubernetes manifests. Environment-specific `.env` files are used for different deployments.
- **Ports:**
  - **Development:** 9000 (frontend), 9001 (backend)
  - **Staging:** 9002 (frontend), 9003 (backend)
  - **Production:** 9004 (frontend), 9005 (backend)
  - If environment variables are not set, defaults to 5173 (frontend) and 3000 (backend).

---

## Testing & Quality

### Frontend Testing
- **Basic unit tests** using Jest and React Testing Library
- **Test location:** `frontend/src/resumeStore.test.tsx` and `frontend/src/views/*.test.tsx`
- **Run tests:**
  ```sh
  npm run test:unit --workspace frontend
  ```
- **Current test coverage (21 tests):**
  - ResumeStore data structure validation (2 tests)
  - ContactView component tests (7 tests)
  - AboutView component tests (5 tests)
  - SkillsView component tests (6 tests)
- **Note:** Some component tests (HomeView, ExperienceView, ExperienceDetailView) are disabled due to React Router DOM module resolution issues

### Backend Testing
- **Health checks** via API endpoints
- **No unit tests yet** (API is simple and covered by health checks)

### Code Quality
- **Full code quality check:**
  ```sh
  npm run check
  ```
- **Health check:**
  ```sh
  node scripts/health-check.js [development|staging|production]
  ```

### Test Structure
The frontend includes tests for data validation and component rendering:
- **Data validation:** Validates all required fields exist (`id`, `slug`, `company`, `position`, `duration`, `location`, `description`, `technologies`, `achievements`)
- **Component tests:** Tests ContactView, AboutView, and SkillsView component rendering and functionality
- **Current status:** 21 passing tests across 4 test suites
- **Disabled tests:** HomeView, ExperienceView, ExperienceDetailView (React Router DOM module resolution issue)
- **Missing:** Integration tests, user interaction tests, routing component tests

---

## Docker & Kubernetes

### Docker Compose
- Basic Docker Compose setup with frontend and backend services
- Healthchecks are configured for both frontend (`/`) and backend (`/api/health`) services.
- Uses environment-specific `.env` files at the root for Compose only (not checked into repo).
- **Note:** Docker scripts not yet implemented in package.json

### Kubernetes
- Basic Kubernetes manifests in `k8s/` for dev, staging, prod.
- Liveness and readiness probes are set for both frontend and backend.
- **Image pull policy:**
  - `Never` for dev (uses local images)
  - `IfNotPresent` for staging
  - `Always` for prod
- Use Helm for templated deployments.
- For local dev, ensure images are built locally and use `imagePullPolicy: Never`.
- **Note:** Requires Docker images to be built and pushed to registry

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

## Development Workflow

### Code Quality Checks
The project includes basic quality checks that run automatically:

1. **Linting** - ESLint checks for code style and potential issues
2. **Formatting** - Prettier ensures consistent code formatting
3. **Type Checking** - TypeScript compiler validates types
4. **Testing** - Jest runs unit tests (limited coverage)

Run all checks with:
```sh
npm run check
```

### Adding New Tests
The current test coverage is minimal. When adding new features, consider expanding test coverage:

1. **Frontend tests** go in `frontend/src/` with `.test.tsx` extension
   - Currently only testing data store, need component tests
   - Consider testing user interactions and component rendering
2. **Backend tests** can be added to `backend/` (not implemented yet)
3. **Integration tests** can use the health check scripts as a starting point
4. **Priority:** Add tests for React components and user interactions

### State Management
The frontend uses Zustand for state management with a centralized resume store:
- **Location:** `frontend/src/stores/resumeStore.ts`
- **Tests:** `frontend/src/resumeStore.test.tsx`
- **Features:** Personal info, experiences, skills, and computed properties

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