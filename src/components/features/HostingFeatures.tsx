import React from 'react';

const HostingFeatures = () => {
  const features = [
    {
      title: 'Lightning Fast Performance',
      description: 'Our servers are optimized for speed and reliability. Enjoy blazing fast load times and guaranteed uptime.',
      icon: '🚀',
    },
    {
      title: 'Enterprise Security',
      description: 'Advanced security measures including SSL certificates, DDoS protection, and automatic backups.',
      icon: '🛡️',
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to help you with any issues.',
      icon: '👨‍💻',
    },
    {
      title: 'Easy Management',
      description: 'Manage your websites with our intuitive control panel. No technical expertise required.',
      icon: '⚙️',
    },
    {
      title: 'Flexible Scaling',
      description: 'Easily upgrade your hosting plan as your website grows. No downtime, no hassle.',
      icon: '📈',
    },
    {
      title: 'Free Domain',
      description: 'Get a free domain name with your hosting plan. Choose from popular TLDs.',
      icon: '🌐',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-[#4a5d4a] mb-12">Hosting Features</h2>
      
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
        <h3 className="text-2xl font-bold text-[#4a5d4a] mb-6">Advanced Features</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-[#4a5d4a] mb-2">Performance</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SSD Storage
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                CDN Integration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cache Optimization
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#4a5d4a] mb-2">Security</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                SSL Certificates
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Daily Backups
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4a5d4a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Firewall Protection
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#4a5d4a] text-white px-8 py-3 rounded-lg hover:bg-[#3d4d3d] transition-colors">
          Get Started with Hosting
        </button>
      </div>
    </div>
  );
};

export default HostingFeatures;
