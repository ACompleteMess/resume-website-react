import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutView from './AboutView';
import { useResumeStore } from '../stores/resumeStore';

// Mock the resume store
jest.mock('../stores/resumeStore');

describe('AboutView', () => {
  const mockPersonalInfo = {
    name: 'Erik Stuble',
    title: 'Engineering Manager',
    summary: 'Engineering leader with over a decade of experience...',
    email: 'erik.stuble11@gmail.com',
    phone: '(440) 892-0009',
    location: 'Cleveland, Ohio, US',
    linkedin: 'linkedin.com/in/erikstuble',
    education: {
      degree: 'MBA International Business',
      school: 'MIB Trieste School of Management',
      years: '2018',
    },
  };

  beforeEach(() => {
    (useResumeStore as unknown as jest.Mock).mockReturnValue({
      personalInfo: mockPersonalInfo,
    });
  });

  it('renders the about page with personal information', () => {
    render(<AboutView />);

    // Check that the title is displayed
    expect(screen.getByText('About Me')).toBeInTheDocument();

    // Check that the name and title are displayed
    expect(screen.getByText('Erik Stuble')).toBeInTheDocument();
    expect(screen.getByText('Engineering Manager')).toBeInTheDocument();

    // Check that education information is displayed
    expect(screen.getByText('MBA International Business')).toBeInTheDocument();
    // The school name and year are in separate elements, so check for partial text
    expect(screen.getByText(/MIB Trieste School of Management/)).toBeInTheDocument();
    // The year is in a separate element, so check for partial text
    expect(screen.getByText(/2018/)).toBeInTheDocument();
  });

  it('displays professional summary section', () => {
    render(<AboutView />);

    expect(screen.getByText('Professional Summary')).toBeInTheDocument();
    expect(screen.getByText(/I have over 15 years of experience/)).toBeInTheDocument();
  });

  it('displays education section', () => {
    render(<AboutView />);

    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Electrical Engineering & Engineering Management')).toBeInTheDocument();
    expect(screen.getByText('Miami University, 2013')).toBeInTheDocument();
  });

  it('displays professional involvement section', () => {
    render(<AboutView />);

    expect(screen.getByText('Professional Involvement')).toBeInTheDocument();
    expect(screen.getByText('Mentor')).toBeInTheDocument();
    // Use getAllByText since there are multiple "Founding Member" elements
    expect(screen.getAllByText('Founding Member')).toHaveLength(2);
  });

  it('displays profile icon', () => {
    render(<AboutView />);

    // Check that the profile icon is present (Font Awesome icon)
    const profileIcon = document.querySelector('.fas.fa-user-circle');
    expect(profileIcon).toBeInTheDocument();
  });
}); 