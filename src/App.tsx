import React, { useState } from 'react';
import { ArrowRight, Zap, Shield, Rocket, ChevronDown, Link, Github, Twitter, Linkedin, X, Mail, Lock, User } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
}

function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication here
    console.log({ email, password, name });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {type === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 mt-2">
            {type === 'login'
              ? 'Sign in to your Konekta account'
              : 'Join the Konekta community today'}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4a5d4a] text-white py-2 rounded-lg hover:bg-[#3d4d3d] transition-colors"
          >
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'signup',
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-[#4a5d4a]/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Konekta</h2>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Connect. Create.
              <span className="text-[#a8b5a8]"> Conquer.</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              Join Konekta's powerful platform where developers connect, collaborate, and create exceptional digital experiences together.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
                className="bg-[#4a5d4a] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#3d4d3d] transition-colors"
              >
                Join Konekta <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Konekta Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the power of connection with tools and features designed for modern developers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-[#4a5d4a]" />}
              title="Swift Development"
              description="Build and deploy applications with lightning-fast performance and efficiency."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-[#4a5d4a]" />}
              title="Robust Security"
              description="Enterprise-level security features to protect your projects and team data."
            />
            <FeatureCard
              icon={<Rocket className="w-6 h-6 text-[#4a5d4a]" />}
              title="Seamless Integration"
              description="Connect your tools and workflows with our streamlined deployment process."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#4a5d4a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Join the Konekta Community</h2>
              <p className="text-gray-200">Connect with thousands of developers building the future.</p>
            </div>
            <button 
              onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
              className="bg-white text-[#4a5d4a] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Link className="w-6 h-6" />
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

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        type={authModal.type}
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="w-12 h-12 bg-[#4a5d4a]/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;