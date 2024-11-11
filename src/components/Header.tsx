import React from 'react';
import { Download, Store } from 'lucide-react';
import { useModal } from './ModalContext';

const Header: React.FC = () => {
  const { openModal } = useModal();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Store className="w-8 h-8 text-[#1877F2]" />
          <span className="text-xl font-bold text-[#1877F2]">Sellwase</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="block px-4 py-2 hover:text-[#1877F2]">Features</a>
          <a href="#about" className="block px-4 py-2 hover:text-[#1877F2]">About Us</a>
          <a href="#contact" className="block px-4 py-2 hover:text-[#1877F2]">Contact</a>
          <button
            className="bg-[#1877F2] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#1877F2]/90"
            onClick={openModal}
          >
            <Download className="w-4 h-4" /> Download App
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
