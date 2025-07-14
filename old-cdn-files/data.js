// Data file for Resume Website
// This file contains all the skills and technologies data

export const skillCategories = [
  {
    name: "Frontend Development",
    icon: "fas fa-code",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    name: "Backend Development",
    icon: "fas fa-server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    name: "Database & Tools",
    icon: "fas fa-database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
    ],
  },
  {
    name: "Design & UX",
    icon: "fas fa-palette",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Design", level: 75 },
      { name: "Bootstrap", level: 85 },
      { name: "Sass/SCSS", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Adobe Creative Suite", level: 65 },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Senior Web Developer",
    duration: "January 2023 - Present",
    location: "San Francisco, CA",
    description:
      "Led development of modern web applications using Vue.js, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Mentored junior developers and implemented best practices for code quality and performance.",
    technologies: ["Vue.js", "React", "Node.js", "TypeScript", "AWS"],
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Led team of 5 developers on major client project",
    ],
  },
  {
    id: 2,
    company: "Digital Innovations Corp.",
    position: "Full Stack Developer",
    duration: "March 2021 - December 2022",
    location: "New York, NY",
    description:
      "Developed and maintained web applications using modern technologies. Worked on both frontend and backend development, ensuring seamless user experiences and robust server-side functionality.",
    technologies: ["JavaScript", "Python", "Django", "PostgreSQL", "Docker"],
    achievements: [
      "Built 3 major client applications from concept to deployment",
      "Improved database query performance by 50%",
      "Implemented automated testing reducing bugs by 30%",
    ],
  },
  {
    id: 3,
    company: "StartUp Ventures",
    position: "Frontend Developer",
    duration: "June 2020 - February 2021",
    location: "Austin, TX",
    description:
      "Focused on creating responsive and accessible user interfaces. Collaborated with designers to implement pixel-perfect designs and ensure optimal user experience across all devices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass"],
    achievements: [
      "Designed and implemented 10+ responsive web pages",
      "Achieved 95% accessibility score across all pages",
      "Reduced mobile load time by 35%",
    ],
  },
  {
    id: 4,
    company: "Global Systems Ltd.",
    position: "Junior Developer",
    duration: "January 2020 - May 2020",
    location: "Chicago, IL",
    description:
      "Started career in web development, learning modern frameworks and best practices. Contributed to team projects and gained hands-on experience with real-world applications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: [
      "Completed 5 client projects successfully",
      "Learned 3 new technologies within 6 months",
      "Received 'Employee of the Month' recognition",
    ],
  },
];

// You can also add other data here like:
export const personalInfo = {
  name: "Your Name",
  title: "Web Developer",
  email: "your.email@example.com",
  phone: "+1 (234) 567-890",
  location: "City, State, Country",
  linkedin: "linkedin.com/in/yourprofile",
  education: {
    degree: "Bachelor's Degree in Computer Science",
    school: "University Name",
    years: "2020-2024",
  },
  summary:
    "A passionate professional with expertise in web development, problem-solving, and creating innovative solutions.",
};
