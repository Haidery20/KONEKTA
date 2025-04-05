import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Github } from 'lucide-react';
import { ArrowRight, User, Users as UsersIcon, MessageSquare, Code, BookOpen, Gift, Star, Clock, Twitter, Facebook } from 'lucide-react';
import { RouterLink } from '@remix-run/react';

const CommunityPage: React.FC = () => {
  const communityFeatures = [
    {
      icon: <UsersIcon className="w-8 h-8 text-[#4a5d4a]" />,
      title: "Active Community",
      description: "Join a vibrant community of developers, designers, and entrepreneurs who share knowledge and collaborate on projects.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#4a5d4a]" />,
      title: "Supportive Environment",
      description: "Get help and support from experienced members. Our community is known for its friendly and helpful atmosphere.",
    },
    {
      icon: <Code className="w-8 h-8 text-[#4a5d4a]" />,
      title: "Code Sharing",
      description: "Share and discover code snippets, best practices, and innovative solutions. Learn from others and contribute your expertise.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#4a5d4a]" />,
      title: "Learning Resources",
      description: "Access a wealth of tutorials, guides, and documentation. Our community is dedicated to continuous learning and growth.",
    },
    {
      icon: <Gift className="w-8 h-8 text-[#4a5d4a]" />,
      title: "Monthly Challenges",
      description: "Participate in monthly coding challenges and competitions. Win prizes and recognition for your contributions.",
    },
  ];

  const featuredProjects = [
    {
      title: "Konekta Dashboard",
      description: "A modern, responsive dashboard for Konekta users with real-time tracking capabilities.",
      author: "@devjohn",
      stars: 150,
      lastUpdated: "2 hours ago",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Asset Tracker App",
      description: "Mobile-friendly application for tracking assets in real-time with offline support.",
      author: "@mobiledev",
      stars: 215,
      lastUpdated: "4 hours ago",
      tags: ["React Native", "Firebase", "GPS"],
    },
    {
      title: "Konekta API Client",
      description: "Official JavaScript client library for the Konekta API with TypeScript support.",
      author: "@konekta",
      stars: 320,
      lastUpdated: "1 day ago",
      tags: ["JavaScript", "TypeScript", "API"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#4a5d4a] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a5d4a]/90 to-[#3d4d3d]/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to the Konekta Community
            </h1>
            <p className="text-xl md:text-2xl text-[#a8b5a8] mb-8 max-w-2xl mx-auto">
              Join thousands of developers building the future of asset tracking and management.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#4a5d4a] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Join the Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#a8b5a8] text-[#4a5d4a] px-8 py-3 rounded-lg hover:bg-[#b3c5b3] transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4a5d4a] mb-12">
            Why Join Our Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#4a5d4a]/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#4a5d4a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#4a5d4a] mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">{project.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{project.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-sm bg-[#4a5d4a]/10 text-[#4a5d4a] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-[#4a5d4a] mb-2">10K+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-[#4a5d4a] mb-2">500+</h3>
              <p className="text-gray-600">Monthly Projects</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-[#4a5d4a] mb-2">200+</h3>
              <p className="text-gray-600">Weekly Events</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-[#4a5d4a] mb-2">95%</h3>
              <p className="text-gray-600">Member Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4a5d4a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-[#a8b5a8] mb-8 max-w-2xl mx-auto">
            Start connecting with like-minded developers and contribute to the future of asset tracking.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#4a5d4a] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get Started Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d4d3d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Konekta</h3>
              <p className="text-gray-400 mb-4">
                Join our community of developers building the future of asset tracking and management.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <motion.a
                    as={RouterLink}
                    to="/features"
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    as={RouterLink}
                    to="/pricing"
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    as={RouterLink}
                    to="/docs"
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    as={RouterLink}
                    to="/community"
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Docs
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Status
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email: support@konekta.com
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Phone: +255 735 431 733
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Address: 123 Mtwara Cresent, Dar es salaam, Tanzania.
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-[#4a5d4a]/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Konekta. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;
