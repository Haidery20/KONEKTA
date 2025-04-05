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
      className="space-y-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Bulk SMS</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {bulkSMSPlans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-6 rounded-2xl border ${
              plan.isPopular 
                ? 'border-[#4a5d4a] bg-[#4a5d4a]/5' 
                : 'border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 -right-3 bg-[#4a5d4a] text-white px-2.5 py-1 rounded-full text-xs">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4">{plan.name}</h3>
            
            <div className="text-center mb-6">
              <p className="text-3xl md:text-4xl font-bold text-[#4a5d4a]">{plan.price}</p>
              <p className="text-sm md:text-base text-gray-500">per 1,000 SMS</p>
            </div>

            <div className="space-y-2.5">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-3.5 h-3.5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#4a5d4a] text-white py-2.5 md:py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors mt-6 text-sm md:text-base">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
