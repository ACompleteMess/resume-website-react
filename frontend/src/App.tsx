import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";
import ExperienceDetailView from "./views/ExperienceDetailView";
import SkillsView from "./views/SkillsView";
import ContactView from "./views/ContactView";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import custom styles
import "./assets/main.css";

// Environment banner component
const EnvironmentBanner: React.FC = () => {
  const env = String(process.env.NODE_ENV || "development");
  const showEnvBanner = env !== "production";

  if (!showEnvBanner) return null;

  // Capitalize the environment label
  const envLabel =
    env.charAt(0).toUpperCase() + env.slice(1) + " Environment React";

  let envClass = "env-banner-test";
  if (env === "development") {
    envClass = "env-banner-dev";
  } else if (env === "staging") {
    envClass = "env-banner-staging";
  }

  return <div className={`env-banner ${envClass}`}>{envLabel}</div>;
};

// Navigation component
const Navigation: React.FC = () => {
  const location = useLocation();

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      // Bootstrap 5 uses Collapse instance
      const collapse =
        (window as any).bootstrap && (window as any).bootstrap.Collapse
          ? (window as any).bootstrap.Collapse.getOrCreateInstance(
              navbarCollapse,
            )
          : null;
      if (collapse) {
        collapse.hide();
      } else {
        // fallback: remove 'show' class
        navbarCollapse.classList.remove("show");
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-user-tie me-2"></i>Erik Stuble
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
                onClick={closeNavbar}
              >
                <i className="fas fa-home me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
                onClick={closeNavbar}
              >
                <i className="fas fa-user me-1"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname.startsWith("/experience") ? "active" : ""}`}
                to="/experience"
                onClick={closeNavbar}
              >
                <i className="fas fa-briefcase me-1"></i>Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/skills" ? "active" : ""}`}
                to="/skills"
                onClick={closeNavbar}
              >
                <i className="fas fa-code me-1"></i>Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                to="/contact"
                onClick={closeNavbar}
              >
                <i className="fas fa-envelope me-1"></i>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0">
          <i className="fas fa-copyright me-2"></i>2024 Erik Stuble. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router basename="/resume-website-react/">
      <div id="app">
        <EnvironmentBanner />
        <Navigation />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/experience" element={<ExperienceView />} />
            <Route
              path="/experience/:slug"
              element={<ExperienceDetailView />}
            />
            <Route path="/skills" element={<SkillsView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
