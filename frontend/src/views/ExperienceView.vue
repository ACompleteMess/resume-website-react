<template>
  <div class="page-content">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h2 class="text-center mb-5">
            <i class="fas fa-briefcase me-3"></i>Work Experience
          </h2>

          <div class="row">
            <div
              v-for="experience in experiences"
              :key="experience.id"
              class="col-md-6 mb-4"
            >
              <div class="card h-100 shadow-sm hover-card">
                <div class="card-body">
                  <h5 class="card-title text-primary">
                    {{ experience.company }}
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {{ experience.position }}
                  </h6>
                  <p class="card-text">{{ experience.duration }}</p>
                  <p class="card-text">
                    {{ experience.description.substring(0, 100) }}...
                  </p>
                  <router-link
                    :to="`/experience/${experience.id}`"
                    class="btn btn-outline-primary btn-sm"
                  >
                    <i class="fas fa-eye me-1"></i>View Details
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from "@/stores/resume";

const { experiences } = useResumeStore();
</script>

<style scoped>
.hover-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}
</style>
