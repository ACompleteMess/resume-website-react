import React from "react";
import { useParams, Link } from "react-router-dom";
import { useResumeStore } from "../stores/resumeStore";

const ExperienceDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getExperienceBySlug } = useResumeStore();

  const experience = slug ? getExperienceBySlug(slug) : null;

  if (!experience) {
    return (
      <div className="page-content">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h3>Experience Not Found</h3>
                  <p>The requested experience could not be found.</p>
                  <Link to="/experience" className="btn btn-primary">
                    Back to Experience
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>
                <i className="fas fa-briefcase me-3"></i>
                {experience.position}
              </h2>
              <Link to="/experience" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>Back to Experience
              </Link>
            </div>

            <div className="card shadow mb-4">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-8">
                    <h4 className="text-primary mb-2">{experience.company}</h4>
                    <p className="text-muted mb-3">
                      <i className="fas fa-calendar me-2"></i>
                      {experience.duration}
                    </p>
                    <p className="text-muted mb-3">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {experience.location}
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <div className="badge bg-primary fs-6 mb-2">
                      {experience.technologies.length} Technologies
                    </div>
                  </div>
                </div>

                {experience.companyOverview && (
                  <div className="mb-4">
                    <h5>Company Overview</h5>
                    <p className="text-muted">{experience.companyOverview}</p>
                  </div>
                )}

                <div className="mb-4">
                  <h5>Description</h5>
                  <p>{experience.description}</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">
                      <i className="fas fa-tools me-2"></i>Technologies
                    </h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary fs-6">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header bg-success text-white">
                    <h5 className="mb-0">
                      <i className="fas fa-trophy me-2"></i>Key Achievements
                    </h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="mb-3">
                          <div className="d-flex">
                            <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                            <span>{achievement}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
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

export default ExperienceDetailView;
