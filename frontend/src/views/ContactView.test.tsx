import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactView from './ContactView';
import { useResumeStore } from '../stores/resumeStore';

// Mock the resume store
jest.mock('../stores/resumeStore');

describe('ContactView', () => {
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

  it('renders the contact page with title', () => {
    render(<ContactView />);

    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  it('displays contact information section', () => {
    render(<ContactView />);

    expect(screen.getByText('Contact Information')).toBeInTheDocument();
  });

  it('displays email contact information', () => {
    render(<ContactView />);

    const emailLink = screen.getByText('erik.stuble11@gmail.com');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:erik.stuble11@gmail.com');
  });

  it('displays phone contact information', () => {
    render(<ContactView />);

    const phoneLink = screen.getByText('(440) 892-0009');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:(440) 892-0009');
  });

  it('displays location information', () => {
    render(<ContactView />);

    expect(screen.getByText('Cleveland, Ohio, US')).toBeInTheDocument();
  });

  it('displays LinkedIn information', () => {
    render(<ContactView />);

    const linkedinLink = screen.getByText('linkedin.com/in/erikstuble');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/erikstuble');
  });

  it('displays get in touch section', () => {
    render(<ContactView />);

    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText(/I'm always interested in hearing about new opportunities/)).toBeInTheDocument();
  });

  it('displays contact icons', () => {
    render(<ContactView />);

    // Check that contact icons are present (Font Awesome icons)
    const envelopeIcon = document.querySelector('.fas.fa-envelope');
    const phoneIcon = document.querySelector('.fas.fa-phone');
    const locationIcon = document.querySelector('.fas.fa-map-marker-alt');
    const linkedinIcon = document.querySelector('.fab.fa-linkedin');

    expect(envelopeIcon).toBeInTheDocument();
    expect(phoneIcon).toBeInTheDocument();
    expect(locationIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });
}); 