import React from 'react';
import { render } from '@testing-library/react';
import ExperienceView from './views/ExperienceView';
import { useResumeStore } from './stores/resumeStore';

// List of required fields for each experience
const REQUIRED_FIELDS = [
  'id',
  'company',
  'position',
  'duration',
  'location',
  'description',
  'technologies',
  'achievements',
];

// Helper to set up the store with test data
const setupStore = (experiences: any[]) => {
  useResumeStore.setState({ experiences });
};

describe('ExperienceView', () => {
  it('all experiences rendered have the required fields', () => {
    // Use the real store data
    const { experiences } = useResumeStore.getState();
    render(<ExperienceView />);
    // Check each experience has all required fields
    experiences.forEach((exp) => {
      REQUIRED_FIELDS.forEach(field => {
        expect(exp).toHaveProperty(field);
      });
    });
  });
}); 