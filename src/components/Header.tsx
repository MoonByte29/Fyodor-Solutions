import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    {
      name: 'Service',
      dropdown: [
        { name: 'AI & Automation Consulting', href: '/ai-automation' },
        { name: 'Opportunity Discovery', href: '/opportunity-discovery' },
        { name: 'Cybersecurity & Compliance', href: '/cybersecurity&compilance' },
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
                <div key={item.name} className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-900 shadow-lg rounded-md min-w-[160px] z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
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
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
            <nav className="py-4 space-y-2">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="px-4">
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="w-full flex justify-between items-center text-gray-300 hover:text-white py-2"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-400 hover:text-white py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}

              <div className="px-4 pt-2">
                <a
                  href="#contact"
                  className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
