import React from "react";
import { useResumeStore } from "../stores/resumeStore";

const SkillsView: React.FC = () => {
  const { skillCategories } = useResumeStore();

  return (
    <div className="page-content">
      <div className="container py-5">
        <h2 className="text-center mb-5">
          <i className="fas fa-code me-3"></i>Skills
        </h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className={`${category.icon} me-2`}></i>
                    {category.name}
                  </h5>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-medium">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
