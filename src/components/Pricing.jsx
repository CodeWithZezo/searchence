import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Zap, 
  Rocket, 
  TrendingUp, 
  Crown, 
  Target,
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';

const PricingPackages = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const packages = [
    {
      name: "Slow Burner",
      price: "$499",
      description: "Our entry-level package, perfect for beginners seeking steady growth. Establish a highly credible backlink, personalized outreach, and editorial placements to boost site's visibility on a budget.",
      links: [
        "3x DR 30+ Guest Posts",
        "2x DR 40+ Guest Posts"
      ],
      average_price_per_link: "$80",
      checkout_link: "Checkout (SEO 3)",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Launch Pad",
      price: "$1,049",
      description: "Ideal for launching new sites on a strict budget, maintaining rankings of projects that are already at the top, providing strong, high-quality backlinks for ongoing success.",
      links: [
        "5x DR 30+ Guest Posts",
        "3x DR 40+ Guest Posts",
        "1x DR 50+ Guest Post"
      ],
      average_price_per_link: "$200",
      checkout_link: "Checkout (SEO 6)",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      name: "Growth",
      price: "$1,799",
      description: "Designed for businesses aiming to expand their online presence, the Growth Package offers a strategic blend of backlinks to propel your site's visibility and climb the search engine ranks.",
      links: [
        "8x DR 30+ Guest Posts",
        "5x DR 40+ Guest Posts",
        "2x DR 50+ Guest Posts"
      ],
      average_price_per_link: "$200",
      checkout_link: "Checkout (SEO 12)",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-500",
      popular: true
    },
    {
      name: "Authority",
      price: "$3,799",
      description: "Elevate your website's credibility and ranking. Gain niche authority with this package, providing authoritative backlinks to establish your online presence as an industry leader.",
      links: [
        "10x DR 30+ Guest Posts",
        "8x DR 40+ Guest Posts",
        "4x DR 50+ Guest Posts"
      ],
      average_price_per_link: "$21",
      checkout_link: "Checkout (SEO 22)",
      icon: Crown,
      gradient: "from-amber-500 to-orange-500",
      popular: false
    },
    {
      name: "Domination",
      price: "$4,999",
      description: "Establish your dominance with our largest growth package, featuring 20 high-authority backlinks to establish a massively trusted and strongly supported brand for ultimate online authority.",
      links: [
        "20x DR 30+ Guest Posts",
        "10x DR 40+ Guest Posts",
        "5x DR 50+ Guest Posts"
      ],
      average_price_per_link: "$23",
      checkout_link: "Checkout (SEO 35)",
      icon: Target,
      gradient: "from-rose-500 to-red-500",
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            packages.forEach((_, index) => {
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
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm mb-4 transition-all duration-700 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="w-4 h-4" />
            <span>Flexible Pricing Plans</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Growth Path
            </span>
          </h2>
          
          <p className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Scalable link building packages designed to match your ambitions and budget
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;
            const isPopular = pkg.popular;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isPopular ? 'md:scale-105 lg:scale-110' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className={`flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r ${pkg.gradient} rounded-full text-white text-xs font-bold shadow-lg ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                      <Star className="w-3 h-3 fill-white" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${pkg.gradient} rounded-3xl blur opacity-0 transition-all duration-500 ${
                  isPopular ? 'opacity-30' : ''
                } ${isHovered ? 'opacity-40' : 'group-hover:opacity-20'}`}></div>
                
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 ${
                  isPopular 
                    ? 'border-slate-600/80 shadow-2xl' 
                    : 'border-slate-700/50'
                } ${isHovered ? 'border-slate-600/80 shadow-2xl scale-105' : ''}`}>
                  
                  {/* Header */}
                  <div className="p-8 pb-6">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} mb-4 transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-3' : ''
                    }`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Package name */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                        {pkg.price}
                      </span>
                      <span className="text-slate-500 text-sm">USD</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-8"></div>

                  {/* Features */}
                  <div className="p-8 pt-6">
                    <div className="space-y-3 mb-6">
                      {pkg.links.map((link, i) => (
                        <div 
                          key={i} 
                          className={`flex items-start gap-3 transition-all duration-300`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center ${
                            isHovered ? 'scale-110' : ''
                          } transition-transform duration-300`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm leading-tight">
                            {link}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Average price badge */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl mb-6 border border-slate-700/50">
                      <span className="text-slate-400 text-xs font-medium">Avg. Price Per Link</span>
                      <span className={`text-lg font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                        {pkg.average_price_per_link}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isPopular
                        ? `bg-gradient-to-r ${pkg.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105`
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-600 text-white'
                    }`}>
                      <span>{pkg.checkout_link}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className={`text-center space-y-6 transition-all duration-700 delay-700 ${visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Custom package CTA */}
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-2xl">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <div className="text-left">
              <h4 className="text-white font-semibold mb-1">Need a custom package?</h4>
              <p className="text-slate-400 text-sm">Let's build a plan tailored to your specific needs</p>
            </div>
            <button className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;