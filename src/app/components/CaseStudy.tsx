import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Target, Cog, Lightbulb, TrendingUp, Users, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CaseStudy() {
  const { id } = useParams();

  const caseStudyData = {
    "ai-dashboard": {
      title: "AI Analytics Dashboard",
      subtitle: "Enterprise AI monitoring platform for real-time model performance",
      client: "Global Tech Corporation",
      year: "2025",
      role: "Lead Product Designer",
      duration: "6 months",
    },
  };

  const currentCase = caseStudyData[id as keyof typeof caseStudyData] || caseStudyData["ai-dashboard"];

  const timeline = [
    {
      icon: <Target size={32} />,
      phase: "Problem",
      title: "Identifying the Challenge",
      content: "Data scientists and ML engineers lacked a unified platform to monitor AI model performance in production. Existing solutions were fragmented, requiring multiple tools and manual data correlation.",
      metrics: [
        { label: "Tools Used", value: "7+" },
        { label: "Time Spent", value: "40%", subtitle: "on monitoring" },
        { label: "Response Time", value: "4hrs", subtitle: "average" },
      ],
    },
    {
      icon: <Cog size={32} />,
      phase: "Process",
      title: "Research & Design Thinking",
      content: "Conducted extensive user research with 25+ data scientists across 3 continents. Created journey maps, performed competitive analysis, and ran design sprints to identify key pain points.",
      activities: [
        "User Interviews (25 participants)",
        "Competitive Analysis (12 platforms)",
        "Design Sprints (3 weeks)",
        "Prototyping & Testing (5 iterations)",
      ],
    },
    {
      icon: <Lightbulb size={32} />,
      phase: "Solution",
      title: "Design Innovation",
      content: "Designed a unified dashboard with real-time monitoring, predictive alerts, and intuitive data visualization. Created a modular design system enabling customization while maintaining consistency.",
      features: [
        "Real-time Model Performance Tracking",
        "Predictive Alert System",
        "Custom Dashboard Builder",
        "Collaborative Annotation Tools",
        "Advanced Data Visualization",
      ],
    },
    {
      icon: <TrendingUp size={32} />,
      phase: "Impact",
      title: "Measurable Results",
      content: "The platform was adopted across 15 teams within 3 months, significantly reducing monitoring time and improving model reliability. User satisfaction scores exceeded initial targets by 35%.",
      results: [
        { metric: "85%", label: "Reduction in monitoring time" },
        { metric: "3.2hrs", label: "Faster incident response" },
        { metric: "92%", label: "User satisfaction score" },
        { metric: "15+", label: "Teams onboarded" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/work" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Work</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
              {currentCase.title}
            </span>
          </h1>
          <p className="text-2xl text-teal-200/70 mb-12">{currentCase.subtitle}</p>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-teal-400/60 text-sm mb-2">Client</div>
              <div className="text-white">{currentCase.client}</div>
            </div>
            <div>
              <div className="text-teal-400/60 text-sm mb-2">Year</div>
              <div className="text-white">{currentCase.year}</div>
            </div>
            <div>
              <div className="text-teal-400/60 text-sm mb-2">Role</div>
              <div className="text-white">{currentCase.role}</div>
            </div>
            <div>
              <div className="text-teal-400/60 text-sm mb-2">Duration</div>
              <div className="text-white">{currentCase.duration}</div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-32"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-teal-950/30 backdrop-blur-sm border border-teal-700/50">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622127800610-3022cb75dc90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0Njk1MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Project hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-700 via-teal-600 to-teal-700 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative mb-32 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Icon */}
                <div className="flex md:w-1/2 md:justify-end">
                  <div className={`${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-teal-950/50 backdrop-blur-sm border border-teal-700/50 flex items-center justify-center text-teal-300">
                        {item.icon}
                      </div>
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-teal-700 md:block hidden" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="mb-3">
                    <span className="px-4 py-1 rounded-full bg-teal-900/50 backdrop-blur-sm border border-teal-700/50 text-sm text-teal-200">
                      {item.phase}
                    </span>
                  </div>
                  <h2 className="text-4xl mb-4 text-white">{item.title}</h2>
                  <p className="text-xl text-teal-200/70 leading-relaxed mb-8">
                    {item.content}
                  </p>

                  {/* Metrics */}
                  {item.metrics && (
                    <div className="grid grid-cols-3 gap-6">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="p-6 rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50">
                          <div className="text-3xl mb-2 text-white">{metric.value}</div>
                          <div className="text-sm text-teal-200/60">{metric.label}</div>
                          {metric.subtitle && (
                            <div className="text-xs text-teal-400/40 mt-1">{metric.subtitle}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Activities */}
                  {item.activities && (
                    <ul className="space-y-3">
                      {item.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-3 text-teal-200/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Features */}
                  {item.features && (
                    <div className="grid gap-3">
                      {item.features.map((feature) => (
                        <div key={feature} className="p-4 rounded-xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50">
                          <span className="text-teal-100">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Results */}
                  {item.results && (
                    <div className="grid grid-cols-2 gap-6">
                      {item.results.map((result) => (
                        <div key={result.label} className="p-6 rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50">
                          <div className="text-4xl mb-2 bg-gradient-to-br from-teal-300 to-teal-500 bg-clip-text text-transparent">
                            {result.metric}
                          </div>
                          <div className="text-sm text-teal-200/60">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UI Mockups Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h2 className="text-4xl mb-8 text-white">Visual Design</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1622131815526-eaae1e615381' : '1622128082634-1f9742839291'}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080`}
                  alt={`UI mockup ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
