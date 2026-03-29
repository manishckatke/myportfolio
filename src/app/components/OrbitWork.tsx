import { motion } from "motion/react";

const items = [
  { label: "AI/ML UX", angle: 0, targetId: "ai-dashboard" },
  { label: "SaaS Design", angle: 60, targetId: "healthcare-saas" },
  { label: "Dashboards", angle: 120, targetId: "analytics-engine" },
  { label: "Enterprise UX", angle: 180, targetId: "ml-platform" },
  { label: "Design Systems", angle: 240, targetId: "kiosks-app" },
  { label: "User Research", angle: 300, targetId: "data-viz" },
];

interface OrbitWorkProps {
  onNodeClick?: (id: string) => void; // optional click handler
}

export default function OrbitWork({ onNodeClick }: OrbitWorkProps) {
  const handleClick = (id: string) => {
    if (onNodeClick) {
      onNodeClick(id); // call parent scroll function
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full" />

      {/* Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-teal-500/20 rounded-full"
      >

        {items.map((item, i) => {
          const radius = 250;
          const x = radius * Math.cos((item.angle * Math.PI) / 180);
          const y = radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="absolute cursor-pointer"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
              onClick={() => handleClick(item.targetId)}
            >
              <div className="px-4 py-2 rounded-full bg-teal-500/20 text-teal-200 backdrop-blur-md border border-teal-400/30 shadow-lg text-center">
                {item.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center Circle */}
      <div className="relative z-10 w-64 h-64 rounded-full bg-white/5 backdrop-blur-xl border border-teal-500/30 flex items-center justify-center text-center shadow-xl">
        <div>
          <h2 className="text-2xl text-white font-semibold mb-2">
            Manish Katke
          </h2>
          <p className="text-teal-300 text-sm">UI/UX Designer</p>
          <p className="text-teal-400/60 text-xs mt-1">12+ Years Experience</p>
        </div>
      </div>

      {/* CTA */}
      <div className="absolute bottom-20 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-teal-500 text-black rounded-full shadow-lg shadow-teal-500/40 hover:bg-teal-400 transition-all"
          onClick={() => onNodeClick && onNodeClick("kiosks-app")}
        >
          Explore My Work
        </motion.button>
      </div>
    </div>
  );
}