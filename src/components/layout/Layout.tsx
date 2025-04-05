import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Rocket, ChevronDown, Link as LinkIcon, Github, Twitter, Linkedin, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.5]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#4a5d4a] text-white shadow-lg rounded-2xl fixed top-4 left-0 right-0 z-50 transform transition-transform duration-300 hover:scale-[1.02]">
        <motion.div style={{ y: headerY }} className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <RouterLink to="/" className="flex items-center">
              <LinkIcon className="w-8 h-8 text-white" />
              <h1 className="ml-2 text-xl font-bold">Konekta</h1>
            </RouterLink>
            <nav className="hidden sm:flex items-center space-x-8">
              <motion.a
                href="#features"
                className="text-white hover:text-[#a8b5a8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Features
              </motion.a>
              <motion.a
                href="/pricing"
                className="text-white hover:text-[#a8b5a8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
              </motion.a>
              <motion.a
                href="#docs"
                className="text-white hover:text-[#a8b5a8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Documentation
              </motion.a>
              <motion.a
                href="#community"
                className="text-white hover:text-[#a8b5a8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Community
              </motion.a>
            </nav>
            <div className="flex items-center space-x-4">
              <motion.button 
                onClick={() => console.log('Login')}
                className="text-sm font-medium text-white hover:text-[#a8b5a8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
              <motion.button 
                onClick={() => console.log('Signup')}
                className="bg-white text-[#4a5d4a] px-4 py-2 rounded-md hover:bg-[#a8b5a8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="w-6 h-6" />
                <span className="text-white font-semibold">Konekta</span>
              </div>
              <p className="text-sm">Track your assets with confidence.</p>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <LinkIcon className="w-6 h-6" />
              <span className="text-white font-semibold">Konekta</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Konekta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
