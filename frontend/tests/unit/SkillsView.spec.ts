import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SkillsView from "../../src/views/SkillsView.vue";
import { setActivePinia, createPinia } from "pinia";
import { useResumeStore } from "../../src/stores/resume";

describe("SkillsView.vue", () => {
  it("renders all skill categories and skills from the store", () => {
    setActivePinia(createPinia());
    const store = useResumeStore();
    const testSkillCategories = [
      {
        name: "Category A",
        icon: "fas fa-a",
        skills: [
          { name: "Skill 1", level: 80 },
          { name: "Skill 2", level: 90 },
        ],
      },
      {
        name: "Category B",
        icon: "fas fa-b",
        skills: [{ name: "Skill 3", level: 70 }],
      },
    ];
    store.skillCategories = testSkillCategories;
    const wrapper = mount(SkillsView);
    testSkillCategories.forEach((cat) => {
      expect(wrapper.text()).toContain(cat.name);
      cat.skills.forEach((skill) => {
        expect(wrapper.text()).toContain(skill.name);
        expect(wrapper.text()).toContain(`${skill.level}%`);
      });
    });
  });
});
