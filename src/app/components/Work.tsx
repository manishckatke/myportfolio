import OrbitWork from "./OrbitWork";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Work() {
  const projects = [
    {
      id: "kiosks-app",
      title: "Kiosks App Design - Safat UK",
      description: "Interactive kiosk interface design for UK client Safat, featuring intuitive navigation and modern UI",
      tags: ["SaaS", "UI Design", "Kiosks"],
      color: "from-teal-500/20 to-cyan-500/20",
      image: "https://images.unsplash.com/photo-1622127800610-3022cb75dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ai-dashboard",
      title: "AI Analytics Dashboard",
      description: "Enterprise AI monitoring platform for real-time model performance",
      tags: ["SaaS", "AI UX", "Dashboard"],
      color: "from-blue-500/20 to-purple-500/20",
      image: "https://images.unsplash.com/photo-1622127800610-3022cb75dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "data-viz",
      title: "Financial Data Visualization",
      description: "Interactive visualization tool for complex financial datasets",
      tags: ["Analytics", "Data Visualization"],
      color: "from-emerald-500/20 to-teal-500/20",
      image: "https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ml-platform",
      title: "Machine Learning Platform",
      description: "End-to-end ML workflow management for data scientists",
      tags: ["SaaS", "AI UX", "Dashboard"],
      color: "from-violet-500/20 to-pink-500/20",
      image: "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "healthcare-saas",
      title: "Healthcare SaaS Platform",
      description: "Patient management system with advanced analytics",
      tags: ["SaaS", "Dashboard", "Analytics"],
      color: "from-cyan-500/20 to-blue-500/20",
      image: "https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ai-chatbot",
      title: "AI-Powered Customer Support",
      description: "Conversational AI interface with natural language processing",
      tags: ["AI UX", "SaaS"],
      color: "from-orange-500/20 to-red-500/20",
      image: "https://images.unsplash.com/photo-1622128082634-1f9742839291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "analytics-engine",
      title: "Predictive Analytics Engine",
      description: "Real-time predictive insights for business intelligence",
      tags: ["Analytics", "Dashboard", "AI UX"],
      color: "from-indigo-500/20 to-purple-500/20",
      image: "https://images.unsplash.com/photo-1622127800610-3022cb75dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  // Smooth scroll function
  const scrollToProject = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* 🌌 Orbit UI Section with clickable nodes */}
      <OrbitWork onNodeClick={scrollToProject} />

      {/* 🖤 Projects Section */}
      <div className="min-h-screen py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
              <span className="bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                Selected Work
              </span>
            </h1>
            <p className="text-xl text-teal-200/70 max-w-2xl">
              A curated collection of projects spanning AI/ML interfaces, data visualization, and enterprise SaaS platforms
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                id={project.id} // ✅ Add id for scrolling
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link to={`/case-study/${project.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative h-full"
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/20">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-teal-700/50 text-xs text-teal-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-3xl mb-3 text-white group-hover:text-teal-100 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-teal-200/60 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-teal-300 group-hover:text-teal-400 transition-colors">
                          <span>View Case Study</span>
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}