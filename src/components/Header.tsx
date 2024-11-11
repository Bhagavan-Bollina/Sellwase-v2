import React from 'react';
import { Menu, X, Download, Store } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Store className="w-8 h-8 text-[#1877F2]" />
          <span className="text-xl font-bold text-[#1877F2]">Sellwase</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="block px-4 py-2 hover:text-[#1877F2]">Features</a>
          <a href="#about" className="block px-4 py-2 hover:text-[#1877F2]">About Us</a>
          <a href="#contact" className="block px-4 py-2 hover:text-[#1877F2]">Contact</a>
          <a href="#privacy" className="block px-4 py-2 hover:text-[#1877F2]">Privacy Policy</a>
          <a href="#terms" className="block px-4 py-2 hover:text-[#1877F2]">Terms of Service</a>
          <button className="bg-[#1877F2] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#1877F2]/90">
            <Download className="w-4 h-4" /> Download App
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-600">Features</a>
            <a href="#about" className="text-gray-600">About Us</a>
            <a href="#contact" className="text-gray-600">Contact</a>
            <button className="bg-[#1877F2] text-white px-6 py-2 rounded-full flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}