import React, { useState } from 'react';
import "../stylesheet/roleselection.css";

const roles = [
  {
    id: "seeker",
    title: "Job Seeker",
    subtitle: "Looking for full-time opportunities",
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h4a1 1 0 0 1 1 1v3.2c-2.6 1.3-6 2-9.5 2S4.6 12.5 2 11.2V8a1 1 0 0 1 1-1h4Zm2-1.5V7h2V5.5h-2ZM3 13.2c2.6 1.1 5.9 1.7 9.5 1.7s6.9-.6 9.5-1.7V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.8Z" fill="white" />
      </svg>
    ),
  },
  {
    id: "freelancer",
    title: "Freelancer",
    subtitle: "Finding project-based work",
    color: "teal",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v9A1.5 1.5 0 0 1 18.5 17h-13A1.5 1.5 0 0 1 4 15.5v-9Z" stroke="white" strokeWidth="1.6" />
        <path d="M2 19.5h20" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.5 8.5h5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "recruiter",
    title: "Recruiter",
    subtitle: "Hiring talented professionals",
    color: "amber",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="4" y="4" width="4.5" height="16" rx="1" fill="white" />
        <rect x="10" y="8" width="4.5" height="12" rx="1" fill="white" />
        <rect x="16" y="11" width="4.5" height="9" rx="1" fill="white" />
      </svg>
    ),
  },
];

function RoleSection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="role-section">
      <div className="heading">
        <h1>Choose Your Role</h1>
        <h3>Select how you want to use HireFlow</h3>
      </div>

      <div className="cards">
        {roles.map((role, i) => (
          <button
            key={role.id}
            type="button"
            className={`card ${role.color} ${selected === role.id ? "selected" : ""}`}
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => setSelected(role.id)}
            aria-pressed={selected === role.id}
          >
            <div className="card-left">
              <div className="logo-mark">{role.icon}</div>
              <div className="card-text">
                <h2>{role.title}</h2>
                <h4>{role.subtitle}</h4>
              </div>
            </div>

            <span className="chevron" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      <p className="footnote">You can change this later in settings</p>
    </div>
  );
}

export default RoleSection;