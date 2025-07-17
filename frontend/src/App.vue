<template>
  <div id="app">
    <div v-if="showEnvBanner" class="env-banner" :class="envClass">
      {{ envLabel }}
    </div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <i class="fas fa-user-tie me-2"></i>Erik Stuble
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/"
                :class="{ active: $route.path === '/' }"
                @click="closeNavbar"
              >
                <i class="fas fa-home me-1"></i>Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/about"
                :class="{ active: $route.path === '/about' }"
                @click="closeNavbar"
              >
                <i class="fas fa-user me-1"></i>About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/experience"
                :class="{ active: $route.path.startsWith('/experience') }"
                @click="closeNavbar"
              >
                <i class="fas fa-briefcase me-1"></i>Experience
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/skills"
                :class="{ active: $route.path === '/skills' }"
                @click="closeNavbar"
              >
                <i class="fas fa-code me-1"></i>Skills
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/contact"
                :class="{ active: $route.path === '/contact' }"
                @click="closeNavbar"
              >
                <i class="fas fa-envelope me-1"></i>Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
      <div class="container">
        <p class="mb-0">
          <i class="fas fa-copyright me-2"></i>2024 Erik Stuble. All rights
          reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from "@/stores/resume";
import { onMounted, computed } from "vue";

// Use the store to get data
const { experiences } = useResumeStore();

function closeNavbar() {
  const navbarCollapse = document.getElementById("navbarNav");
  if (navbarCollapse && navbarCollapse.classList.contains("show")) {
    // Bootstrap 5 uses Collapse instance
    // @ts-ignore
    const collapse =
      window.bootstrap && window.bootstrap.Collapse
        ? window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse)
        : null;
    if (collapse) {
      collapse.hide();
    } else {
      // fallback: remove 'show' class
      navbarCollapse.classList.remove("show");
    }
  }
}

onMounted(() => {
  // Ensure Bootstrap's JS is loaded
});

// Environment banner logic
const env = import.meta.env.MODE || import.meta.env.VITE_ENV || "development";
const showEnvBanner = computed(() => env !== "production");
const envLabel = computed(() =>
  env === "staging"
    ? "Staging Environment"
    : env === "development"
      ? "Development Environment"
      : env,
);
const envClass = computed(() =>
  env === "staging" ? "env-banner-staging" : "env-banner-dev",
);
</script>

<style scoped>
.main-content {
  padding-top: 76px;
}
.env-banner {
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  letter-spacing: 1px;
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
}
.env-banner-dev {
  background: #ffe066;
  color: #333;
}
.env-banner-staging {
  background: #ffd6e0;
  color: #a61e4d;
}
.navbar {
  margin-top: 2.2rem;
}
</style>
