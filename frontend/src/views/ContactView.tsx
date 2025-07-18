import React from 'react';
import { useResumeStore } from '../stores/resumeStore';

const ContactView: React.FC = () => {
  const { personalInfo } = useResumeStore();

  return (
    <div className="page-content">
      <div className="container py-5">
        <h2 className="text-center mb-5">
          <i className="fas fa-envelope me-3"></i>Contact Me
        </h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Contact Information</h5>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="fas fa-envelope text-primary me-2"></i>
                        <a href={`mailto:${personalInfo.email}`}>
                          {personalInfo.email}
                        </a>
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-phone text-primary me-2"></i>
                        <a href={`tel:${personalInfo.phone}`}>
                          {personalInfo.phone}
                        </a>
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        {personalInfo.location}
                      </li>
                      <li className="mb-3">
                        <i className="fab fa-linkedin text-primary me-2"></i>
                        <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                          {personalInfo.linkedin}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Get in Touch</h5>
                    <p>
                      I'm always interested in hearing about new opportunities and 
                      connecting with fellow professionals. Feel free to reach out 
                      if you'd like to discuss potential collaborations, 
                      opportunities, or just want to say hello!
                    </p>
                    <p>
                      Whether you're looking to discuss a potential role, 
                      collaborate on a project, or just want to connect, 
                      I'd love to hear from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView; 