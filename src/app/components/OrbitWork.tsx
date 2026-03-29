import React, { useState } from "react";
import "./orbit.css";

const rings = [
  { radius: 180, speed: 20, label: "User Research" },
  { radius: 260, speed: 30, label: "SaaS Design" },
  { radius: 340, speed: 40, label: "Design Systems" },
];

export default function OrbitWork() {
  const [active, setActive] = useState("User Research");

  return (
    <div className="orbit-layout">
      
      {/* LEFT - Orbit */}
      <div className="orbit-container">
        
        {/* Center */}
        <div className="center-circle">
          <h2>Manish Katke</h2>
          <p>UI/UX Designer</p>
          <span>12+ Years Experience</span>
        </div>

        {/* Rings */}
        {rings.map((ring, i) => (
          <div
            key={i}
            className="orbit-ring"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              animationDuration: `${ring.speed}s`,
            }}
          >
            <div
              className="orbit-item-wrapper"
              style={{
                transform: `translate(-50%, -50%) rotate(0deg) translate(${ring.radius}px)`,
              }}
            >
              <div
                className={`orbit-item ${active === ring.label ? "active" : ""}`}
                style={{ animationDuration: `${ring.speed}s` }}
                onClick={() => setActive(ring.label)}
              >
                {ring.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT - Content */}
      <div className="orbit-content">
        <h2>{active}</h2>
        <p>
          This section shows details about <b>{active}</b>.  
          Replace this with your real case study / project content.
        </p>
      </div>
    </div>
  );
}