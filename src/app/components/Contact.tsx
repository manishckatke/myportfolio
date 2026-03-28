import { motion } from "motion/react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl mb-6 tracking-tight">
            <span className="bg-gradient-to-br from-white via-teal-100 to-teal-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-teal-200/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss design opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl mb-8 text-white">Get in Touch</h2>
              <p className="text-xl text-teal-200/70 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.a
                href="mailto:designer@example.com"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 hover:border-teal-500/50 transition-all group hover:shadow-lg hover:shadow-teal-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-700/50 flex items-center justify-center text-teal-300 group-hover:text-teal-400 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-teal-400/60 text-sm mb-1">Email</div>
                  <div className="text-white">designer@example.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 hover:border-teal-500/50 transition-all group hover:shadow-lg hover:shadow-teal-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-700/50 flex items-center justify-center text-teal-300 group-hover:text-teal-400 transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-teal-400/60 text-sm mb-1">LinkedIn</div>
                  <div className="text-white">Connect with me</div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-700/50 flex items-center justify-center text-teal-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-teal-400/60 text-sm mb-1">Location</div>
                  <div className="text-white">Available Globally (Remote)</div>
                </div>
              </motion.div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-teal-950/20 backdrop-blur-sm border border-teal-700/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-white">Available for Projects</span>
              </div>
              <p className="text-teal-200/60 text-sm">
                Currently accepting new design opportunities for Q2 2026
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-teal-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 text-white placeholder-teal-400/40 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-teal-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 text-white placeholder-teal-400/40 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-teal-200 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 text-white placeholder-teal-400/40 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-teal-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-teal-950/30 backdrop-blur-sm border border-teal-700/50 text-white placeholder-teal-400/40 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-teal-500 text-black rounded-xl hover:bg-teal-400 transition-all inline-flex items-center justify-center gap-3 relative overflow-hidden shadow-lg shadow-teal-500/50"
              >
                {isSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span>Message Sent!</span>
                  </motion.span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-2xl bg-teal-950/20 backdrop-blur-sm border border-teal-700/30">
              <p className="text-sm text-teal-200/60">
                I typically respond within 24-48 hours. For urgent inquiries, please reach out via email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
