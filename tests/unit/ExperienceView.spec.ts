import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ExperienceView from "../../src/views/ExperienceView.vue";
import { setActivePinia, createPinia } from "pinia";
import { useResumeStore } from "../../src/stores/resume";

describe("ExperienceView.vue", () => {
  it("renders all experiences from the store", () => {
    setActivePinia(createPinia());
    const store = useResumeStore();
    const testExperiences = [
      {
        id: 1,
        company: "Company A",
        position: "Dev",
        duration: "2020",
        location: "Loc",
        description: "Desc",
        technologies: ["Tech1"],
        achievements: ["Achieve1"],
      },
      {
        id: 2,
        company: "Company B",
        position: "Mgr",
        duration: "2021",
        location: "Loc2",
        description: "Desc2",
        technologies: ["Tech2"],
        achievements: ["Achieve2"],
      },
    ];
    store.experiences = testExperiences;
    const wrapper = mount(ExperienceView);
    testExperiences.forEach((exp) => {
      expect(wrapper.text()).toContain(exp.company);
      expect(wrapper.text()).toContain(exp.position);
      expect(wrapper.text()).toContain(exp.duration);
      expect(wrapper.text()).toContain(exp.description.substring(0, 100));
    });
  });
});
