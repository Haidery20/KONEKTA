import React from 'react';
import { motion } from 'framer-motion';

interface BulkSMSPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const bulkSMSPlans: BulkSMSPlan[] = [
  {
    name: 'Starter',
    price: 'TSh 500/1,000 SMS',
    features: [
      '1,000 SMS',
      'Basic Analytics',
      '24/7 Support',
      'API Access',
      'Basic Scheduling',
      '1 Sender ID'
    ]
  },
  {
    name: 'Business',
    price: 'TSh 450/1,000 SMS',
    features: [
      '10,000 SMS',
      'Advanced Analytics',
      '24/7 Priority Support',
      'API Access',
      'Advanced Scheduling',
      '5 Sender IDs',
      'Custom Reports'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 'TSh 400/1,000 SMS',
    features: [
      'Unlimited SMS',
      'Enterprise Analytics',
      '24/7 Dedicated Support',
      'API Access',
      'Advanced Scheduling',
      'Unlimited Sender IDs',
      'Custom Reports',
      'White Labeling',
      'Dedicated Account Manager'
    ]
  }
];

export default function BulkSMSPricing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Bulk SMS</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#4a5d4a] text-center">{bulkSMSPlans[0].name}</h3>
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">{bulkSMSPlans[0].price}</p>
          <p className="text-sm md:text-base text-gray-500">per 1,000 SMS</p>
        </div>
        <div className="space-y-3">
          {bulkSMSPlans[0].features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm md:text-base text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors text-sm md:text-base">
          Get Started
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#4a5d4a] text-center">{bulkSMSPlans[1].name}</h3>
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">{bulkSMSPlans[1].price}</p>
          <p className="text-sm md:text-base text-gray-500">per 1,000 SMS</p>
        </div>
        <div className="space-y-3">
          {bulkSMSPlans[1].features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm md:text-base text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors text-sm md:text-base">
          Get Started
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#4a5d4a] text-center">{bulkSMSPlans[2].name}</h3>
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">{bulkSMSPlans[2].price}</p>
          <p className="text-sm md:text-base text-gray-500">per 1,000 SMS</p>
        </div>
        <div className="space-y-3">
          {bulkSMSPlans[2].features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm md:text-base text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors text-sm md:text-base">
          Get Started
        </button>
      </div>
    </motion.div>
  );
}
