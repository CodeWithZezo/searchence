import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X,
  Link2,
  Radio,
  Target,
  FileText,
  Gamepad2,
  DollarSign,
  Cpu,
  Heart,
  ShoppingCart,
  Package,
  Users,
  Briefcase,
  Award,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    expertise: {
      label: 'Expertise',
      items: [
        { icon: Link2, label: 'Link Building', desc: 'High-quality backlinks that drive results', color: 'from-blue-500 to-cyan-500' },
        { icon: Radio, label: 'Digital PR', desc: 'Brand visibility & media authority', color: 'from-purple-500 to-pink-500' },
        { icon: Target, label: 'SEO Strategy', desc: 'Data-driven optimization plans', color: 'from-emerald-500 to-teal-500' },
        { icon: FileText, label: 'Content Marketing', desc: 'Engaging, conversion-focused content', color: 'from-orange-500 to-red-500' }
      ]
    },
    industries: {
      label: 'Industries',
      items: [
        { icon: Gamepad2, label: 'iGaming', desc: 'Gaming & betting sector expertise', color: 'from-violet-500 to-purple-500' },
        { icon: DollarSign, label: 'Finance', desc: 'Financial services & fintech', color: 'from-green-500 to-emerald-500' },
        { icon: Cpu, label: 'SaaS & Tech', desc: 'Technology & software solutions', color: 'from-blue-500 to-indigo-500' },
        { icon: Heart, label: 'Healthcare', desc: 'Medical & wellness industries', color: 'from-rose-500 to-pink-500' },
        { icon: ShoppingCart, label: 'eCommerce', desc: 'Online retail optimization', color: 'from-amber-500 to-orange-500' }
      ]
    },
    packages: {
      label: 'Packages',
      items: [
        { icon: Package, label: 'Pricing Plans', desc: 'Flexible, scalable packages', color: 'from-blue-500 to-cyan-500' },
        { icon: Award, label: 'Custom Packages', desc: 'Bespoke solutions for your needs', color: 'from-purple-500 to-pink-500' }
      ]
    },
    about: {
      label: 'About',
      items: [
        { icon: Users, label: 'Who We Are', desc: 'Our story, mission & values', color: 'from-blue-500 to-cyan-500' },
        { icon: Sparkles, label: 'Our Team', desc: 'Meet the SEO experts', color: 'from-purple-500 to-pink-500' },
        { icon: Briefcase, label: 'Careers', desc: 'Join our growing team', color: 'from-emerald-500 to-teal-500' }
      ]
    },
    contact: {
      label: 'Contact Us',
      items: [
        { icon: Mail, label: 'Contact Form', desc: 'Send us your inquiry', color: 'from-blue-500 to-cyan-500' },
        { icon: Phone, label: 'Direct Contact', desc: 'Office / WhatsApp / Email', color: 'from-emerald-500 to-teal-500' }
      ]
    }
  };

  const DropdownMenu = ({ items, isOpen }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
        >
          <div className="relative">
            {/* Enhanced glow effect */}
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Dropdown card */}
            <div className="relative bg-slate-900/98 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-3 shadow-2xl min-w-[320px]">
              {/* Decorative gradient line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
              
              <div className="space-y-1 mt-2">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="group w-full flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-slate-800/80 hover:to-slate-800/40 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover gradient background */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        initial={false}
                      />
                      
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className="text-white font-semibold text-sm mb-0.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                          style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                          {item.label}
                        </div>
                        <div className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                          {item.desc}
                        </div>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl shadow-slate-950/50' 
            : 'bg-slate-950/40 backdrop-blur-sm'
        }`}
      >
        {/* Animated background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-24 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -top-24 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with enhanced animation */}
            <motion.div 
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {/* Icon glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                />
                <Link2 className="w-6 h-6 text-white relative z-10" />
              </motion.div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  Searchence
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                  Link Building Agency
                </span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {Object.entries(menuItems).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button 
                    className="group flex items-center gap-1.5 px-4 py-2.5 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-slate-800/40 transition-all duration-300 relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Hover background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"
                    />
                    
                    <span className="relative z-10">{menu.label}</span>
                    {menu.items && (
                      <motion.div
                        animate={{ rotate: activeDropdown === key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.button>
                  {menu.items && <DropdownMenu items={menu.items} isOpen={activeDropdown === key} />}
                </div>
              ))}

              {/* Case Studies - No dropdown */}
              <motion.button 
                className="px-4 py-2.5 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-slate-800/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Case Studies
              </motion.button>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button 
                className="group relative px-7 py-3.5 font-semibold text-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />
                
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <span className="relative flex items-center gap-2 z-10">
                  <Sparkles className="w-4 h-4" />
                  The Link Report
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"
                  style={{ width: '50%' }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
                  {Object.entries(menuItems).map(([key, menu], menuIndex) => (
                    <motion.div 
                      key={key} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: menuIndex * 0.05 }}
                    >
                      <motion.button
                        onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                        className="w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-slate-800/50 transition-all duration-300"
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{menu.label}</span>
                        {menu.items && (
                          <motion.div
                            animate={{ rotate: activeDropdown === key ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.button>
                      
                      <AnimatePresence>
                        {menu.items && activeDropdown === key && (
                          <motion.div 
                            className="pl-4 space-y-1 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {menu.items.map((item, index) => {
                              const Icon = item.icon;
                              return (
                                <motion.button
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center`}>
                                    <Icon className="w-4 h-4 text-blue-400" />
                                  </div>
                                  <div className="flex-1 text-left">
                                    <div className="text-slate-300 text-sm font-medium">{item.label}</div>
                                  </div>
                                </motion.button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                  
                  <motion.button 
                    className="w-full px-4 py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-slate-800/50 transition-all duration-300 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Case Studies
                  </motion.button>

                  <motion.button 
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      The Link Report
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

    </>
  );
};

export default Navbar;