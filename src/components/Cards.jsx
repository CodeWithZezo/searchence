import React, { useState, useEffect, useRef } from 'react';
import { FileText, Link2, Package, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Guest Posts",
      description:
        "Get links on brand new relevant articles for a boost of Authority and Relevance that'll catapult your SEO. Our links include both DR and Traffic, so you don't have to choose between one or the other.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      features: ["High DR Sites", "Niche Relevant", "Natural Integration"]
    },
    {
      title: "Link Insertions",
      description:
        "Get links on brand new relevant articles for a boost of Authority and Relevance that'll catapult your SEO. Our links include both DR and Traffic, so you don't have to choose between one or the other.",
      icon: Link2,
      color: "from-purple-500 to-pink-500",
      features: ["Aged Content", "Fast Delivery", "Quality Assured"]
    },
    {
      title: "Link Packages",
      description:
        "Get links on brand new relevant articles for a boost of Authority and Relevance that'll catapult your SEO. Our links include both DR and Traffic, so you don't have to choose between one or the other.",
      icon: Package,
      color: "from-emerald-500 to-teal-500",
      features: ["Bundle Savings", "Mixed Strategy", "Scalable Results"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm transition-all duration-700 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <TrendingUp className="w-4 h-4" />
            <span>Premium Link Building Services</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold text-white transition-all duration-700 delay-100 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Link Strategy
            </span>
          </h2>
          
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Tailored solutions to match your SEO goals and budget
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 ${
                  isHovered ? 'border-slate-600/80 shadow-2xl scale-105' : ''
                }`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 transition-all duration-500 ${
                    isHovered ? 'scale-110 rotate-3' : ''
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-2 text-sm text-slate-300 transition-all duration-300 delay-${i * 100}`}
                      >
                        <CheckCircle2 className={`w-4 h-4 text-emerald-400 transition-all duration-500 ${
                          isHovered ? 'scale-110' : ''
                        }`} style={{ transitionDelay: `${i * 50}ms` }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-xl text-white font-semibold transition-all duration-300 ${
                    isHovered ? 'shadow-lg shadow-blue-500/20' : ''
                  }`}>
                    <span>Learn More</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1`} />
                  </button>

                  {/* Floating badge */}
                  <div className={`absolute -top-3 -right-3 px-4 py-1.5 bg-gradient-to-r ${service.color} rounded-full text-white text-xs font-bold shadow-lg transition-all duration-500 ${
                    isHovered ? 'scale-110 rotate-3' : ''
                  }`}>
                    Popular
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 text-center transition-all duration-700 delay-500 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">Not sure which option fits your needs?</h3>
              <p className="text-slate-400 text-sm">Let our experts create a custom strategy for you</p>
            </div>
            <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;