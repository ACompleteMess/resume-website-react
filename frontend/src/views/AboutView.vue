<template>
  <div class="page-content">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">
            <i class="fas fa-user me-3"></i>About Me
          </h2>
          <div class="card shadow">
            <div class="card-body p-5">
              <div class="row">
                <div class="col-md-4 text-center mb-4">
                  <i class="fas fa-user-circle fa-8x text-primary mb-3"></i>
                  <h4>{{ personalInfo.name }}</h4>
                  <p class="text-muted">{{ personalInfo.title }}</p>
                </div>
                <div class="col-md-8">
                  <h5>Professional Summary</h5>
                  <p class="mb-4">
                    I am a strategic, empathetic leader skilled at building
                    developer friendly governance systems, aligning
                    cross-functional stakeholders and guiding platform programs
                    through ambiguity and hyper growth.
                  </p>
                  <h5>Education</h5>
                  <ul class="list-unstyled">
                    <li>
                      <i class="fas fa-graduation-cap text-primary me-2"></i
                      >{{ personalInfo.education.degree }}
                    </li>
                    <li>
                      <i class="fas fa-university text-primary me-2"></i
                      >{{ personalInfo.education.school }},
                      {{ personalInfo.education.years }}
                    </li>
                    <li>
                      <i class="fas fa-graduation-cap text-primary me-2"></i
                      >Electrical Engineering & Engineering Management
                    </li>
                    <li>
                      <i class="fas fa-university text-primary me-2"></i>Miami
                      University, 2013
                    </li>
                  </ul>
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

const { personalInfo } = useResumeStore();
</script>
