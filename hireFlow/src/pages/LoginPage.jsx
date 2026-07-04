import React, { useState } from 'react';
import "../stylesheet/loginpage.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-main">

      {/* Left brand panel — hidden on mobile */}
      <div className="brand-panel">
        <div className="brand-content">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
              <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h4a1 1 0 0 1 1 1v3.2c-2.6 1.3-6 2-9.5 2S4.6 12.5 2 11.2V8a1 1 0 0 1 1-1h4Zm2-1.5V7h2V5.5h-2ZM3 13.2c2.6 1.1 5.9 1.7 9.5 1.7s6.9-.6 9.5-1.7V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.8Z" fill="var(--primary)" />
            </svg>
          </div>

          <h1 className="brand-title">HireFlow</h1>
          <p className="brand-tagline">Where talent flows to opportunity.</p>

          <ul className="brand-features">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Verified companies and real recruiters
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Direct messaging with hiring teams
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Smart matching built for your skills
            </li>
          </ul>

          <div className="brand-flow-graphic" aria-hidden="true">
            <svg viewBox="0 0 320 90" className="mini-flow-svg">
              <circle cx="28" cy="45" r="16" className="mini-node" />
              <path id="miniFlowPath" d="M44 45 C 110 8, 210 82, 276 45" className="mini-flow-path" />
              <circle r="4" className="mini-flow-pulse">
                <animateMotion dur="2.2s" repeatCount="indefinite">
                  <mpath href="#miniFlowPath" />
                </animateMotion>
              </circle>
              <circle cx="292" cy="45" r="16" className="mini-node" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="form-panel">
        <div className="login-card">

          <div className="mobile-logo">
            <div className="logo-mark small">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h4a1 1 0 0 1 1 1v3.2c-2.6 1.3-6 2-9.5 2S4.6 12.5 2 11.2V8a1 1 0 0 1 1-1h4Zm2-1.5V7h2V5.5h-2ZM3 13.2c2.6 1.1 5.9 1.7 9.5 1.7s6.9-.6 9.5-1.7V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.8Z" fill="var(--primary)" />
              </svg>
            </div>
            <span>HireFlow</span>
          </div>

          <h2 className="form-title">Welcome back</h2>
          <p className="form-subtitle">Sign in to continue to your account</p>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <span className="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" stroke="currentColor" strokeWidth="1.6" /><path d="m4 6.5 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <input type="email" placeholder="Email address" required />
            </div>

            <div className="input-group">
              <span className="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </span>
              <input type={showPassword ? "text" : "password"} placeholder="Password" required />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18M10.6 10.7a2.4 2.4 0 0 0 3.4 3.3M6.5 6.9C4.4 8.3 2.9 10.3 2 12c1.6 3.2 5.2 6.5 10 6.5 1.7 0 3.2-.4 4.5-1.1M9.5 5.4A10.6 10.6 0 0 1 12 5.5c4.8 0 8.4 3.3 10 6.5-.5 1-1.2 2.1-2.1 3.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 12c1.6-3.2 5.2-6.5 10-6.5S20.4 8.8 22 12c-1.6 3.2-5.2 6.5-10 6.5S3.6 15.2 2 12Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" /></svg>
                )}
              </button>
            </div>

            <div className="form-row">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#!" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="submit-btn">
              <span>Sign in</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="btn-arrow"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </form>

          <div className="divider"><span>Or continue with</span></div>

          <div className="social-buttons">
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.4H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
                <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.3 21.3 7.3 24 12 24Z" />
                <path fill="#FBBC05" d="M5.4 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.6.4-2.4V6.5H1.4A12 12 0 0 0 0 12c0 1.9.5 3.8 1.4 5.5l4-3.1Z" />
                <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.4 6.5l4 3.1C6.3 6.9 8.9 4.8 12 4.8Z" />
              </svg>
              Google
            </button>
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path fill="#fff" d="M7.1 9.7H4.4V19h2.7V9.7ZM5.7 8.5a1.6 1.6 0 1 0 0-3.1 1.6 1.6 0 0 0 0 3.1ZM19.6 19v-5.1c0-2.7-1.4-4-3.3-4a2.9 2.9 0 0 0-2.6 1.4V9.7H11v9.3h2.7v-4.9c0-1.3.2-2.5 1.8-2.5s1.4 1.4 1.4 2.6V19h2.7Z" />
              </svg>
              LinkedIn
            </button>
          </div>

          <p className="signup-text">Don't have an account? <a href="#!">Sign up</a></p>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;