# Erik Stuble - Resume Website (Modern Vue 3 Setup)

This is a modern Vue 3 resume website built with TypeScript, Vite, Vue Router, and Pinia.

## 🚀 **Key Changes from CDN Version**

### **Old Setup (CDN-based):**
```html
<!-- Old: CDN dependencies -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

### **New Setup (Modern Build Tools):**
```typescript
// New: Modern imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
```

## 📁 **Project Structure**

```
resume-website/
├── src/
│   ├── assets/
│   │   └── main.css          # Global styles
│   ├── components/            # Reusable components
│   ├── router/
│   │   └── index.ts          # Vue Router configuration
│   ├── stores/
│   │   └── resume.ts         # Pinia store (replaces old data structure)
│   ├── views/
│   │   ├── HomeView.vue      # Home page
│   │   ├── AboutView.vue     # About page
│   │   ├── ExperienceView.vue # Experience list
│   │   ├── ExperienceDetailView.vue # Individual experience
│   │   ├── SkillsView.vue    # Skills page
│   │   └── ContactView.vue   # Contact page
│   ├── App.vue               # Main app component
│   └── main.ts               # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── env.d.ts                  # Type declarations
```

## 🔄 **Major Changes Highlighted**

### **1. Data Management (Old → New)**
```javascript
// OLD: Global data object in app.js
const resumeData = {
    personalInfo: { /* data */ },
    experiences: [ /* data */ ]
}
```

```typescript
// NEW: Pinia store with TypeScript
export const useResumeStore = defineStore('resume', () => {
    const personalInfo = ref<PersonalInfo>({ /* data */ })
    const experiences = ref<Experience[]>({ /* data */ })
    return { personalInfo, experiences }
})
```

### **2. Navigation (Old → New)**
```html
<!-- OLD: Manual page switching -->
<a href="#" @click="currentPage = 'home'">Home</a>
<div v-if="currentPage === 'home'">...</div>
```

```vue
<!-- NEW: Vue Router -->
<router-link to="/">Home</router-link>
<router-view />
```

### **3. Component Structure (Old → New)**
```javascript
// OLD: Single app.js file with everything
createApp({
    data() { return { /* all data */ } },
    methods: { /* all methods */ }
}).mount('#app')
```

```vue
<!-- NEW: Separate components -->
<template>
  <div id="app">
    <nav>...</nav>
    <router-view />
    <footer>...</footer>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from '@/stores/resume'
const { experiences } = useResumeStore()
</script>
```

### **4. Styling (Old → New)**
```html
<!-- OLD: CDN links -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="styles.css" rel="stylesheet">
```

```typescript
// NEW: Module imports
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'
```

## 🛠️ **Development Setup**

### **Prerequisites:**
- Node.js (v16 or higher)
- npm
- Docker (for containerized deployment)

### **Installation:**
```bash
# Install dependencies
npm install

# Start development servers (frontend + backend)
npm run start

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 **Benefits of Modern Setup**

### **Development Experience:**
- ✅ **Hot Module Replacement** - Instant updates while coding
- ✅ **TypeScript Support** - Better IDE support and error catching
- ✅ **Component-based Architecture** - Reusable, maintainable code
- ✅ **Modern Build Tools** - Faster builds and better optimization

### **Code Quality:**
- ✅ **Type Safety** - Catch errors at compile time
- ✅ **Better Organization** - Separate concerns into files
- ✅ **State Management** - Centralized data with Pinia
- ✅ **Routing** - Proper URL-based navigation

### **Performance:**
- ✅ **Code Splitting** - Load only what's needed
- ✅ **Tree Shaking** - Remove unused code
- ✅ **Optimized Bundles** - Smaller, faster files

## 🔧 **Available Scripts**

### **Development Scripts:**
- `npm run start` - Start both backend and frontend development servers in parallel
- `npm run frontend` - Start only the frontend development server (Vite)
- `npm run backend` - Start only the backend server (Express, from the `/backend` folder)
- `npm run fresh` - Clean all node_modules and lock files, reinstall dependencies, then start both servers
- `npm run health` - Run health checks on both servers
- `npm run check` - Run lint, format, and unit tests in sequence

### **Environment-Specific Scripts:**
- `npm run start:staging` - Start staging environment (Frontend: 9002, Backend: 9003)
- `npm run start:prod` - Start production environment (Frontend: 9004, Backend: 9005)
- `npm run health:staging` - Health check for staging environment
- `npm run health:prod` - Health check for production environment

### **Code Quality Scripts:**
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test:unit` - Run unit tests

### **Docker Scripts:**
- `npm run docker:build` - Build Docker images for frontend and backend
- `npm run docker:run` - Start containers using docker-compose
- `npm run docker:stop` - Stop running containers
- `npm run docker:logs` - View container logs

### **Port Configuration:**

| Environment | Frontend Port | Backend Port | URL Examples |
|-------------|---------------|--------------|--------------|
| **Development** | 9000 | 9001 | http://localhost:9000, http://localhost:9001 |
| **Staging** | 9002 | 9003 | http://localhost:9002, http://localhost:9003 |
| **Production** | 9004 | 9005 | http://localhost:9004, http://localhost:9005 |

### **When to use each script:**
- **start**: Everyday development. Runs both servers with hot reload.
- **frontend/backend**: If you only want to run one part (rare for most dev work).
- **fresh**: If you want a completely clean install (e.g., troubleshooting dependency issues).
- **check**: To ensure code quality before committing or pushing changes.
- **start:staging/start:prod**: For testing different environment configurations.

### **Health Check System:**
The project includes a comprehensive health check system that verifies both frontend and backend servers are running properly:

- **Health Endpoint**: `http://localhost:9001/api/health` returns server status
- **Health Scripts**: `npm run health`, `npm run health:staging`, `npm run health:prod`
- **Environment Aware**: Automatically uses correct ports for each environment

### **Docker Support:**
The project includes Docker configuration for containerized deployment:

- **Frontend Container**: Nginx-based with built Vue.js app
- **Backend Container**: Node.js-based Express server
- **Docker Compose**: Orchestrates both services
- **Health Checks**: Built-in container health monitoring

### **Dev Dependencies:**
- `concurrently` is used to run multiple scripts in parallel.
- `rimraf` is used for cross-platform removal of node_modules and lock files in the `fresh` script.

## 📝 **Next Steps**

1. **Install Node.js** if you haven't already
2. **Run `npm install`** to install dependencies
3. **Run `npm run start`** to start development servers
4. **Run `npm run health`** to verify both servers are working
5. **Open browser** to see your modern Vue app!

## 🐳 **Docker Deployment**

### **Prerequisites:**
- Docker Desktop installed and running

### **Quick Start:**
```bash
# Build and run with Docker
npm run docker:build
npm run docker:run

# Check container health
docker ps
```

## 🚀 **Production Deployment**

The project includes Kubernetes configurations for different environments:
- **Development**: `k8s/dev/`
- **Staging**: `k8s/staging/`
- **Production**: `k8s/prod/`

The functionality remains exactly the same, but now you have a modern, scalable, and maintainable codebase that follows industry best practices! 