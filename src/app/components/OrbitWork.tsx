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
    { radius: 180, items: works.slice(0, 2) }, // inner
    { radius: 260, items: works.slice(2, 5) }, // middle
    { radius: 340, items: works.slice(5, 8) }, // outer
  ];

  return (
    <div className="orbit-wrapper">

      {/* ORBIT */}
      <div className={`orbit-page ${active ? "hide" : ""}`}>
        <div className="orbit-container">

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

      {/* CASE STUDY */}
      <div className={`case-study ${active ? "show" : ""}`}>
        {active && (
          <>
            <div className="case-header">
              <button onClick={() => setActive(null)}>← Back</button>
              <h2>{active}</h2>
            </div>

            <div className="case-content">
              <h1>{active}</h1>
              <p>
                Add your real case study here with UI screens, process,
                and results.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}