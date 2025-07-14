<template>
  <div id="app">
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
              >
                <i class="fas fa-home me-1"></i>Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/about"
                :class="{ active: $route.path === '/about' }"
              >
                <i class="fas fa-user me-1"></i>About
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="fas fa-briefcase me-1"></i>Experience
              </a>
              <ul class="dropdown-menu">
                <li v-for="experience in experiences" :key="experience.id">
                  <router-link
                    class="dropdown-item"
                    :to="`/experience/${experience.id}`"
                  >
                    {{ experience.company }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/skills"
                :class="{ active: $route.path === '/skills' }"
              >
                <i class="fas fa-code me-1"></i>Skills
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/contact"
                :class="{ active: $route.path === '/contact' }"
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

// Use the store to get data
const { experiences } = useResumeStore();
</script>

<style scoped>
.main-content {
  padding-top: 76px;
}
</style>
