import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  { question: "What Is Link Building?", answer: "Link building is the process of acquiring hyperlinks from other websites to your own. These links help search engines crawl the web, improve your site's authority, and boost your search engine rankings." },
  { question: "What Makes A Good Backlink?", answer: "A good backlink comes from a relevant, high-authority website with quality content. It should be natural, contextually placed, and ideally come from a site within your niche or industry." },
  { question: "What Are The Benefits of Link Building?", answer: "Link building improves your website's search engine rankings, increases referral traffic, enhances brand authority, and can help your site gain long-term visibility and credibility online." },
  { question: "What are White Hat Links?", answer: "White hat links are backlinks acquired through ethical and approved SEO practices, like guest posting on reputable sites, creating high-quality content, and natural outreach, as opposed to manipulative or spammy techniques." },
  { question: "What Niches Do You Accept?", answer: "We accept a wide range of niches, including business, technology, health, lifestyle, e-commerce, and more. We ensure that backlinks are relevant to your industry to maximize SEO value." },
  { question: "Do You Have Any Guarantees of Service?", answer: "Yes! We guarantee that all links are real, high-quality, and placed on relevant websites. We also provide detailed reports and support to ensure your satisfaction and measurable SEO results." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const headerRefs = useRef([]);
  const reducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            faqs.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
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

    headerRefs.current.forEach((el) => {
      if (el) el.setAttribute("tabindex", "0");
    });

    return () => observer.disconnect();
  }, []);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const onKeyDownHeader = (e, i) => {
    const max = faqs.length - 1;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = i === max ? 0 : i + 1;
      headerRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = i === 0 ? max : i - 1;
      headerRefs.current[prev]?.focus();
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm mb-6 transition-all duration-700 ${
              visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Link Building FAQs</span>
          </div>

          <h1 
            className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p 
            className={`text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Quick answers to common questions about our link building services and policies.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const hovered = hoveredIndex === i;
            const isVisible = visibleItems.includes(i);
            
            return (
              <div
                key={i}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 transition-all duration-500 ${
                    open ? 'opacity-30' : hovered ? 'opacity-20' : ''
                  }`}
                />

                <div
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500 ${
                    open 
                      ? 'border-slate-600/80 shadow-2xl scale-[1.02]' 
                      : hovered 
                      ? 'border-slate-600/60 shadow-xl' 
                      : 'border-slate-700/50 shadow-lg'
                  }`}
                >
                  <button
                    ref={(el) => (headerRefs.current[i] = el)}
                    aria-controls={`faq-panel-${i}`}
                    aria-expanded={open}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => onKeyDownHeader(e, i)}
                    className="w-full flex items-center justify-between gap-4 p-6 md:p-7 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 flex-1 text-left">
                      <div 
                        className={`mt-1 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          open 
                            ? 'bg-gradient-to-br from-blue-500 to-cyan-500 scale-110 rotate-3' 
                            : hovered 
                            ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 scale-105' 
                            : 'bg-slate-800/30'
                        }`}
                      >
                        <HelpCircle 
                          className={`w-6 h-6 transition-colors duration-500 ${
                            open ? 'text-white' : 'text-blue-400'
                          }`}
                        />
                      </div>

                      <div className="flex-1">
                        <h3 
                          className={`text-base md:text-xl font-bold transition-all duration-300 ${
                            open 
                              ? 'text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text' 
                              : 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text'
                          }`}
                        >
                          {faq.question}
                        </h3>
                        <p className="mt-1.5 text-xs text-slate-500 font-medium transition-opacity duration-300">
                          {open ? "Click to collapse" : "Click to expand"}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        open 
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 scale-110' 
                          : 'bg-slate-800/30 group-hover:bg-slate-800/50'
                      }`}
                      style={{
                        transform: `rotate(${open ? 180 : 0}deg) scale(${open ? 1.1 : 1})`
                      }}
                    >
                      <ChevronDown 
                        className={`w-5 h-5 transition-colors duration-500 ${
                          open ? 'text-white' : 'text-slate-400'
                        }`}
                      />
                    </div>

                    {/* Active indicator */}
                    {open && (
                      <div className="absolute top-6 right-6 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </button>

                  {/* Answer panel */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: open ? '1000px' : '0',
                      opacity: open ? 1 : 0
                    }}
                  >
                    <div className="px-6 pb-7 md:px-7 md:pb-8 pt-2">
                      <div className="pl-16 pr-4">
                        <div 
                          className="p-5 bg-slate-800/30 border border-slate-700/30 rounded-xl transition-all duration-500"
                          style={{
                            transform: open ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.98)',
                            opacity: open ? 1 : 0,
                            transitionDelay: open ? '100ms' : '0ms'
                          }}
                        >
                          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${
            visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${300 + faqs.length * 150 + 100}ms` }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-xl hover:border-slate-600/60 transition-all duration-300 hover:scale-105">
            <Search className="w-5 h-5 text-blue-400" />
            <span className="text-slate-400">
              Can't find what you're looking for?
            </span>
            <button className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}