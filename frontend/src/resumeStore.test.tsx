import { useResumeStore } from "./stores/resumeStore";

// List of required fields for each experience
const REQUIRED_FIELDS = [
  "id",
  "slug",
  "company",
  "position",
  "duration",
  "location",
  "description",
  "technologies",
  "achievements",
];

describe("ResumeStore", () => {
  it("all experiences have the required fields", () => {
    const { experiences } = useResumeStore.getState();

    // Check each experience has all required fields
    experiences.forEach((exp) => {
      REQUIRED_FIELDS.forEach((field) => {
        expect(exp).toHaveProperty(field);
      });
    });
  });

  it("experiences have valid data types", () => {
    const { experiences } = useResumeStore.getState();

    experiences.forEach((exp) => {
      expect(typeof exp.id).toBe("number");
      expect(typeof exp.company).toBe("string");
      expect(typeof exp.position).toBe("string");
      expect(typeof exp.duration).toBe("string");
      expect(typeof exp.location).toBe("string");
      expect(typeof exp.description).toBe("string");
      expect(Array.isArray(exp.technologies)).toBe(true);
      expect(Array.isArray(exp.achievements)).toBe(true);
    });
  });
});
