<template>
  <div class="page-content">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h2 class="text-center mb-5">
            <i class="fas fa-code me-3"></i>Skills & Technologies
          </h2>
          <div class="row">
            <div
              v-for="skillCategory in skillCategories"
              :key="skillCategory.name"
              class="col-md-6 mb-4"
            >
              <div class="card shadow">
                <div class="card-header bg-primary text-white">
                  <h5 class="mb-0">
                    <i :class="skillCategory.icon + ' me-2'"></i
                    >{{ skillCategory.name }}
                  </h5>
                </div>
                <div class="card-body">
                  <div
                    v-for="skill in skillCategory.skills"
                    :key="skill.name"
                    class="mb-3"
                  >
                    <div class="d-flex justify-content-between mb-1">
                      <span>{{ skill.name }}</span>
                      <span class="text-muted">{{ skill.level }}%</span>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        :style="{ width: skill.level + '%' }"
                      ></div>
                    </div>
                  </div>
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
import { onMounted } from "vue";
import { useResumeStore } from "@/stores/resume";

const { skillCategories } = useResumeStore();

// Animate progress bars when component mounts
onMounted(() => {
  setTimeout(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const width = (bar as HTMLElement).style.width;
      (bar as HTMLElement).style.width = "0%";
      setTimeout(() => {
        (bar as HTMLElement).style.width = width;
      }, 100);
    });
  }, 500);
});
</script>
