import React from 'react';
import { Store, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-8 h-8 text-[#1877F2]" />
              <span className="text-xl font-bold text-[#1877F2]">UniMarket</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transforming campus life with smart mobility and marketplace solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#1877F2]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1877F2]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1877F2]">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-[#1877F2]">About Us</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-[#1877F2]">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#1877F2]">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 hover:text-[#1877F2]">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-[#1877F2]">Terms of Service</a></li>
              <li><a href="#cookies" className="text-gray-600 hover:text-[#1877F2]">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Download</h3>
            <div className="space-y-3">
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/apple.svg" alt="App Store" className="w-6 h-6" />
                App Store
              </button>
              <button className="w-full bg-[#1877F2] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                <img src="/src/assets/google-play.svg" alt="Google Play" className="w-6 h-6" />
                Google Play
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} UniMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}