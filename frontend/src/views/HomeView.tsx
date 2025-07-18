import React from 'react';
import { Link } from 'react-router-dom';
import { useResumeStore } from '../stores/resumeStore';

const HomeView: React.FC = () => {
  const { personalInfo } = useResumeStore();

  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-primary mb-4">
                Hello, I'm
                <span className="name-highlight"> {personalInfo.name}</span>
              </h1>
              <p className="lead mb-4">
                {personalInfo.summary}
              </p>
              <div className="d-flex gap-3">
                <Link to="/about" className="btn btn-primary btn-lg">
                  <i className="fas fa-user me-2"></i>Learn More
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-envelope me-2"></i>Contact Me
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="profile-image">
                <i className="fas fa-user-circle fa-10x text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView; 