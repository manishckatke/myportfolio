import React, { useState } from "react";
import "./orbit.css";

const works = [
  "User Research",
  "SaaS Design",
  "Design Systems",
  "Enterprise UX",
  "Mobile UX",
  "Dashboard Design",
  "UX Audit",
];

export default function OrbitWork() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={`orbit-page ${active ? "shifted" : ""}`}>

      {/* ORBIT SECTION */}
      <div className="orbit-container">

        {/* Center */}
        <div className="center-circle">
          <h2>Manish Katke</h2>
          <p>UI/UX Designer</p>
          <span>12+ Years Experience</span>
        </div>

        {/* Rings */}
        {[200, 300, 400].map((radius, ringIndex) => (
          <div
            key={ringIndex}
            className="orbit-ring"
            style={{
              width: radius * 2,
              height: radius * 2,
              animationDuration: `${20 + ringIndex * 10}s`,
            }}
          >
            {works
              .filter((_, i) => i % 3 === ringIndex)
              .map((label, i) => {
                const angle = (i / 3) * 360;

                return (
                  <div
                    key={label}
                    className="orbit-item-wrapper"
                    style={{
                      transform: `rotate(${angle}deg) translate(${radius}px)`,
                    }}
                  >
                    <div
                      className={`orbit-item ${
                        active === label ? "active" : ""
                      }`}
                      style={{
                        animationDuration: `${20 + ringIndex * 10}s`,
                      }}
                      onClick={() => setActive(label)}
                    >
                      {label}
                    </div>
                  </div>
                );
              })}
          </div>
        ))}

        {/* CTA */}
        {!active && (
          <button className="explore-btn">
            Explore My Work
          </button>
        )}
      </div>

      {/* RIGHT CONTENT PANEL */}
      <div className="content-panel">
        {active && (
          <>
            <h2>{active}</h2>
            <p>
              This is your <b>{active}</b> case study.
              Replace this with real project screens + storytelling.
            </p>

            <button onClick={() => setActive(null)}>
              ← Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}