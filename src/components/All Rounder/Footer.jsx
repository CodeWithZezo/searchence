import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
  ExternalLink,
  Award,
  TrendingUp,
  Shield,
  Zap,
  ChevronRight,
  ArrowUpCircle,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const footerRef = useRef(null);

  const navigation = {
    services: [
      { name: "Link Building", href: "#", description: "Quality backlinks" },
      { name: "SEO Optimization", href: "#", description: "Rank higher" },
      { name: "Content Marketing", href: "#", description: "Engaging content" },
      { name: "Digital Strategy", href: "#", description: "Growth plans" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      gradient: "from-blue-600 to-blue-500",
      color: "text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      gradient: "from-sky-600 to-sky-500",
      color: "text-sky-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      gradient: "from-blue-700 to-blue-600",
      color: "text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      gradient: "from-pink-600 via-purple-600 to-orange-500",
      color: "text-pink-400",
    },
  ];

  const features = [
    {
      icon: Award,
      text: "5+ Years Experience",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      text: "Proven Results",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      text: "Quality Guaranteed",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: Zap,
      text: "Fast Delivery",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const smoothScrollToTop = () => {
    const scrollDuration = 800;
    const scrollStep = -window.scrollY / (scrollDuration / 16);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = () => {
    if (email) {
      // Add success animation
      const button = document.querySelector(".subscribe-btn");
      button?.classList.add("success-pulse");
      setTimeout(() => button?.classList.remove("success-pulse"), 1000);
      console.log("Subscribing:", email);
      setEmail("");
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Enhanced Grid overlay with subtle animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid-flow"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top border with animated gradient */}
        <div className="relative h-px w-full mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-shimmer"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          {/* Brand Section - Enhanced */}
          <div
            className={`lg:col-span-4 space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="group flex items-center gap-3 cursor-pointer">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-500/50">
                <TrendingUp className="w-7 h-7 text-white" />
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Searchence
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-base">
              Building powerful backlinks and driving organic growth for
              businesses worldwide. Your trusted partner in SEO excellence.
            </p>

            {/* Enhanced Features badges with stagger animation */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group relative flex items-center gap-2 px-3 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg transform transition-transform duration-300 group-hover:rotate-12`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-200 text-xs font-semibold relative z-10">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-3 pt-4">
              {[
                {
                  icon: Mail,
                  text: "info@searchence.com",
                  href: "mailto:info@searchence.com",
                },
                {
                  icon: Phone,
                  text: "+1 (234) 567-890",
                  href: "tel:+1234567890",
                },
                { icon: MapPin, text: "San Francisco, CA", href: "#" },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <div className="relative w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-500/10 transition-all duration-300 group-hover:scale-110 border border-slate-700/30 group-hover:border-blue-500/30">
                      <Icon className="w-5 h-5 relative z-10" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300"></div>
                    </div>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div
            className={`lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {Object.entries(navigation)
              .slice(0, 3)
              .map(([category, items], categoryIndex) => (
                <div key={category}>
                  <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onMouseEnter={() =>
                            setHoveredLink(`${category}-${index}`)
                          }
                          onMouseLeave={() => setHoveredLink(null)}
                          className="group relative text-slate-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center gap-2 py-1"
                        >
                          <ChevronRight
                            className={`w-3 h-3 transition-all duration-300 ${
                              hoveredLink === `${category}-${index}`
                                ? "translate-x-1 text-blue-400"
                                : "translate-x-0"
                            }`}
                          />
                          <span className="relative">
                            {item.name}
                            <span
                              className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                                hoveredLink === `${category}-${index}`
                                  ? "w-full"
                                  : "w-0"
                              }`}
                            ></span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          {/* Enhanced Newsletter Section */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Stay Updated</h3>
                </div>

                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  Get the latest SEO insights and link building tips delivered
                  to your inbox.
                </p>

                <div className="space-y-3">
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
                  </div>

                  <button
                    onClick={handleSubscribe}
                    className="subscribe-btn group w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Subscribe Now</span>
                    <Send className="w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                {/* Enhanced Social Links */}
                <div className="mt-6">
                  <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                    <span className="w-6 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          onMouseEnter={() => setIsHovered(index)}
                          onMouseLeave={() => setIsHovered(null)}
                          className="group relative"
                          aria-label={social.name}
                        >
                          {/* Enhanced glow effect */}
                          <div
                            className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-all duration-500`}
                          ></div>

                          {/* Icon container with animation */}
                          <div
                            className={`relative w-11 h-11 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center hover:border-slate-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                              isHovered === index ? "shadow-lg" : ""
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 text-slate-400 group-hover:text-white transition-all duration-300 ${
                                isHovered === index ? social.color : ""
                              }`}
                            />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-slate-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright with animation */}
            <p
              className={`text-slate-500 text-sm transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              © {new Date().getFullYear()} Searchence. All rights reserved. Made
              with
              <span className="text-red-400 inline-block animate-pulse mx-1">
                ♥
              </span>
              Pakistan
            </p>

            {/* Legal Links with enhanced hover */}
            <div
              className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {navigation.legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <a
                    href={item.href}
                    className="group relative text-slate-500 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                  {index < navigation.legal.length - 1 && (
                    <span className="text-slate-700 animate-pulse">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Enhanced Back to top button */}
            <button
              onClick={smoothScrollToTop}
              className={`group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <span className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors duration-300 font-medium">
                Back to top
              </span>
              <ArrowUpCircle className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes grid-flow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 64px 64px;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }

        .success-pulse {
          animation: success-pulse 0.6s ease-out;
        }

        @keyframes success-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 50px rgba(34, 197, 94, 0.6);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
