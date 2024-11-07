import React from 'react';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#1877F2]/10 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Campus Life,
              <span className="text-[#1877F2]"> Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with fellow students for carpooling and marketplace deals. One app for all your campus needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#1877F2] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1877F2]/90 shadow-lg">
                <img src="/src/assets/google-play.svg" alt="Google Play" className="w-6 h-6" />
                Get it on Google Play
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-black/90 shadow-lg">
                <img src="/src/assets/apple.svg" alt="App Store" className="w-6 h-6" />
                Download on App Store
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students using app" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}