import React, { useState, useEffect } from "react";
import { User, ArrowRight, TrendingUp } from "lucide-react";

const Hero1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Trusted by 1,200+ Growing Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Get Powerful Backlinks That{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Boost Your Rankings
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-sm"></span>
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Drive organic traffic and dominate search results with high-quality backlinks from authoritative websites
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Free Backlink Strategy Call
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'primary' ? 'translate-x-1' : ''}`} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Link Report
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'secondary' ? 'translate-x-1' : ''}`} />
              </span>
            </button>
          </div>

          {/* Social Proof */}
          <div className={`flex items-center justify-center gap-3 text-slate-400 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-slate-900 flex items-center justify-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <User className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">
              Join <span className="text-blue-400 font-bold">1,200+</span> businesses already ranking with{" "}
              <span className="text-white font-semibold">Searchence</span>
            </p>
          </div>

          {/* Floating stats cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {[
              { label: "Average Ranking Boost", value: "45%" },
              { label: "Quality Backlinks", value: "10K+" },
              { label: "Client Success Rate", value: "98%" }
            ].map((stat, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;