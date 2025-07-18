import React from "react";
import { useResumeStore } from "../stores/resumeStore";

const AboutView: React.FC = () => {
  const { personalInfo } = useResumeStore();

  return (
    <div className="page-content">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-center mb-5">
              <i className="fas fa-user me-3"></i>About Me
            </h2>
            <div className="card shadow">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-4 text-center mb-4">
                    <i className="fas fa-user-circle fa-8x text-primary mb-3"></i>
                    <h4>{personalInfo.name}</h4>
                    <p className="text-muted">{personalInfo.title}</p>
                  </div>
                  <div className="col-md-8">
                    <h5>Professional Summary</h5>
                    <p className="mb-4">
                      I have over 15 years of experience learning and working at
                      the intersection of software, engineering, and business.
                      I've applied these skills by living, working, and managing
                      teams both in-person and remotely across Australia, Asia,
                      Europe, and the Americas. Through these diverse
                      experiences, I've built deep expertise in cloud,
                      DevSecOps, automation, and agile delivery—driving
                      transformation and business agility, mentoring talent, and
                      creating world-class products and platforms that serve a
                      global community of customers and consumers.
                    </p>
                    <h5>Education</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-graduation-cap text-primary me-2"></i>
                        {personalInfo.education.degree}
                      </li>
                      <li>
                        <i className="fas fa-university text-primary me-2"></i>
                        {personalInfo.education.school},
                        {personalInfo.education.years}
                      </li>
                      <li>
                        <i className="fas fa-graduation-cap text-primary me-2"></i>
                        Electrical Engineering & Engineering Management
                      </li>
                      <li>
                        <i className="fas fa-university text-primary me-2"></i>
                        Miami University, 2013
                      </li>
                    </ul>
                    <h5 className="mt-4">Professional Involvement</h5>
                    <div>
                      <div className="mb-3">
                        <strong>Mentor</strong>
                        <br />
                        First Robotics Competition (FRC) • February 2023 -
                        Present
                        <ul>
                          <li>
                            Started a new robotics program at an all girls high
                            school in the local Cleveland area.
                          </li>
                          <li>
                            Providing technical guidance and mentorship to the 8
                            club members and supported the participation in FRC.
                          </li>
                          <li>
                            Facilitated learning, development, problem-solving,
                            teamwork and communication skills for members.
                          </li>
                        </ul>
                      </div>
                      <div className="mb-3">
                        <strong>Founding Member</strong>
                        <br />
                        Allianz Technology, DevOps Cultural Board • January 2020
                        - August 2021
                        <ul>
                          <li>
                            Collaborated with global leaders and board members
                            to develop and implement solutions, resulting in
                            successful launches of collaboration tools,
                            automation, and cross-training within the company.
                          </li>
                          <li>
                            Promoted DevOps culture, enhancing team
                            collaboration, efficiency, and knowledge sharing.
                          </li>
                          <li>
                            Championed engineering processes and best practices
                            by leading lightning talks and securing $100,000 in
                            funding to develop and support community tooling
                            including GitHub, Actions, and FluxCD.
                          </li>
                        </ul>
                      </div>
                      <div className="mb-3">
                        <strong>Founding Member</strong>
                        <br />
                        OpinionLab, Cultural Committee • November 2015 - August
                        2017
                        <ul>
                          <li>
                            Organized 10 events including team dinners, escape
                            rooms, and birthdays/anniversary celebrations.
                          </li>
                          <li>
                            Successfully integrated cultural and diversity
                            levers into the hiring process for the technology
                            department.
                          </li>
                        </ul>
                      </div>
                      <div className="mb-3">
                        <strong>DevOps Clan Member</strong>
                        <br />
                        Suncorp Group • May 2014 - October 2015
                        <ul>
                          <li>
                            Participated in DevOps best practices and how best
                            to rollout DevOps on a domain-wide scale.
                          </li>
                          <li>
                            Conducted monthly lightning talks on DevOps and
                            organized quarterly company FedEx days
                            (hack-a-thons).
                          </li>
                          <li>
                            Hosted 3 public meetups on current CI/CD and DevOps
                            topics and tooling.
                          </li>
                        </ul>
                      </div>
                      <div className="mb-3">
                        <strong>Graduate Ambassador</strong>
                        <br />
                        Suncorp Group • August 2013 - October 2015
                        <ul>
                          <li>
                            Interviewed and engaged in the hiring process of new
                            graduates and working students.
                          </li>
                          <li>
                            Mentored 10 new employees and graduates to support
                            the adjustment to the corporate environment.
                          </li>
                          <li>
                            Supported Suncorp at career fairs at 10 universities
                            across 3 major cities in Australia.
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default AboutView;
