import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, MapPin, AlertCircle, Zap, Users, Lock, Phone, Headphones } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Advanced Security',
    description: 'State-of-the-art encryption and security protocols to protect your assets and data.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Real-time Tracking',
    description: 'Track your assets in real-time with precise GPS location updates.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <AlertCircle className="w-8 h-8" />,
    title: 'Smart Alerts',
    description: 'Get instant notifications for movement, geofence breaches, and low battery.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast Updates',
    description: 'Receive real-time updates with minimal latency for instant tracking.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Management',
    description: 'Manage multiple users and assign different access levels for your team.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Data Privacy',
    description: 'Your data is protected with end-to-end encryption and secure storage.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Mobile Access',
    description: 'Track your assets from anywhere using our mobile app or web interface.',
    className: 'bg-[#4a5d4a]/5'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Get help anytime with our dedicated customer support team.',
    className: 'bg-[#4a5d4a]/5'
  }
];

const FeaturesPage = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-[#4a5d4a] mb-12">Features</h1>
          
          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-gray-200 hover:border-[#4a5d4a]/30 hover:shadow-lg transition-all"
              >
                <div className={`p-4 rounded-lg ${feature.className} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Features Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-[#4a5d4a] mb-12">Key Features</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Real-time Tracking */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <MapPin className="w-10 h-10 text-[#4a5d4a]" />
                    <h3 className="ml-4 text-2xl font-bold text-[#4a5d4a]">Real-time Tracking</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Track your assets with precise GPS location updates every minute. Get real-time updates on your dashboard or mobile app.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Minute-by-minute location updates</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Historical location tracking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Custom location refresh rates</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <Shield className="w-10 h-10 text-[#4a5d4a]" />
                    <h3 className="ml-4 text-2xl font-bold text-[#4a5d4a]">Advanced Security</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Your data is protected with military-grade encryption and secure access controls.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Two-factor authentication</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Role-based access control</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Smart Alerts */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <AlertCircle className="w-10 h-10 text-[#4a5d4a]" />
                    <h3 className="ml-4 text-2xl font-bold text-[#4a5d4a]">Smart Alerts</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Get instant notifications for important events and customizable alerts.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Geofence breach alerts</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Movement detection</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Low battery notifications</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Team Management */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <Users className="w-10 h-10 text-[#4a5d4a]" />
                    <h3 className="ml-4 text-2xl font-bold text-[#4a5d4a]">Team Management</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Manage your team efficiently with customizable user roles and permissions.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Custom user roles</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Access control</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-[#4a5d4a] rounded-full mr-2" />
                      <span>Activity logging</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeaturesPage;
