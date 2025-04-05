import React from 'react';
import { motion } from 'framer-motion';

interface HostingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const hostingPlans: HostingPlan[] = [
  {
    name: 'Starter',
    price: 'TSh 35,000/mo',
    features: [
      '1 Website',
      '500MB Storage',
      '10GB Bandwidth',
      'Basic Support',
      'Free SSL',
      'Daily Backups'
    ]
  },
  {
    name: 'Professional',
    price: 'TSh 75,000/mo',
    features: [
      '5 Websites',
      '2GB Storage',
      '50GB Bandwidth',
      'Priority Support',
      'Free SSL',
      'Daily Backups',
      'Custom Domain',
      'WordPress Support'
    ],
    isPopular: true
  },
  {
    name: 'Business',
    price: 'TSh 150,000/mo',
    features: [
      'Unlimited Websites',
      '5GB Storage',
      'Unlimited Bandwidth',
      '24/7 Support',
      'Free SSL',
      'Daily Backups',
      'Custom Domain',
      'WordPress Support',
      'Advanced Security',
      'Staging Environment'
    ]
  }
];

export default function HostingPricing() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#4a5d4a] text-center mb-6">Web Hosting</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {hostingPlans.map((plan) => (
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
              <p className="text-sm md:text-base text-gray-500">per month</p>
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
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
