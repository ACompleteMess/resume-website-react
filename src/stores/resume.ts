import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Types for better TypeScript support
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  education: {
    degree: string;
    school: string;
    years: string;
  };
  summary: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const useResumeStore = defineStore("resume", () => {
  // State - converted from your old resumeData object
  const personalInfo = ref<PersonalInfo>({
    name: "Erik Stuble",
    title: "Engineering Manager",
    email: "erik.stuble11@gmail.com",
    phone: "(440) 892-0009",
    location: "Cleveland, Ohio, US",
    linkedin: "linkedin.com/in/erikstuble",
    education: {
      degree: "MBA International Business",
      school: "MIB Trieste School of Management",
      years: "2018",
    },
    summary:
      "Engineering Manager with over a decade of experience leading high-impact platform, infrastructure and DevSecOps teams across cloud-native environments. Proven expertise in cloud cost optimisation (FinOps), compliance automation, and delivering scalable secure infrastructure in AWS and Azure.",
  });

  const experiences = ref<Experience[]>([
    {
      id: 1,
      company: "Rockwell Automation",
      position:
        "Engineering Manager Application Security, Product Automation, FactoryTalk Design Studio",
      duration: "August 2022 - Present",
      location: "Cleveland, Ohio, US",
      description:
        "Led a global team of 15+ engineers across four strategic programs focused on cloud and hybrid infrastructure security and compliance. Spearheaded first time compliance with SOC2, ISO 27001 and Executive Order mandates; automated 60% of audit and governance workflows.",
      technologies: ["AWS", "Azure", "DevSecOps", "CI/CD", "SOC2", "ISO 27001"],
      achievements: [
        "Led a global team of 15+ engineers across four strategic programs",
        "Spearheaded first time compliance with SOC2, ISO 27001 and Executive Order mandates",
        "Automated 60% of audit and governance workflows",
        "Established developer self-service tooling for USER/RBAC microservices",
      ],
    },
    {
      id: 2,
      company: "Allianz Technology SE",
      position:
        "Engineering Manager, Enterprise Architecture - Agile Delivery Platform (ADP)",
      duration: "August 2019 - August 2021",
      location: "Munich, Germany",
      description:
        "Built and scaled a global, cross-functional platform engineering team from one to four teams, delivering cloud native PaaS and SaaS solutions on AWS and Azure using Kubernetes (AKS/EKS), Istio, Terraform and Github Actions.",
      technologies: [
        "AWS",
        "Azure",
        "Kubernetes",
        "AKS/EKS",
        "Istio",
        "Terraform",
        "GitHub Actions",
      ],
      achievements: [
        "Built and scaled platform engineering team from one to four teams",
        "Launched platform from zero to production within 6 months",
        "Scaling to 12 cloud regions and serving 25+ business groups within 18 months",
        "Led cloud FinOps strategy, budgeting and platform SLO, SLA and SLI definition",
      ],
    },
    {
      id: 3,
      company: "Allianz Technology SE",
      position: "Product Manager, Enterprise Architecture - Public Cloud Team",
      duration: "August 2018 - August 2019",
      location: "Munich, Germany",
      description:
        "Established an internal cloud start-up project, evolving this into the company's first full-fledged and global AWS & Azure cloud managed infrastructure service (IaaS) spanning 14 regions and over 300 accounts.",
      technologies: [
        "AWS",
        "Azure",
        "Terraform",
        "Ansible",
        "Jenkins",
        "Python",
        "Go",
        "GitHub",
      ],
      achievements: [
        "Established internal cloud start-up project into global AWS & Azure service",
        "Expanded program from 1 to 5 teams (5 to 30+ members)",
        "Managed $100M+ in cloud spend, implemented cost visibility tooling",
        "Engineered scalable, multi-region landing zones through infrastructure-as-code automation",
      ],
    },
    {
      id: 4,
      company: "OpinionLab",
      position: "Team Leader, Operations Team",
      duration: "October 2016 - August 2017",
      location: "Chicago, Illinois, US",
      description:
        "Led and mentored an 8 member DevSecOps team focused on infrastructure, networking and secure cloud operations. Drove operational excellence by managing prioritisation, delivery cadence and reliability across critical systems.",
      technologies: [
        "DevSecOps",
        "Infrastructure",
        "Networking",
        "Cloud Operations",
        "Agile",
        "Scrum",
      ],
      achievements: [
        "Led and mentored an 8 member DevSecOps team",
        "Drove operational excellence across critical systems",
        "Facilitated agile and scrum-of-scrum ceremonies",
        "Hired and developed technical talent, maintaining over 90% retention",
      ],
    },
    {
      id: 5,
      company: "OpinionLab",
      position: "DevOps Engineer, Operation Team",
      duration: "October 2015 - October 2016",
      location: "Chicago, Illinois, US",
      description:
        "Automated cloud deployments across 15+ production applications using Circle-CI, Chef, Ansible, and GitHub, increasing velocity by 600%. Enhanced production stability by reengineering alerting across PagerDuty, New Relic, Zabbix, Prometheus, and Grafana.",
      technologies: [
        "Circle-CI",
        "Chef",
        "Ansible",
        "GitHub",
        "Terraform",
        "Packer",
        "Vault",
      ],
      achievements: [
        "Automated cloud deployments across 15+ production applications",
        "Increased velocity by 600%",
        "Cut false positives by 180% through alerting reengineering",
        "Spearheaded secure, scalable infrastructure overhaul",
      ],
    },
    {
      id: 6,
      company: "Suncorp Group",
      position: "DevOps Engineer",
      duration: "May 2013 - October 2015",
      location: "Sydney, Australia",
      description:
        "Led AWS cloud migration of 40+ high-traffic e-commerce sites, enabling zero downtime deployments and infrastructure fault tolerance. Built and maintained Ci/CD pipelines using AWS, Jenkins, GIT, CloudFormation, and Ansible.",
      technologies: [
        "AWS",
        "Jenkins",
        "Git",
        "CloudFormation",
        "Ansible",
        "PHP",
        "JavaScript",
        "Drupal",
      ],
      achievements: [
        "Led AWS cloud migration of 40+ high-traffic e-commerce sites",
        "Enabled zero downtime deployments and infrastructure fault tolerance",
        "Built and maintained Ci/CD pipelines supporting scalable multi-region deployment",
        "Piloted Adobe Experience Manager (AEM) migration as part of platform modernisation",
      ],
    },
  ]);

  const skillCategories = ref<SkillCategory[]>([
    {
      name: "Cloud Platforms",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 90 },
        { name: "Kubernetes (K8s)", level: 88 },
        { name: "EKS/AKS", level: 85 },
        { name: "Istio", level: 80 },
        { name: "Docker", level: 85 },
      ],
    },
    {
      name: "Infrastructure as Code",
      icon: "fas fa-code",
      skills: [
        { name: "Terraform", level: 95 },
        { name: "Ansible", level: 90 },
        { name: "CloudFormation", level: 85 },
        { name: "ARM Templates", level: 80 },
        { name: "Packer", level: 75 },
        { name: "Vault", level: 80 },
      ],
    },
    {
      name: "CI/CD & DevOps",
      icon: "fas fa-cogs",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab", level: 85 },
        { name: "GitHub Actions", level: 90 },
        { name: "CircleCI", level: 85 },
        { name: "Chef", level: 80 },
        { name: "Puppet", level: 75 },
      ],
    },
    {
      name: "Leadership & Management",
      icon: "fas fa-users",
      skills: [
        { name: "Agile/Scrum", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "Team Leadership", level: 95 },
        { name: "Hiring & Mentoring", level: 90 },
        { name: "Stakeholder Management", level: 85 },
        { name: "Budget Management", level: 85 },
      ],
    },
    {
      name: "Security & Compliance",
      icon: "fas fa-shield-alt",
      skills: [
        { name: "SOC 2", level: 90 },
        { name: "ISO 27001", level: 85 },
        { name: "DevSecOps", level: 90 },
        { name: "APRA", level: 80 },
        { name: "Bafin", level: 80 },
        { name: "EU Data Laws", level: 75 },
      ],
    },
    {
      name: "Programming & Scripting",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "Python", level: 85 },
        { name: "Go", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 70 },
        { name: "Shell Scripting", level: 85 },
        { name: "YAML", level: 90 },
      ],
    },
  ]);

  // Computed properties - replacing your old computed properties
  const totalExperience = computed(() => {
    const startYear = 2013;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  });

  const filteredExperiences = computed(() => {
    return experiences.value;
  });

  // Actions - replacing your old methods
  const getExperienceById = (id: number) => {
    return experiences.value.find((exp) => exp.id === id);
  };

  return {
    // State
    personalInfo,
    experiences,
    skillCategories,

    // Computed
    totalExperience,
    filteredExperiences,

    // Actions
    getExperienceById,
  };
});
