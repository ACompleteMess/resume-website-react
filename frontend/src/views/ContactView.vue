<template>
  <div class="page-content">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">
            <i class="fas fa-envelope me-3"></i>Get In Touch
          </h2>
          <div class="card shadow">
            <div class="card-body p-5">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <h5 class="text-primary mb-4">Contact Information</h5>
                  <div class="d-flex align-items-center mb-3">
                    <i class="fas fa-envelope text-primary me-3 fa-lg"></i>
                    <div>
                      <strong>Email:</strong><br />
                      <a href="mailto:erik.stuble11@gmail.com">{{
                        personalInfo.email
                      }}</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <i class="fas fa-phone text-primary me-3 fa-lg"></i>
                    <div>
                      <strong>Phone:</strong><br />
                      <a href="tel:+14408920009">{{ personalInfo.phone }}</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <i
                      class="fas fa-map-marker-alt text-primary me-3 fa-lg"
                    ></i>
                    <div>
                      <strong>Location:</strong><br />
                      {{ personalInfo.location }}
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="fab fa-linkedin text-primary me-3 fa-lg"></i>
                    <div>
                      <strong>LinkedIn:</strong><br />
                      <a
                        :href="`https://${personalInfo.linkedin}`"
                        target="_blank"
                        >{{ personalInfo.linkedin }}</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="text-primary mb-4">Send Message</h5>
                  <form @submit.prevent="sendMessage">
                    <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="contactForm.name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="contactForm.email"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">Message</label>
                      <textarea
                        class="form-control"
                        id="message"
                        rows="4"
                        v-model="contactForm.message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      <i class="fas fa-paper-plane me-2"></i>Send Message
                    </button>
                  </form>
                  <div v-if="showSuccessMessage" class="contact-success mt-3">
                    <i class="fas fa-check-circle me-2"></i>Message sent
                    successfully!
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
import { ref } from "vue";
import { useResumeStore } from "@/stores/resume";

const { personalInfo } = useResumeStore();

const contactForm = ref({
  name: "",
  email: "",
  message: "",
});

const showSuccessMessage = ref(false);

const sendMessage = () => {
  // Simulate form submission
  showSuccessMessage.value = true;

  // Reset form
  contactForm.value = {
    name: "",
    email: "",
    message: "",
  };

  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 5000);
};
</script>

<style scoped>
.contact-success {
  color: #28a745;
  font-weight: 500;
}
</style>
