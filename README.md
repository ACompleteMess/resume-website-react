# Resume Website

A modern, containerized web application for showcasing your resume, built with Vue.js (frontend) and Node.js (backend), ready for local development, Docker, and Kubernetes deployments.

---

## Architecture Overview

- **Frontend:**
  - Built with Vue.js, served as static files by Nginx (in the frontend Docker image).
  - Handles all user interface and browser routing.
  - Exposed on port 30080 in Kubernetes (NodePort).
- **Backend:**
  - Node.js (Express) API service.
  - Serves only API endpoints (e.g., `/api/hello`, `/api/health`).
  - Does **not** serve static files or require Nginx.
  - Exposed on port 30081 in Kubernetes (NodePort).
- **Microservice separation:**
  - Frontend and backend are deployed as separate services and pods.
  - Communication between frontend and backend is via HTTP API calls.

---

## Tech Stack

- **Frontend:** Vue.js (Vite, TypeScript), Nginx (for static files)
- **Backend:** Node.js (Express)
- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes (manifests in `k8s/`)
- **Testing:** Vitest (frontend), custom scripts

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (v8+ recommended)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Kubernetes cluster](https://kubernetes.io/docs/setup/) (for k8s deployment)
- [Helm](https://helm.sh/) (for templated Kubernetes deployments)

---

## Setup

### Local Development

1. **Install dependencies:**
   ```sh
   npm install
   cd backend && npm install
   ```
2. **Run frontend:**
   ```sh
   npm run dev
   ```
3. **Run backend:**
   ```sh
   cd backend
   npm start
   ```

### Docker

To build and run both frontend and backend using Docker Compose:

```sh
docker-compose up --build
```

### Kubernetes (with Helm)

1. Ensure your cluster is running and `kubectl` and `helm` are configured.
2. Build images locally:
   ```sh
   docker build -t resume-frontend:latest -f docker/frontend/Dockerfile .
   docker build -t resume-backend:latest -f docker/backend/Dockerfile .
   ```
3. Deploy with Helm:
   ```sh
   helm install resume-frontend ./k8s/helm/frontend -f k8s/helm/frontend/values-dev.yaml --namespace dev --create-namespace
   helm install resume-backend ./k8s/helm/backend -f k8s/helm/backend/values-dev.yaml --namespace dev
   ```
4. Access services via NodePort:
   - Frontend: `http://localhost:30080`
   - Backend: `http://localhost:30081/api/hello`

> **Note:** For production-grade deployments and environment-specific configuration, Helm charts are recommended. See below.

---

## Testing

- **Frontend Unit Tests:**
  ```sh
  npm run test:unit
  ```
- **Custom scripts:**
  See `scripts/` directory for Docker and health check scripts.

---

## Environment Variables

- Document any required environment variables here (e.g., API URLs, secrets).
- The app defaults to standard ports if environment variables are not set:
  - Development: 9000 (frontend), 9001 (backend)
  - Staging: 9002 (frontend), 9003 (backend)
  - Production: 9004 (frontend), 9005 (backend)
  - Defaults: 5173 (frontend), 3000 (backend)

---

## Frontend Environment Files

### .env.development (project root)
```env
# Vite dev server config
VITE_PORT=9000
VITE_HOST=0.0.0.0

# Backend API config for dev
VITE_BACKEND_HOST=localhost
VITE_BACKEND_PORT=9001
```

### .env.staging (project root)
```env
VITE_PORT=9002
VITE_HOST=0.0.0.0

VITE_BACKEND_HOST=staging-backend.example.com
VITE_BACKEND_PORT=9003
```

### .env.production (project root)
```env
VITE_PORT=9004
VITE_HOST=0.0.0.0

VITE_BACKEND_HOST=api.example.com
VITE_BACKEND_PORT=9005
```

## Backend Environment Files

### backend/.env.development
```env
PORT=9001
HOST=0.0.0.0
NODE_ENV=development
```

### backend/.env.staging
```env
PORT=9003
HOST=0.0.0.0
NODE_ENV=staging
```

### backend/.env.production
```env
PORT=9005
HOST=0.0.0.0
NODE_ENV=production
```

---

## Kubernetes & Helm

- **Current setup:** Uses plain Kubernetes YAML manifests in `k8s/` for dev, staging, and prod, and Helm charts for templated, environment-specific deployments.
- **Frontend:** Uses Nginx to serve static files (no API proxying needed).
- **Backend:** API-only, no Nginx required.
- **Recommended for production:** Use a Kubernetes Ingress controller (often Nginx-based) at the cluster level to route traffic to frontend and backend services and handle SSL termination. This is optional for local/dev.

---

## Project Structure

- `src/` - Frontend source code (Vue.js)
- `backend/` - Backend source code (Node.js)
- `docker/` - Dockerfiles and Nginx config
- `k8s/` - Kubernetes manifests (dev, staging, prod)
- `tests/` - Unit tests
- `scripts/` - Utility scripts

---

## Contributing

Pull requests and issues are welcome!

---

## License

[MIT](LICENSE) 