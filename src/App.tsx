import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrowRight, ChevronDown, Link, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Layout from './components/layout/Layout';
import PricingPage from './pages/PricingPage';
import CommunityPage from './pages/CommunityPage';
import DocumentationPage from './pages/DocumentationPage';
import HostingFeatures from './components/features/HostingFeatures';
import WebDesignFeatures from './components/features/WebDesignFeatures';
import BulkSMSFeatures from './components/features/BulkSMSFeatures';

function App() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login'
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Routes>
        <Route path="/" element={
          <Layout>
            <>
              {/* Hero Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden mt-20"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?auto=format&fit=crop&q=80")',
                  }}
                >
                  <div className="absolute inset-0 bg-gray-900/60"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-[#4B89DC]/80"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Link className="w-8 h-8 text-white" />
                      <h2 className="text-2xl font-bold text-white">Konekta</h2>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                      Connect. Create.
                      <span className="text-[#A5C2EF]"> Conquer.</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                      Join Konekta's powerful platform where developers connect, collaborate, and create exceptional digital experiences together.
                    </p>
                    <div className="flex justify-center gap-4">
                      <motion.button 
                        onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
                        className="bg-[#4B89DC] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#3A6FB5] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Join Konekta <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      <motion.button 
                        onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
                        className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Sign In
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
                </div>
              </motion.div>

              {/* Features Sections */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-12"
              >
                <HostingFeatures />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-12"
              >
                <WebDesignFeatures />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-12"
              >
                <BulkSMSFeatures />
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#4a5d4a] py-12"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-white mb-8 md:mb-0">
                      <h2 className="text-3xl font-bold mb-2">Join the Konekta Community</h2>
                      <p className="text-gray-200">Connect with thousands of developers building the future.</p>
                    </div>
                    <motion.button 
                      onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
                      className="bg-white text-[#4a5d4a] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          </Layout>
        } />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/docs" element={<Layout><DocumentationPage /></Layout>} />
        <Route path="/community" element={<Layout><CommunityPage /></Layout>} />
        <Route path="*" element={<Layout><div className="min-h-screen flex items-center justify-center">404 - Page Not Found</div></Layout>} />
      </Routes>

      {/* Auth Modal */}
      {authModal.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setAuthModal({ isOpen: false, type: 'signup' })}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#4a5d4a]">{authModal.type === 'login' ? 'Sign In' : 'Create Account'}</h2>
              <button onClick={() => setAuthModal({ isOpen: false, type: 'signup' })} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {authModal.type === 'signup' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                    required
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                  required
                />
              </div>

              {authModal.type === 'signup' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                    required
                  />
                </div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-[#4a5d4a] text-white py-3 rounded-md hover:bg-[#3d4d3d] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {authModal.type === 'login' ? 'Sign In' : 'Sign Up'}
              </motion.button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {authModal.type === 'login' 
                    ? "Don't have an account? "
                    : 'Already have an account? '}
                  <button
                    onClick={() => setAuthModal({ isOpen: true, type: authModal.type === 'login' ? 'signup' : 'login' })}
                    className="text-[#4a5d4a] hover:text-[#3d4d3d] font-medium"
                  >
                    {authModal.type === 'login' ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;