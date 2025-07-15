# Resume Website

## Port Usage

| Environment      | Frontend URL                | Backend URL                 | Notes                                 |
|-----------------|----------------------------|-----------------------------|---------------------------------------|
| Local Dev (npm) | http://localhost:9000/      | http://localhost:9001/      | Vite/Node locally                     |
| Docker Compose  | http://localhost:9000/      | http://localhost:9001/      | Mapped from container                 |
| K8s Dev         | http://localhost:30080/     | http://localhost:30081/     | NodePort, always-on                   |
| K8s Staging     | http://localhost:30082/     | http://localhost:30083/     | NodePort, always-on                   |
| K8s Prod        | http://localhost:30084/     | http://localhost:30085/     | NodePort, always-on                   |

- Kubernetes NodePort range: 30000–32767
- For K8s, images must be available to the cluster (see TODO)

## TODO

- [ ] Set up Helm or Kustomize for templated Kubernetes configs (to avoid hardcoding ports)
- [ ] Push Docker images to a registry or configure local image loading for Kubernetes
- [ ] (Optional) Set up an Ingress controller for 80/443 access in Kubernetes
- [ ] Automate environment variable management across all environments 