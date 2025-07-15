import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "../../src/views/AboutView.vue";
import { setActivePinia, createPinia } from "pinia";
import { useResumeStore } from "../../src/stores/resume";

describe("AboutView.vue", () => {
  it("renders displayed personal info fields from the store", () => {
    setActivePinia(createPinia());
    const store = useResumeStore();
    const testPersonalInfo = {
      name: "Test User",
      title: "Test Title",
      education: {
        degree: "Test Degree",
        school: "Test School",
        years: "2022",
      },
    };
    store.personalInfo.name = testPersonalInfo.name;
    store.personalInfo.title = testPersonalInfo.title;
    store.personalInfo.education.degree = testPersonalInfo.education.degree;
    store.personalInfo.education.school = testPersonalInfo.education.school;
    store.personalInfo.education.years = testPersonalInfo.education.years;
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain(testPersonalInfo.name);
    expect(wrapper.text()).toContain(testPersonalInfo.title);
    expect(wrapper.text()).toContain(testPersonalInfo.education.degree);
    expect(wrapper.text()).toContain(testPersonalInfo.education.school);
    expect(wrapper.text()).toContain(testPersonalInfo.education.years);
  });
});
