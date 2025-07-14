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

  // Example: test an action if available (pseudo-code, adjust as needed)
  // it('can add an experience', () => {
  //   const store = useResumeStore();
  //   const initialLength = store.experiences.length;
  //   store.addExperience({ /* mock experience */ });
  //   expect(store.experiences.length).toBe(initialLength + 1);
  // });
});
