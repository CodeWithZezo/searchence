import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Shield, 
  Clock, 
  BarChart3,
  Sparkles 
} from 'lucide-react';

const LinkBuildingInfo = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  const linkBuildingInfo = [
    {
      title: "Our Link Building Agency Has Years of Experience",
      description: "As a link building agency, we've been refining our off-page SEO strategy over the past 5 years, figuring out what works and what doesn't.",
      icon: Award,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Easy Management",
      description: "With our link building services, all you have to do is check that you're happy with the anchor text and target URLs we've chosen. You can focus on other areas of your business, whether that's lead generation or on-page SEO.",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Continuous Improvement",
      description: "We are continually testing and tweaking to make sure that we are at the forefront of link building techniques.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const features = [
    { text: "Ahrefs DR Sorted", icon: BarChart3 },
    { text: "Spam Checked", icon: Shield },
    { text: "SEO Support", icon: Sparkles },
    { text: "All Real Websites", icon: CheckCircle2 },
    { text: "21-Day Around Time", icon: Clock },
    { text: "Multiple Site Inventory", icon: Award }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            linkBuildingInfo.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % linkBuildingInfo.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm mb-4 transition-all duration-700 ${visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Award className="w-4 h-4" />
            <span>Why Choose Searchence</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          
          <p className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proven strategies, dedicated support, and continuous optimization for your success
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Info Cards */}
          <div className="space-y-6">
            {linkBuildingInfo.map((info, index) => {
              const Icon = info.icon;
              const isVisible = visibleItems.includes(index);
              const isActive = activeTab === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group relative cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl blur opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-30' : 'group-hover:opacity-20'
                  }`}></div>
                  
                  {/* Card */}
                  <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 ${
                    isActive 
                      ? 'border-slate-600/80 shadow-2xl scale-105' 
                      : 'border-slate-700/50 hover:border-slate-600/60 hover:scale-102'
                  }`}>
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 transition-all duration-500 ${
                      isActive ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {info.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed">
                      {info.description}
                    </p>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Features */}
          <div className={`relative transition-all duration-700 delay-500 ${visibleItems.length > 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Features Card */}
            <div className="sticky top-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Premium Features</h3>
                  <p className="text-slate-400 text-sm">Everything you need for success</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: visibleItems.length > 0 ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                        opacity: 0
                      }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FeatureIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                          {feature.text}
                        </p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <button className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105">
                <span>Start Building Links Today</span>
                <TrendingUp className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {linkBuildingInfo.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeTab === index 
                  ? 'w-12 bg-gradient-to-r from-blue-500 to-cyan-500' 
                  : 'w-6 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default LinkBuildingInfo;