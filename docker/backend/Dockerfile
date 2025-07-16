# Backend Dockerfile for Express server (TypeScript)
FROM node:18-alpine as build

# Build arg for Node environment (development, staging, production)
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

# Set working directory
WORKDIR /app

# Copy root package files (for workspaces)
COPY package*.json ./
COPY backend/package.json ./backend/

# Install dependencies using workspace
RUN npm ci --workspace=backend

# Copy backend source code
COPY backend/ ./backend/

# Build TypeScript
RUN npm run build --workspace=backend

# --- Production image ---
FROM node:18-alpine

# Set working directory
WORKDIR /app/backend

# Copy only production dependencies for backend
COPY backend/package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy compiled JS from build stage
COPY --from=build /app/backend/dist ./dist

# Environment variables are passed via Docker Compose

EXPOSE $BACKEND_PORT

# Start the server
CMD ["node", "dist/server.js"] 