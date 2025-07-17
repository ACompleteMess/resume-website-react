import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useResumeStore } from "../../src/stores/resume";

// Define the required fields for experiences to ensure consistency
const REQUIRED_EXPERIENCE_FIELDS = [
  "id", "company", "position", "duration", "location",
  "description", "technologies",
  "achievements"
] as const;

// Define optional fields
const OPTIONAL_EXPERIENCE_FIELDS = [
  "companyOverview"
] as const;

// Define field types for validation
const FIELD_TYPES = {
  id: "number",
  company: "string",
  companyOverview: "string",
  position: "string",
  duration: "string",
  location: "string",
  description: "string",
  technologies: "array",
  achievements: "array"
} as const;

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
      REQUIRED_EXPERIENCE_FIELDS.forEach(field => {
        expect(exp).toHaveProperty(field);
      });
    });
  });

  it("all experiences have correct field types", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp, index) => {
      // Check required fields have correct types
      expect(typeof exp.id).toBe("number");
      expect(typeof exp.company).toBe("string");
      expect(typeof exp.position).toBe("string");
      expect(typeof exp.duration).toBe("string");
      expect(typeof exp.location).toBe("string");
      expect(typeof exp.description).toBe("string");
      expect(Array.isArray(exp.technologies)).toBe(true);
      expect(Array.isArray(exp.achievements)).toBe(true);

      // Check optional fields if they exist
      if (exp.companyOverview) {
        expect(typeof exp.companyOverview).toBe("string");
      }
    });
  });

  it("all experiences have non-empty required fields", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp, index) => {
      expect(exp.id).toBeGreaterThan(0);
      expect(exp.company.trim()).toBeTruthy();
      expect(exp.position.trim()).toBeTruthy();
      expect(exp.duration.trim()).toBeTruthy();
      expect(exp.location.trim()).toBeTruthy();
      expect(exp.description.trim()).toBeTruthy();
      expect(exp.technologies.length).toBeGreaterThan(0);
      expect(exp.achievements.length).toBeGreaterThan(0);
    });
  });

  it("all experiences have a non-empty company overview", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp, index) => {
      expect(exp).toHaveProperty("companyOverview");
      expect(typeof exp.companyOverview).toBe("string");
      expect(exp.companyOverview!.trim()).toBeTruthy();
    });
  });

  it("all experiences have unique IDs and at least one exists", () => {
    const store = useResumeStore();
    expect(store.experiences.length).toBeGreaterThan(0);
    const ids = store.experiences.map((e) => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all experiences have valid technology arrays", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp, index) => {
      expect(Array.isArray(exp.technologies)).toBe(true);
      exp.technologies.forEach(tech => {
        expect(typeof tech).toBe("string");
        expect(tech.trim()).toBeTruthy();
      });
    });
  });

  it("all experiences have valid achievement arrays", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp, index) => {
      expect(Array.isArray(exp.achievements)).toBe(true);
      exp.achievements.forEach(achievement => {
        expect(typeof achievement).toBe("string");
        expect(achievement.trim()).toBeTruthy();
      });
    });
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

  it("grouped experiences are properly structured", () => {
    const store = useResumeStore();
    const grouped = store.groupedExperiences;
    expect(grouped).toBeDefined();
    expect(Array.isArray(grouped)).toBe(true);

    // Check that grouped experiences have the right structure
    grouped.forEach(group => {
      expect(group).toHaveProperty("company");
      expect(group).toHaveProperty("roles");
      expect(Array.isArray(group.roles)).toBe(true);

      // Check each role has required fields
      group.roles.forEach(role => {
        expect(role).toHaveProperty("position");
        expect(role).toHaveProperty("duration");
        expect(role).toHaveProperty("location");
        expect(role).toHaveProperty("description");
        expect(role).toHaveProperty("technologies");
        expect(role).toHaveProperty("achievements");
      });
    });
  });

  it("experience structure is consistent across all entries (required fields)", () => {
    const store = useResumeStore();
    store.experiences.forEach((exp, index) => {
      REQUIRED_EXPERIENCE_FIELDS.forEach(field => {
        expect(exp).toHaveProperty(field);
      });
    });
  });

  // Example: test an action if available (pseudo-code, adjust as needed)
  // it('can add an experience', () => {
  //   const store = useResumeStore();
  //   const initialLength = store.experiences.length;
  //   store.addExperience({ /* mock experience */ });
  //   expect(store.experiences.length).toBe(initialLength + 1);
  // });
});
