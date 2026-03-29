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

      {/* ORBIT VIEW */}
      <div className={`orbit-page ${active ? "hide" : ""}`}>

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
                width: `${ring.radius * 2}px`,
                height: `${ring.radius * 2}px`,
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
                      className="orbit-item"
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
      </div>

      {/* CASE STUDY VIEW */}
      <div className={`case-study ${active ? "show" : ""}`}>
        {active && (
          <>
            <div className="case-header">
              <button onClick={() => setActive(null)}>← Back</button>
              <h2>{active}</h2>
            </div>

            <div className="case-content">

              <section className="hero">
                <h1>{active}</h1>
                <p>
                  This is your premium case study. Add problem, solution,
                  UX process, and real UI screens.
                </p>
              </section>

              <section className="image-block">
                <div className="img-placeholder">Screen 1</div>
                <div className="img-placeholder">Screen 2</div>
              </section>

              <section className="text-block">
                <h3>UX Process</h3>
                <p>Research → Wireframe → UI → Testing</p>
              </section>

              <section className="image-block">
                <div className="img-placeholder">Before</div>
                <div className="img-placeholder">After</div>
              </section>

            </div>
          </>
        )}
      </div>
    </div>
  );
}