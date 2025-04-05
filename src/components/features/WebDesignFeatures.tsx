import React from 'react';

const WebDesignFeatures = () => {
  const features = [
    {
      title: 'Custom Design Solutions',
      description: 'Unique websites tailored to your brand and business goals. No templates, only custom solutions.',
      icon: '🎨',
    },
    {
      title: 'Responsive Design',
      description: 'Websites that work perfectly on all devices - desktops, tablets, and mobile phones.',
      icon: '📱',
    },
    {
      title: 'SEO Optimization',
      description: 'Built with search engines in mind to help your website rank higher in search results.',
      icon: '🎯',
    },
    {
      title: 'Fast Development',
      description: 'Efficient development process without compromising on quality or attention to detail.',
      icon: '⚡',
    },
    {
      title: 'E-commerce Ready',
      description: 'Custom e-commerce solutions integrated with popular payment gateways and shipping providers.',
      icon: '💰',
    },
    {
      title: 'Ongoing Support',
      description: 'Regular updates, maintenance, and support to keep your website running smoothly.',
      icon: '🔧',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-[#4a5d4a] mb-12">Web Design Features</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4 text-[#4a5d4a]">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#4a5d4a] mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-[#4a5d4a] mb-6">Technical Features</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-[#4a5d4a] mb-2">Development</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Modern Frameworks
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Clean Code
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Performance Optimization
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#4a5d4a] mb-2">Integration</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Social Media
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Analytics
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Payment Systems
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#4a5d4a] text-white px-8 py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors">
          Get Started with Web Design
        </button>
      </div>
    </div>
  );
};

export default WebDesignFeatures;
