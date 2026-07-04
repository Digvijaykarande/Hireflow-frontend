import React, { useState, useMemo } from 'react';
import "../stylesheet/homepage.css";

/* ---------------------------------------------------------------------
   MOCK DATA — structured to match the real API response shapes.
   Swap useState initial values / useMemo source for actual fetch calls to:
   GET /api/dashboard/candidate   -> stats
   GET /api/jobs (+ search/location/status filters) -> jobs
   GET /api/notifications/unread-count -> unreadCount
--------------------------------------------------------------------- */

const MOCK_STATS = [
  { key: "applied", label: "Jobs applied", value: 12 },
  { key: "interviews", label: "Interviews", value: 3 },
  { key: "offers", label: "Offers", value: 1 },
  { key: "saved", label: "Saved jobs", value: 8 },
];

const MOCK_JOBS = [
  { id: "1", title: "Java Backend Developer", company: "TechNova", initials: "TN", location: "Pune", salaryMin: 600000, salaryMax: 1200000, skills: ["Java", "Spring Boot", "MongoDB", "Redis"], status: "OPEN", postedAgo: "2h ago" },
  { id: "2", title: "React Frontend Engineer", company: "PixelCraft", initials: "PC", location: "Remote", salaryMin: 500000, salaryMax: 900000, skills: ["React", "TypeScript", "CSS"], status: "OPEN", postedAgo: "5h ago" },
  { id: "3", title: "Full Stack Developer (MERN)", company: "Zenith Labs", initials: "ZL", location: "Pune", salaryMin: 700000, salaryMax: 1400000, skills: ["Node.js", "React", "MongoDB", "AWS"], status: "OPEN", postedAgo: "1d ago" },
  { id: "4", title: "DevOps Engineer", company: "CloudBridge", initials: "CB", location: "Bengaluru", salaryMin: 900000, salaryMax: 1600000, skills: ["Docker", "Kubernetes", "Azure"], status: "OPEN", postedAgo: "1d ago" },
  { id: "5", title: "Backend Intern", company: "Nimbus Systems", initials: "NS", location: "Pune", salaryMin: 180000, salaryMax: 300000, skills: ["Java", "SQL"], status: "CLOSED", postedAgo: "3d ago" },
  { id: "6", title: "Product Engineer", company: "Loopline", initials: "LL", location: "Remote", salaryMin: 800000, salaryMax: 1500000, skills: ["Spring Boot", "React", "System Design"], status: "OPEN", postedAgo: "4d ago" },
];

const RECENT_ACTIVITY = [
  { company: "TechNova", role: "Java Backend Developer", status: "Interview", when: "Today" },
  { company: "PixelCraft", role: "React Frontend Engineer", status: "Applied", when: "Yesterday" },
  { company: "Zenith Labs", role: "Full Stack Developer", status: "Offer", when: "3 days ago" },
  { company: "Orbit Data", role: "Data Analyst", status: "Rejected", when: "1 week ago" },
];

const LOCATIONS = ["All locations", "Pune", "Bengaluru", "Remote"];
const STATUS_CHIPS = ["All", "Open", "Closed"];

function formatSalary(min, max) {
  const toLPA = (n) => (n / 100000).toFixed(0);
  return `₹${toLPA(min)}L - ₹${toLPA(max)}L`;
}

const CARD_COLORS = ["blue", "teal", "amber", "coral"];

function HomePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [statusFilter, setStatusFilter] = useState("All");
  const [savedIds, setSavedIds] = useState(new Set(["3", "6"]));
  const [appliedIds, setAppliedIds] = useState(new Set());

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchesSearch =
        search.trim() === "" ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchesLocation = location === "All locations" || job.location === location;
      const matchesStatus = statusFilter === "All" || job.status === statusFilter.toUpperCase();
      return matchesSearch && matchesLocation && matchesStatus;
    });
  }, [search, location, statusFilter]);

  const toggleSave = (id) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const applyToJob = (id) => {
    setAppliedIds((prev) => new Set(prev).add(id));
  };

  return (
    <div className="home-wrapper">

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
            <button className="nav-avatar" aria-label="Profile menu">DK</button>
          </div>
        </div>
      </header>

      <div className="home-layout">

        {/* ===== Left sidebar ===== */}
        <aside className="sidebar-left">
          <div className="profile-card">
            <div className="profile-avatar">DP</div>
            <h3>Digvijay Karande</h3>
            <p>Full Stack Developer (MERN)</p>
            <span className="profile-location">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.8" /></svg>
              Pune, Maharashtra
            </span>

            <div className="profile-progress">
              <div className="progress-label">
                <span>Profile strength</span>
                <span>70%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: "70%" }} />
              </div>
            </div>
          </div>

          <nav className="side-nav">
            <a href="#!" className="side-nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h4a1 1 0 0 1 1 1v3.2c-2.6 1.3-6 2-9.5 2S4.6 12.5 2 11.2V8a1 1 0 0 1 1-1h4Zm2-1.5V7h2V5.5h-2ZM3 13.2c2.6 1.1 5.9 1.7 9.5 1.7s6.9-.6 9.5-1.7V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.8Z" stroke="currentColor" strokeWidth="1.3" /></svg>
              My applications
              <span className="side-count">12</span>
            </a>
            <a href="#!" className="side-nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 4h12v16l-6-3.5L6 20V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
              Saved jobs
              <span className="side-count">{savedIds.size}</span>
            </a>
            <a href="#!" className="side-nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              Interviews
              <span className="side-count">3</span>
            </a>
            <a href="#!" className="side-nav-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" /><path d="M4.5 20c1.4-3.8 4.6-6 7.5-6s6.1 2.2 7.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              My profile
            </a>
          </nav>
        </aside>

        {/* ===== Main feed ===== */}
        <main className="main-feed">

          <div className="stats-strip">
            {MOCK_STATS.map((s) => (
              <div className={`stat-card stat-${s.key}`} key={s.key}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="filter-bar">
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>

            <div className="status-chips">
              {STATUS_CHIPS.map((c) => (
                <button
                  key={c}
                  className={`chip ${statusFilter === c ? "active" : ""}`}
                  onClick={() => setStatusFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="job-feed">
            {filteredJobs.length === 0 && (
              <div className="empty-state">
                <p>No jobs match your filters right now.</p>
                <span>Try a different keyword or clear your filters.</span>
              </div>
            )}

            {filteredJobs.map((job, i) => {
              const isSaved = savedIds.has(job.id);
              const isApplied = appliedIds.has(job.id);
              const color = CARD_COLORS[i % CARD_COLORS.length];

              return (
                <article className="job-card" key={job.id} style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className={`company-mark ${color}`}>{job.initials}</div>

                  <div className="job-info">
                    <div className="job-info-top">
                      <div>
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-meta">{job.company} • {job.location} • {job.postedAgo}</p>
                      </div>
                      <button
                        className={`save-btn ${isSaved ? "saved" : ""}`}
                        onClick={() => toggleSave(job.id)}
                        aria-label={isSaved ? "Unsave job" : "Save job"}
                      >
                        <svg width="19" height="19" viewBox="0 0 24 24" fill={isSaved ? "currentColor" : "none"}>
                          <path d="M6 4h12v16l-6-3.5L6 20V4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                    <p className="job-salary">{formatSalary(job.salaryMin, job.salaryMax)} / year</p>

                    <div className="job-tags">
                      {job.skills.slice(0, 4).map((skill) => (
                        <span className="tag" key={skill}>{skill}</span>
                      ))}
                      {job.skills.length > 4 && <span className="tag tag-more">+{job.skills.length - 4}</span>}
                    </div>

                    <div className="job-footer">
                      <span className={`status-pill ${job.status === "OPEN" ? "open" : "closed"}`}>
                        {job.status === "OPEN" ? "Open" : "Closed"}
                      </span>

                      <button
                        className={`apply-btn ${isApplied ? "applied" : ""}`}
                        disabled={isApplied || job.status !== "OPEN"}
                        onClick={() => applyToJob(job.id)}
                      >
                        {isApplied ? (
                          <>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Applied
                          </>
                        ) : "Apply now"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredJobs.length > 0 && (
            <button className="load-more-btn">Load more jobs</button>
          )}
        </main>

        {/* ===== Right sidebar ===== */}
        <aside className="sidebar-right">
          <div className="activity-card">
            <h4>Recent activity</h4>
            <ul>
              {RECENT_ACTIVITY.map((item, i) => (
                <li key={i}>
                  <div className="activity-text">
                    <p className="activity-role">{item.role}</p>
                    <p className="activity-company">{item.company} • {item.when}</p>
                  </div>
                  <span className={`status-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default HomePage;