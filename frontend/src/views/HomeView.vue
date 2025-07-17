<template>
  <div class="page-content">
    <!-- Removed env-banner from here, now handled in App.vue -->
    <div class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold text-primary mb-4">
              Hello, I'm
              <span class="name-highlight">{{ personalInfo.name }}</span>
            </h1>
            <p class="lead mb-4">
              {{ personalInfo.summary }}
            </p>
            <div class="d-flex gap-3">
              <router-link to="/about" class="btn btn-primary btn-lg">
                <i class="fas fa-user me-2"></i>Learn More
              </router-link>
              <router-link to="/contact" class="btn btn-outline-primary btn-lg">
                <i class="fas fa-envelope me-2"></i>Contact Me
              </router-link>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="profile-image">
              <i class="fas fa-user-circle fa-10x text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from "@/stores/resume";

const { personalInfo } = useResumeStore();
</script>

<style scoped>
.hero-section {
  /* Slightly darkened gradient for better balance */
  background: linear-gradient(135deg, #b3b8ee 0%, #a5a1d6 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.profile-image {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-section .lead {
  color: #222;
}

.name-highlight {
  color: #e6e6fa;
}

.env-banner {
  /* Removed from here, now handled in App.vue */
}
.env-banner-dev {
  /* Removed from here, now handled in App.vue */
}
.env-banner-staging {
  /* Removed from here, now handled in App.vue */
}
</style>
