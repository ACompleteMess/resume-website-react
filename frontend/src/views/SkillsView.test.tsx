import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsView from './SkillsView';
import { useResumeStore } from '../stores/resumeStore';

// Mock the resume store
jest.mock('../stores/resumeStore');

describe('SkillsView', () => {
  const mockSkillCategories = [
    {
      name: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
      ],
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 },
      ],
    },
  ];

  beforeEach(() => {
    (useResumeStore as unknown as jest.Mock).mockReturnValue({
      skillCategories: mockSkillCategories,
    });
  });

  it('renders the skills page with title', () => {
    render(<SkillsView />);

    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('displays skill categories', () => {
    render(<SkillsView />);

    expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument();
  });

  it('displays skills within categories', () => {
    render(<SkillsView />);

    // Check programming languages
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();

    // Check cloud & devops
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });

  it('displays skill levels as percentages', () => {
    render(<SkillsView />);

    expect(screen.getByText('90%')).toBeInTheDocument();
    // Use getAllByText since there are multiple elements with 85%
    expect(screen.getAllByText('85%')).toHaveLength(2);
    // Use getAllByText since there are multiple elements with 80%
    expect(screen.getAllByText('80%')).toHaveLength(2);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('displays progress bars for skills', () => {
    render(<SkillsView />);

    const progressBars = document.querySelectorAll('.progress-bar');
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('displays category icons', () => {
    render(<SkillsView />);

    // Check that category icons are present (Font Awesome icons)
    const codeIcon = document.querySelector('.fas.fa-code');
    const cloudIcon = document.querySelector('.fas.fa-cloud');

    expect(codeIcon).toBeInTheDocument();
    expect(cloudIcon).toBeInTheDocument();
  });
}); 