import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, GitHub, Twitter, Facebook } from 'lucide-react';
import ChatBot from '../ChatBot';
import ThemeSwitcher from '../ThemeSwitcher';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow dark:shadow-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Konekta Logo"
                  className="h-8 w-auto"
                />
                <span className="ml-2 font-bold text-[#4a5d4a] dark:text-[#a0b3a0] text-xl">Konekta</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                Pricing
              </Link>
              <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                Community
              </Link>
              <ThemeSwitcher />
              <Link to="/login" className="bg-[#4a5d4a] dark:bg-[#a0b3a0] text-white px-4 py-2 rounded-lg hover:bg-[#3d4d3d] dark:hover:bg-[#b3c5b3] transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow dark:shadow-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#4a5d4a] dark:text-[#a0b3a0] mb-4">Konekta</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A powerful asset tracking solution for businesses and individuals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#4a5d4a] dark:text-[#a0b3a0] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#4a5d4a] dark:text-[#a0b3a0] mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4a5d4a] dark:hover:text-[#a0b3a0] transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#4a5d4a] dark:text-[#a0b3a0] mb-4">Contact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Email: support@konekta.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: +1 234 567 890
              </p>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-gray-500 dark:text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Konekta. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Layout;
