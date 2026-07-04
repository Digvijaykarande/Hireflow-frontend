import React from 'react';
import "../stylesheet/loadingpage.css";

function LoadingPage() {
  return (
    <div className="loading-main">
      <div className="loading-content">

        {/* Signature animation: candidate node --> flowing pulse --> company node */}
        <div className="flow-animation" aria-hidden="true">
          <svg viewBox="0 0 320 140" className="flow-svg" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="70" r="28" className="node node-candidate" />
            <svg x="24" y="54" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12Zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9Z" fill="white" />
            </svg>

            <path id="flowPath" d="M70 70 C 120 18, 200 122, 250 70" className="flow-path" />
            <circle r="5" className="flow-pulse">
              <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowPath" />
              </animateMotion>
            </circle>

            <circle cx="280" cy="70" r="28" className="node node-company" />
            <svg x="264" y="55" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h4a1 1 0 0 1 1 1v3.2c-2.6 1.3-6 2-9.5 2S4.6 12.5 2 11.2V8a1 1 0 0 1 1-1h4Zm2-1.5V7h2V5.5h-2ZM3 13.2c2.6 1.1 5.9 1.7 9.5 1.7s6.9-.6 9.5-1.7V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.8Z" fill="white" />
            </svg>
          </svg>
        </div>

        <div className="title">
          <h1>HireFlow</h1>
          <h2 className="subtitle">Your Professional Network Hub</h2>
        </div>

        <div className="loading-bar" role="status" aria-label="Loading">
          <div className="loading-bar-fill"></div>
        </div>

      </div>
    </div>
  );
}

export default LoadingPage;