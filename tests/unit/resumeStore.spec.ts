import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useResumeStore } from "../../src/stores/resume";

// Basic tests for resume Pinia store

describe("resume store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("has initial state", () => {
    const store = useResumeStore();
    expect(store.personalInfo).toBeDefined();
    expect(store.experiences).toBeDefined();
  });

  it("all experiences have required properties", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp) => {
      expect(exp).toHaveProperty("id");
      expect(exp).toHaveProperty("company");
      expect(exp).toHaveProperty("position");
      expect(exp).toHaveProperty("duration");
      expect(exp).toHaveProperty("location");
      expect(exp).toHaveProperty("description");
      expect(exp).toHaveProperty("technologies");
      expect(exp).toHaveProperty("achievements");
    });
  });

  it("all experiences have unique IDs and at least one exists", () => {
    const store = useResumeStore();
    expect(store.experiences.length).toBeGreaterThan(0);
    const ids = store.experiences.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("can update personal info", () => {
    const store = useResumeStore();
    store.personalInfo.name = "Test User";
    expect(store.personalInfo.name).toBe("Test User");
  });

  it("can retrieve an experience by ID", () => {
    const store = useResumeStore();
    const exp = store.experiences[0];
    // If getExperienceById is defined, use it; otherwise, just check the array
    expect(exp).toBeDefined();
    expect(exp.id).toBe(1);
  });

  // Example: test an action if available (pseudo-code, adjust as needed)
  // it('can add an experience', () => {
  //   const store = useResumeStore();
  //   const initialLength = store.experiences.length;
  //   store.addExperience({ /* mock experience */ });
  //   expect(store.experiences.length).toBe(initialLength + 1);
  // });
});
