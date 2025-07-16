# Frontend Dockerfile for Vue.js app
FROM node:18-alpine as build

# Build arg for Vite mode (development, staging, production)
ARG VITE_MODE
ENV VITE_MODE=$VITE_MODE

# Set working directory
WORKDIR /app

# Copy root package files (for workspaces)
COPY package*.json ./
COPY frontend/package.json ./frontend/

# Install dependencies using workspace
RUN npm ci --workspace=frontend

# Copy frontend source code
COPY frontend/ ./frontend/

# Build the app with the correct mode (loads .env.{mode})
RUN npm run build --workspace=frontend -- --mode $VITE_MODE

# Production stage
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Copy nginx configuration
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 