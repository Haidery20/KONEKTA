import React from 'react';
import { motion } from 'framer-motion';

interface WebDesignPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const webDesignPlans: WebDesignPlan[] = [
  {
    name: 'Basic',
    price: 'TSh 500,000',
    features: [
      '1-Page Website',
      'Basic Design',
      'Mobile Responsive',
      '2 Design Revisions',
      '14-Day Turnaround',
      'Basic SEO Optimization'
    ]
  },
  {
    name: 'Standard',
    price: 'TSh 1,000,000',
    features: [
      '5-Page Website',
      'Custom Design',
      'Mobile Responsive',
      '4 Design Revisions',
      '10-Day Turnaround',
      'Advanced SEO',
      'Social Media Integration',
      'Custom Graphics'
    ],
    isPopular: true
  },
  {
    name: 'Premium',
    price: 'TSh 2,000,000',
    features: [
      'Unlimited Pages',
      'Premium Design',
      'Mobile Responsive',
      'Unlimited Revisions',
      '7-Day Turnaround',
      'Enterprise SEO',
      'Social Media Integration',
      'Custom Graphics',
      'Custom CMS',
      'Ongoing Support'
    ]
  }
];

export default function WebDesignPricing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#4a5d4a] text-center">Basic</h3>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">TSh 500,000</p>
            <p className="text-sm md:text-base text-gray-500">one-time fee</p>
          </div>
          <div className="space-y-3">
            {webDesignPlans[0].features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors text-sm md:text-base mt-6">
            Get Started
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#4a5d4a] text-center">Standard</h3>
        <div className="bg-white border border-[#4a5d4a] rounded-xl shadow-lg p-6">
          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">TSh 1,000,000</p>
            <p className="text-sm md:text-base text-gray-500">one-time fee</p>
          </div>
          <div className="space-y-3">
            {webDesignPlans[1].features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors text-sm md:text-base mt-6">
            Get Started
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#4a5d4a] text-center">Premium</h3>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="text-center mb-8">
            <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">TSh 2,000,000</p>
            <p className="text-sm md:text-base text-gray-500">one-time fee</p>
          </div>
          <div className="space-y-3">
            {webDesignPlans[2].features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-4 h-4 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-[#4a5d4a] text-white py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors text-sm md:text-base mt-6">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}
