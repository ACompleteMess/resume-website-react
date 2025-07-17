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
              v-for="company in groupedExperiences"
              :key="company.company"
              class="col-12 mb-5"
            >
              <h4 class="company-title text-primary mb-4">
                {{ company.company }}
              </h4>
              <div class="row">
                <div
                  v-for="(role, idx) in company.roles"
                  :key="role.position + role.duration + idx"
                  class="col-md-6 mb-4"
                >
                  <router-link
                    :to="getRoleDetailLink(role)"
                    class="card h-100 shadow-sm hover-card text-decoration-none"
                    style="color: inherit;"
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        {{ role.position }}
                      </h6>
                      <p class="card-text">{{ role.duration }}</p>
                      <p class="card-text">
                        {{ role.description.substring(0, 100) }}...
                      </p>
                    </div>
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
import type { ExperienceRole } from "@/stores/resume";

const { groupedExperiences, experiences } = useResumeStore();

function getRoleDetailLink(role: ExperienceRole) {
  // Find the original experience by matching position, duration, and company
  const exp = experiences.find(
    e =>
      e.position === role.position &&
      e.duration === role.duration &&
      e.company
  );
  return exp ? `/experience/${exp.slug}` : '#';
}
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

.company-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
