import React from 'react'
import { useState } from 'react';

function Navbar() {
    const [search, setSearch] = useState("");
  return (
   <>
   {/* ===== Top navbar ===== */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="nav-logo">
            <div className="logo-mark">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h4a1 1 0 0 1 1 1v3.2c-2.6 1.3-6 2-9.5 2S4.6 12.5 2 11.2V8a1 1 0 0 1 1-1h4Zm2-1.5V7h2V5.5h-2ZM3 13.2c2.6 1.1 5.9 1.7 9.5 1.7s6.9-.6 9.5-1.7V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.8Z" fill="white" />
              </svg>
            </div>
            <span>HireFlow</span>
          </div>

          <div className="nav-search">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" /><path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            <input
              type="text"
              placeholder="Search jobs, companies, skills"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="nav-actions">
            <button className="nav-icon-btn active" aria-label="Home">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none"><path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10v9a1 1 0 0 0 1 1h4v-5h2v5h4a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="nav-icon-btn" aria-label="Messages">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 14.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
            </button>
            <button className="nav-icon-btn" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3a5 5 0 0 0-5 5v3.4c0 .5-.2 1-.5 1.4L5 15.5h14l-1.5-2.7c-.3-.4-.5-.9-.5-1.4V8a5 5 0 0 0-5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <span className="nav-badge">3</span>
            </button>
            <button className="nav-avatar" aria-label="Profile menu">DP</button>
          </div>
        </div>
      </header>

   </>
  )
}

export default Navbar