import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import CommunityPage from './pages/CommunityPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(App)
  },
  {
    path: '/pricing',
    element: React.createElement(PricingPage)
  },
  {
    path: '/features',
    element: React.createElement(FeaturesPage)
  },
  {
    path: '/community',
    element: React.createElement(CommunityPage)
  }
]);
