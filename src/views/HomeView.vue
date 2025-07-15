<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold text-primary mb-4">
              Hello, I'm
              <span class="text-secondary">{{ personalInfo.name }}</span>
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
    <!-- Backend message display -->
    <div class="container mt-4">
      <div class="alert alert-info" v-if="backendMessage">
        Backend says: {{ backendMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from "@/stores/resume";
import { ref, onMounted } from "vue";

const { personalInfo } = useResumeStore();

// Fetch backend message
const backendMessage = ref("");
onMounted(async () => {
  try {
    const backendPort =
      import.meta.env.VITE_BACKEND_PORT || import.meta.env.VITE_PORT;
    const res = await fetch(`http://localhost:${backendPort}/api/hello`);
    const data = await res.json();
    backendMessage.value = data.message;
  } catch (e) {
    backendMessage.value = "Could not connect to backend.";
  }
});
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
</style>
