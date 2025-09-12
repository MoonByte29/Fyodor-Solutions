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
      setIsScrolled(window.scrollY > 50);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Fyodor<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setHoveredDropdown(item.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                  ref={dropdownRef}
                >
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    {item.name}
                    <motion.span
                      animate={{ rotate: hoveredDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} className="ml-1" />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {hoveredDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 bg-gray-900 shadow-lg rounded-md min-w-[200px] z-50 overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-150"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200 block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="px-4">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="w-full flex justify-between items-center text-gray-300 hover:text-white py-2"
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            <div className="space-y-1 py-1">
                              {item.dropdown.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-gray-400 hover:text-white py-1 transition-colors duration-150"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </a>
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
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  )
                )}

                <div className="px-4 pt-2">
                  <motion.a
                    href="#contact"
                    className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;