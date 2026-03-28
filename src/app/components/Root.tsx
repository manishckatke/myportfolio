import { Link, Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import { Mail, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-teal-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">Portfolio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-2"
                >
                  <span className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-teal-200/60 hover:text-white"
                  }`}>
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-teal-200/60 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-teal-200/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-teal-900/30 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-teal-200/60 text-sm">
              © 2026 Lead Product Designer. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:designer@example.com"
                className="text-teal-200/60 hover:text-teal-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-200/60 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
