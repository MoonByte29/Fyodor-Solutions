import React from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import ExpandableCards from '../components/ExpandableCards';

export const BlogSection = () => {
  return (
    <div className="p-4 bg-slate-100 rounded-xl">
      <CCarousel controls indicators interval={0}>
        <CCarouselItem>
          <ExpandableCards />
        </CCarouselItem>
        <CCarouselItem>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Client Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    F500
                  </div>
                  <h3 className="text-lg font-semibold">Fortune 500 Retailer</h3>
                </div>
                <p className="text-slate-700">
                  Reduced checkout processing time by 68% and decreased fraud incidents by 83% with our AI-powered fraud detection system.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                    FI
                  </div>
                  <h3 className="text-lg font-semibold">Financial Institution</h3>
                </div>
                <p className="text-slate-700">
                  Automated 92% of manual compliance reporting, saving over 12,000 hours annually and reducing errors by 97%.
                </p>
              </div>
            </div>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Our Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Machine Learning', 'RPA', 'Cloud Native', 'Data Analytics', 'IoT', 'Blockchain', 'API Integration', 'Computer Vision'].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-2">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-slate-800">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};