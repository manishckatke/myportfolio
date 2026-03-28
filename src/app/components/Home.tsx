import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Target, Zap, Users, BarChart, Layers } from "lucide-react";

import capgeminiLogo from "../../assets/e3284ba8d33dc0a9f52853d475ca2f082bf7a48d.png";
import deloitteLogo from "../../assets/acdf1fe13e99d02bff71b9052685292649e224b0.png";
import hsbcLogo from "../../assets/7bf727c9e30571ed8ebe970be3a15198d537730e.png";
import disneyLogo from "../../assets/dfdd6e7a1f65a22c78918dfeb130a53d1f0facba.png";
import philipsLogo from "../../assets/5f9c37f21465f545e8fc638c59abf6396f495092.png";
import geLogo from "../../assets/1f7b31fa01db81ee0cc7124394b9a2195ed3978a.png";
import nabLogo from "../../assets/b355d5351d92c97af7840c1e2edcb5f467273a85.png";
import kpmgLogo from "../../assets/40d966af42bfc0641082632e1fd1fc39eada1574.png";
import safatLogo from "../../assets/50aabdaed5ebc6dfc8eda79e3d23f423ea6da4e0.png";

export default function Home() {
  const clients = [
    { name: "Capgemini", logo: capgeminiLogo },
    { name: "Deloitte", logo: deloitteLogo },
    { name: "HSBC", logo: hsbcLogo },
    { name: "Disney+", logo: disneyLogo },
    { name: "Philips", logo: philipsLogo },
    { name: "GE Healthcare", logo: geLogo },
    { name: "NAB", logo: nabLogo },
    { name: "KPMG", logo: kpmgLogo },
    { name: "Safat", logo: safatLogo },
  ];

  const skills = [
    {
      icon: <Sparkles size={28} />,
      title: "AI/ML UX Design",
      description: "Crafting intuitive interfaces for complex AI systems and machine learning products",
    },
    {
      icon: <Target size={28} />,
      title: "Product Strategy",
      description: "Strategic design thinking that aligns business goals with user needs",
    },
    {
      icon: <Zap size={28} />,
      title: "SaaS Solutions",
      description: "Enterprise-grade design systems for scalable SaaS platforms",
    },
    {
      icon: <Users size={28} />,
      title: "User Research",
      description: "Data-driven insights through comprehensive user testing and analysis",
    },
    {
      icon: <BarChart size={28} />,
      title: "Data Visualization",
      description: "Transform complex datasets into clear, actionable visual insights",
    },
    {
      icon: <Layers size={28} />,
      title: "Design Systems",
      description: "Building cohesive, scalable design systems for global teams",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 scale-110 blur-[2px]"
          >
            <source
              src="https://videos.pexels.com/video-files/6963744/6963744-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-teal-900/50 backdrop-blur-sm border border-teal-700/50 text-sm text-teal-200">
                12+ Years Experience
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
              <span className="block bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                Designing
              </span>
              <span className="block bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <span className="block bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-200/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Leading product design for SaaS, AI/ML UX, and Data Visualization at Fortune 500 companies and innovative startups
            </p>
            <Link to="/work">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(20, 184, 166, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-teal-500 text-black rounded-full hover:bg-teal-400 transition-all inline-flex items-center gap-3 shadow-lg shadow-teal-500/50"
              >
                <span>View Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                
              </motion.button>
            </Link>
            <a href="/MANISH_KATKE_UIUX_Designer2026.pdf" download>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-4 px-8 py-4 border border-teal-500 text-teal-300 rounded-full hover:bg-teal-500 hover:text-black transition-all inline-flex items-center gap-3"
  >
    <span>Download CV</span>
  </motion.button>
</a>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-6 border-y border-teal-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-center text-teal-400/60 text-sm mb-12 tracking-widest uppercase">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
                <span className="bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                  Transforming Complex Problems into Elegant Solutions
                </span>
              </h2>
              <p className="text-xl text-teal-200/70 leading-relaxed mb-6">
                With over a decade of experience, I specialize in designing enterprise-grade products that combine cutting-edge technology with human-centered design principles.
              </p>
              <p className="text-xl text-teal-200/70 leading-relaxed">
                My work spans across AI/ML interfaces, SaaS platforms, and data visualization tools, helping organizations make informed decisions through intuitive design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-teal-950/30 backdrop-blur-sm border border-teal-700/50">
                <img
                     src="https://images.unsplash.com/photo-1622128082634-1f9742839291?auto=format&fit=crop&w=1080&q=80"
  alt="Design workspace"
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-teal-950/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
              <span className="bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
                Core Expertise
              </span>
            </h2>
            <p className="text-xl text-teal-200/70 max-w-2xl mx-auto">
              A comprehensive skill set honed through years of leading design initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/20">
                  <div className="mb-4 text-teal-400 group-hover:text-teal-300 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl mb-3 text-white">{skill.title}</h3>
                  <p className="text-teal-200/60 leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
