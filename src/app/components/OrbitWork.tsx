import React from "react";
import "./orbit.css";

const rings = [
  { radius: 180, speed: 20, label: "User Research", angle: 20 },
  { radius: 260, speed: 30, label: "SaaS Design", angle: 140 },
  { radius: 340, speed: 40, label: "Design Systems", angle: 260 },
  { radius: 420, speed: 50, label: "Enterprise UX", angle: 320 },
];

export default function OrbitWork() {
  return (
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
              transform: `rotate(${ring.angle}deg) translate(${ring.radius}px)`,
            }}
          >
            <div className="orbit-item">
                style={{ animationDuration: `${ring.speed}s` }}
              {ring.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}