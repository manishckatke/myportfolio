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
];

export default function OrbitWork() {
  const [active, setActive] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const rings = [
    { radius: 180, items: works.slice(0, 2) },
    { radius: 260, items: works.slice(2, 4) },
    { radius: 340, items: works.slice(4, 7) }, // 3 items
  ];

  return (
    <div className={`orbit-page ${active ? "shifted" : ""}`}>

      {/* ORBIT */}
      <div className="orbit-container">

        {/* Center */}
        <div className="center-circle">
          <h2>Manish Katke</h2>
          <p>UI/UX Designer</p>
          <span>12+ Years Experience</span>
        </div>

        {/* Rings */}
        {rings.map((ring, ringIndex) => (
          <div
            key={ringIndex}
            className={`orbit-ring ${paused ? "paused" : ""}`}
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              animationDuration: `${25 + ringIndex * 10}s`,
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
                    className={`orbit-item ${
                      active === label ? "active" : ""
                    }`}
                    style={{
                      animationDuration: `${25 + ringIndex * 10}s`,
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
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="content-panel">
        {active && (
          <div className="content-inner">
            <h2>{active}</h2>
            <p>
              This is your <b>{active}</b> case study.  
              Add images, UX process, metrics, before/after.
            </p>

            <button onClick={() => setActive(null)}>
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}