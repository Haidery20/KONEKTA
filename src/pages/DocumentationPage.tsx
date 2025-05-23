import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Database, 
  Shield, 
  MapPin, 
  AlertCircle, 
  Zap, 
  Search, 
  MessageSquare, 
  Globe, 
  Users, 
  ArrowRight 
} from 'lucide-react';

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <BookOpen className="w-6 h-6" />,
    content: [
      {
        title: 'Introduction',
        description: 'Welcome to our comprehensive documentation. This guide will help you get started with our services and make the most of our platform.',
      },
      {
        title: 'System Requirements',
        description: 'To use our services, you will need a modern web browser and a stable internet connection. Our platform is compatible with all major browsers.',
      },
      {
        title: 'Account Setup',
        description: 'Create your account by visiting our website and clicking on the "Sign Up" button. Follow the simple registration process to get started.',
      },
    ]
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting',
    icon: <Database className="w-6 h-6" />,
    content: [
      {
        title: 'Plan Selection',
        description: 'Choose from our three hosting plans: Starter, Professional, and Business. Each plan offers different levels of resources and features.',
      },
      {
        title: 'Domain Setup',
        description: 'Learn how to set up your domain name and point it to our servers. We support both custom domains and subdomains.',
      },
      {
        title: 'FTP Access',
        description: 'Access your website files through FTP. We provide secure FTP credentials for each hosting account.',
      },
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design Services',
    icon: <Code className="w-6 h-6" />,
    content: [
      {
        title: 'Project Planning',
        description: 'Work with our design team to plan your website structure and design requirements. We offer both custom and template-based solutions.',
      },
      {
        title: 'Design Process',
        description: 'Our design process includes wireframing, prototyping, and final design implementation. You will have full control over the design direction.',
      },
      {
        title: 'Content Management',
        description: 'Learn how to manage your website content using our intuitive CMS. Update text, images, and other media easily.',
      },
    ]
  },
  {
    id: 'bulk-sms',
    title: 'Bulk SMS Services',
    icon: <MessageSquare className="w-6 h-6" />,
    content: [
      {
        title: 'Getting Started',
        description: 'Sign up for our bulk SMS service and get your account credentials. Choose from our three plans: Starter, Business, and Enterprise.',
      },
      {
        title: 'Sending SMS',
        description: 'Learn how to compose and send SMS messages using our web interface or API. Schedule messages and track delivery status.',
      },
      {
        title: 'Analytics',
        description: 'Monitor your SMS campaigns with detailed analytics. Track delivery rates, open rates, and user engagement.',
      },
    ]
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: <Code className="w-6 h-6" />,
    content: [
      {
        title: 'Authentication',
        description: 'Learn how to authenticate your API requests using our secure authentication system.',
      },
      {
        title: 'Endpoints',
        description: 'Explore our API endpoints for web hosting, SMS services, and other features.',
      },
      {
        title: 'Rate Limits',
        description: 'Understand our API rate limits and how to optimize your API usage.',
      },
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    icon: <AlertCircle className="w-6 h-6" />,
    content: [
      {
        title: 'Common Issues',
        description: 'Find solutions to common issues with our services.',
      },
      {
        title: 'Contact Support',
        description: 'How to contact our support team for assistance.',
      },
      {
        title: 'Status Page',
        description: 'Check our system status and maintenance updates.',
      },
    ]
  },
];

const DocumentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a5d4a] to-[#3d4d3d]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Documentation</h2>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything You Need to Know
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Comprehensive guides, API references, and best practices to help you get the most out of our services.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button 
                className="bg-white text-[#4a5d4a] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                API Reference
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a5d4a] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationSections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.content.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-6 h-6 flex items-center justify-center bg-[#4a5d4a] rounded-full text-white mr-3">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a 
                  href={`#${section.id}`}
                  className="inline-flex items-center text-[#4a5d4a] hover:text-[#3d4d3d] transition-colors"
                >
                  View Full Section <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <Globe className="w-6 h-6 text-[#4a5d4a] mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-600">Quick start guides and tutorials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Code className="w-6 h-6 text-[#4a5d4a] mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">API Reference</h3>
              <p className="text-gray-600">Complete API documentation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <Users className="w-6 h-6 text-[#4a5d4a] mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Join our developer community</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <AlertCircle className="w-6 h-6 text-[#4a5d4a] mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Get help and troubleshooting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Need help? <a href="/support" className="text-[#4a5d4a] hover:text-[#3d4d3d]">Contact Support</a>
            </p>
            <div className="flex items-center gap-4">
              <a href="/terms" className="text-gray-600 hover:text-[#4a5d4a]">Terms</a>
              <a href="/privacy" className="text-gray-600 hover:text-[#4a5d4a]">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentationPage;
