import { motion } from 'framer-motion';
import { ArrowRight, User, Users, MessageSquare, Code, BookOpen, Gift } from 'lucide-react';

const CommunityPage = () => {
  const communityFeatures = [
    {
      icon: <Users className="w-8 h-8 text-[#4a5d4a]" />,
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4a5d4a] mb-4">
            Welcome to the Konekta Community
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of developers and creators who share knowledge, collaborate on projects, and build amazing things together.
          </p>
          <motion.button
            className="bg-[#4a5d4a] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3d4d3d] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Community
          </motion.button>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-[#4a5d4a]">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#4a5d4a] text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold">10,000+</h3>
              <p className="text-gray-300">Active Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-300">Monthly Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-gray-300">Weekly Events</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-gray-300">Member Satisfaction</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-[#4a5d4a] mb-2">
                Ready to Join the Community?
              </h2>
              <p className="text-gray-600">
                Start connecting with other developers today and unlock endless possibilities.
              </p>
            </div>
            <motion.button
              className="bg-[#4a5d4a] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3d4d3d] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityPage;
