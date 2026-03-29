import React, { useState } from "react";
import "./orbit.css";

const works = [
  "Kiosks App Design - Safat UK",
  "AI Analytics Dashboard",
  "Financial Data Visualization",
  "Machine Learning Platform",
  "Healthcare SaaS Platform",
  "AI-Powered Customer Support",
  "Predictive Analytics Engine",
  "Car Dashboard Design",
];

export default function OrbitWork() {
  const [active, setActive] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const rings = [
    { radius: 180, items: works.slice(0, 2) },
    { radius: 260, items: works.slice(2, 5) },
    { radius: 340, items: works.slice(5, 8) },
  ];

  return (
    <div className="orbit-wrapper">

      {/* ORBIT */}
      <div className={`orbit-page ${active ? "shift-left" : ""}`}>
        <div className="orbit-container">

          {/* CENTER */}
          <div className="center-circle">
            <h2>Manish Katke</h2>
            <p>UI/UX Designer</p>
            <span>12+ Years Experience</span>
          </div>

          {rings.map((ring, ringIndex) => (
            <div
              key={ringIndex}
              className="orbit-ring"
              style={{
                width: `${ring.radius * 2}px`,
                height: `${ring.radius * 2}px`,
              }}
            >
              <div
                className={`orbit-rotate ${paused ? "paused" : ""}`}
                style={{
                  animationDuration: `${20 + ringIndex * 10}s`,
                }}
              >
                {ring.items.map((label, i) => {
                  const angle = (i / ring.items.length) * 360;

                  return (
                    <div
                      key={label}
                      className="orbit-item-wrapper"
                      style={{
                        transform: `rotate(${angle}deg) translate(${ring.radius}px)`,
                      }}
                    >
                      <div
                        className="orbit-item"
                        style={{
                          transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
                        }}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onClick={() => setActive(label)}
                      >
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={`case-panel ${active ? "open" : ""}`}>
        {active && (
          <>
            <div className="panel-header">
              <h2>{active}</h2>
              <button className="close-btn" onClick={() => setActive(null)}>
                ✕
              </button>
            </div>

            <div className="panel-content">
              <p>This is your case study panel.</p>
              <p>Add images, UX process, results, etc.</p>
            </div>
          </>
        )}
      </div>

    </div>
  );
}