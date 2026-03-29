import React, { useState, useEffect } from "react";
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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🎯 Mouse Parallax
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={`orbit-page ${active ? "shifted" : ""}`}>

      {/* ORBIT */}
      <div
        className="orbit-container"
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px) ${
            active ? "translateX(-25%)" : ""
          }`,
        }}
      >

        {/* Glow Background */}
        <div className="bg-glow" />

        {/* Center */}
        <div className="center-circle">
          <h2>Manish Katke</h2>
          <p>UI/UX Designer</p>
          <span>12+ Years Experience</span>
        </div>

        {/* Rings */}
        {[180, 260, 340].map((radius, ringIndex) => (
          <div
            key={ringIndex}
            className={`orbit-ring ring-${ringIndex}`}
            style={{
              width: radius * 2,
              height: radius * 2,
              animationDuration: `${25 + ringIndex * 10}s`,
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
                        animationDuration: `${25 + ringIndex * 10}s`,
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

      {/* CONTENT PANEL */}
      <div className="content-panel">
        {active && (
          <div className="content-inner">
            <h2>{active}</h2>
            <p>
              This is your premium <b>{active}</b> case study section.
              Add real UI screens, metrics, before/after, storytelling.
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