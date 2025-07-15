<template>
  <div class="page-content">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div v-if="experience" class="card shadow">
            <div class="card-header bg-primary text-white">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="mb-0">
                  <i class="fas fa-building me-2"></i>{{ experience.company }}
                </h4>
                <router-link to="/experience" class="btn btn-light btn-sm">
                  <i class="fas fa-arrow-left me-1"></i>Back
                </router-link>
              </div>
            </div>
            <div class="card-body p-4">
              <div class="row mb-4">
                <div class="col-md-6">
                  <h5 class="text-primary">{{ experience.position }}</h5>
                  <p class="text-muted mb-2">
                    <i class="fas fa-calendar me-2"></i
                    >{{ experience.duration }}
                  </p>
                  <p class="text-muted">
                    <i class="fas fa-map-marker-alt me-2"></i
                    >{{ experience.location }}
                  </p>
                </div>
                <div class="col-md-6">
                  <h6>Technologies Used:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span
                      v-for="tech in experience.technologies"
                      :key="tech"
                      class="badge bg-secondary"
                      >{{ tech }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <h6>Description:</h6>
                <p>{{ experience.description }}</p>
              </div>
              <div v-if="experience.achievements">
                <h6>Key Achievements:</h6>
                <ul>
                  <li
                    v-for="achievement in experience.achievements"
                    :key="achievement"
                  >
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else class="text-center">
            <h3>Experience not found</h3>
            <router-link to="/experience" class="btn btn-primary"
              >Back to Experiences</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useResumeStore } from "@/stores/resume";

const route = useRoute();
const { getExperienceById } = useResumeStore();

const experience = computed(() => {
  const id = parseInt(route.params.id as string);
  return getExperienceById(id);
});
</script>
