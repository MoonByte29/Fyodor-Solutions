import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-sm">
                  contact@aventq.ai
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-sm">+91 11 4475 6172</span>
              </div>
              <div className="flex items-start space-x-3 bg-slate-800/50 rounded-lg p-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  <strong>India:</strong> B1/E13, Block E, Mohan Cooperative
                  Industrial Estate, Badarpur, New Delhi 110044
                  <br />
                  <strong>USA:</strong> AventIQ Technologies Inc. 5900 Balcones
                  Drive STE 100, Austin, TX 78731
                </span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/case-studies"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                to="/orchestrate"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Orchestrate
              </Link>
              <Link
                to="/dms"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                DMS
              </Link>
              <Link
                to="/contact"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                AI & Automation Consulting
              </a>
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Opportunity Discovery
              </a>
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Implementation Services
              </a>
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Cybersecurity & Compliance
              </a>
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Managed Delivery
              </a>
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Custom AI Solutions
              </a>
              <a
                href="#"
                className="block text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Enterprise App Development
              </a>
            </div>
          </div>
        </div>

        {/* Social + Newsletter */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col items-center space-y-4">
          <h4 className="text-lg font-semibold">Follow us:</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Newsletter */}
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="name@email.com"
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
            >
              Subscribe for newsletter
            </button>
          </form>
        </div>

        {/* Bottom line */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
          © {currentYear} AventIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
