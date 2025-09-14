import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    {
      name: 'Service',
      dropdown: [
        { name: 'AI & Automation Consulting', href: '/ai-automation' },
        { name: 'Opportunity Discovery', href: '/opportunity-discovery' },
        { name: 'Cybersecurity & Compliance', href: '/cybersecurity-compilance' },
        { name: 'Managed Delivery', href: '/managed-delivery' },
      ],
    },
    {
      name: 'Industry',
      dropdown: [
        { name: 'Banking', href: '/banking' },
        { name: 'Finance', href: '/finance' },
        { name: 'Insurance', href: '/insurance' },
        { name: 'Automotive', href: '/automotive' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMobileDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              Fyodor<span className="text-blue-400 animate-pulse">.</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) =>
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setHoveredDropdown(item.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                  ref={dropdownRef}
                >
                  <button className="flex items-center text-gray-300 hover:text-white transition-all duration-300 font-medium py-2 px-1 relative group">
                    {item.name}
                    <motion.span
                      animate={{ rotate: hoveredDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown size={16} className="ml-1" />
                    </motion.span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                  
                  <AnimatePresence>
                    {hoveredDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-3 glass-effect shadow-2xl rounded-xl min-w-[240px] z-50 overflow-hidden border border-white/10"
                      >
                        {item.dropdown.map((subItem) => (
                          <motion.a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-5 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 text-sm font-medium"
                            whileHover={{ x: 4 }}
                          >
                            {subItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium py-2 px-1"
                  whileHover={{ y: -1 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="btn-primary text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden glass-effect border-t border-gray-800/50 overflow-hidden"
            >
              <nav className="py-6 space-y-1">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="px-6">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex justify-between items-center text-gray-300 hover:text-white py-3 font-medium"
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, x: -10 }}
                            animate={{ opacity: 1, height: 'auto', x: 0 }}
                            exit={{ opacity: 0, height: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                            className="pl-6 overflow-hidden"
                          >
                            <div className="space-y-1 py-2 border-l border-gray-700/50">
                              {item.dropdown.map((subItem) => (
                                <motion.a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-gray-400 hover:text-white py-2 pl-4 transition-colors duration-200 text-sm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  whileHover={{ x: 4 }}
                                >
                                  {subItem.name}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg mx-2 transition-all duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ x: 4 }}
                    >
                      {item.name}
                    </motion.a>
                  )
                )}

                <div className="px-6 pt-4">
                  <motion.a
                    href="#contact"
                    className="btn-primary block text-center text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;