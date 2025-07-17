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
              <template v-if="companyOverview">
                <div class="mb-4 p-3 bg-light border rounded">
                  <strong>Company Overview:</strong>
                  <div class="fst-italic">{{ companyOverview }}</div>
                </div>
              </template>
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
                <template v-if="descriptionWithoutOverview && descriptionWithoutOverview.includes('Old Version:') && descriptionWithoutOverview.includes('Enhanced Version:')">
                  <div class="mb-2 p-2 bg-light border rounded">
                    <strong>Old Version:</strong>
                    <p>{{ descriptionWithoutOverview.split('Enhanced Version:')[0].replace('Old Version:', '').trim() }}</p>
                  </div>
                  <div class="mb-2 p-2 bg-light border rounded">
                    <strong>Enhanced Version:</strong>
                    <p>{{ descriptionWithoutOverview.split('Enhanced Version:')[1].trim() }}</p>
                  </div>
                </template>
                <template v-else>
                  <p>{{ descriptionWithoutOverview }}</p>
                </template>
              </div>
              <div v-if="experience.achievements">
                <h6>Key Achievements:</h6>
                <template v-if="experience.achievements.includes('Old Version:') && experience.achievements.includes('Enhanced Version:')">
                  <div class="mb-2">
                    <strong>Old Version:</strong>
                    <ul>
                      <li v-for="achievement in oldAchievements" :key="'old-' + achievement">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                  <div class="mb-2">
                    <strong>Enhanced Version:</strong>
                    <ul>
                      <li v-for="achievement in enhancedAchievements" :key="'enhanced-' + achievement">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                </template>
                <template v-else>
                  <ul>
                    <li v-for="achievement in experience.achievements" :key="achievement">
                      {{ achievement }}
                    </li>
                  </ul>
                </template>
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
const { getExperienceBySlug } = useResumeStore();

const experience = computed(() => {
  const slug = route.params.slug as string;
  return getExperienceBySlug(slug);
});

const companyOverview = computed(() => {
  return experience.value?.companyOverview || null;
});

const descriptionWithoutOverview = computed(() => {
  return experience.value?.description;
});

const oldAchievements = computed(() => {
  if (!experience.value || !Array.isArray(experience.value.achievements)) return [];
  const oldIdx = experience.value.achievements.indexOf('Old Version:');
  const enhancedIdx = experience.value.achievements.indexOf('Enhanced Version:');
  if (oldIdx !== -1 && enhancedIdx !== -1) {
    return experience.value.achievements.slice(oldIdx + 1, enhancedIdx);
  }
  return [];
});

const enhancedAchievements = computed(() => {
  if (!experience.value || !Array.isArray(experience.value.achievements)) return [];
  const enhancedIdx = experience.value.achievements.indexOf('Enhanced Version:');
  if (enhancedIdx !== -1) {
    return experience.value.achievements.slice(enhancedIdx + 1);
  }
  return [];
});
</script>
