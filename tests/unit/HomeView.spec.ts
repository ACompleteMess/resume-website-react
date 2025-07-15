import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../../src/views/HomeView.vue";
import { setActivePinia, createPinia } from "pinia";
import { useResumeStore } from "../../src/stores/resume";

// Test HomeView.vue

describe("HomeView.vue", () => {
  it("renders the user's name and summary from the store", () => {
    setActivePinia(createPinia());
    const store = useResumeStore();
    store.personalInfo.name = "Test User";
    store.personalInfo.summary = "This is a test summary.";
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain("Test User");
    expect(wrapper.text()).toContain("This is a test summary.");
  });
});
