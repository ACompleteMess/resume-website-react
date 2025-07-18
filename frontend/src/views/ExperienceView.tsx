import React from 'react';
import { Link } from 'react-router-dom';
import { useResumeStore } from '../stores/resumeStore';

const ExperienceView: React.FC = () => {
  const { experiences } = useResumeStore();

  return (
    <div className="page-content">
      <div className="container py-5">
        <h2 className="text-center mb-5">
          <i className="fas fa-briefcase me-3"></i>Experience
        </h2>
        <div className="row">
          {experiences.map((experience) => (
            <div key={experience.id} className="col-lg-6 mb-4">
              <div className="card h-100 shadow">
                <div className="card-body">
                  <h5 className="card-title">{experience.position}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {experience.company}
                  </h6>
                  <p className="card-text">
                    <small className="text-muted">
                      {experience.duration} • {experience.location}
                    </small>
                  </p>
                  <p className="card-text">{experience.description}</p>
                  <div className="mb-3">
                    <strong>Technologies:</strong>
                    <div className="mt-2">
                      {experience.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={`/experience/${experience.slug}`} 
                    className="btn btn-outline-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceView; 