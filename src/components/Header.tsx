import React, { useEffect, useState } from "react";
import { Download, Store, Menu, X } from "lucide-react";
import { useModal } from "./ModalContext";

const Header: React.FC = () => {
  const { openModal } = useModal();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Function to handle scrolling and update the active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.4 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Handle smooth scrolling when clicking a link
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu on link click
    }
  };

  const getLinkClass = (section: string) =>
    `block px-4 py-2 ${
      activeSection === section ? "text-[#1877F2] font-semibold" : "hover:text-[#1877F2]"
    }`;

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#">
            <Store className="w-8 h-8 text-[#1877F2]" />
          </a>
          <a href="#">
            <span className="text-xl font-bold text-[#1877F2]">Sellwase</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className={getLinkClass("features")}
            onClick={() => handleNavClick("features")}
          >
            Features
          </a>
          <a
            href="#about"
            className={getLinkClass("about")}
            onClick={() => handleNavClick("about")}
          >
            About Us
          </a>
          <a
            href="#contact"
            className={getLinkClass("contact")}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
          <button
            className="bg-[#1877F2] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#1877F2]/90"
            onClick={openModal}
          >
            <Download className="w-4 h-4" /> Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <a
            href="#features"
            className={getLinkClass("features")}
            onClick={() => handleNavClick("features")}
          >
            Features
          </a>
          <a
            href="#about"
            className={getLinkClass("about")}
            onClick={() => handleNavClick("about")}
          >
            About Us
          </a>
          <a
            href="#contact"
            className={getLinkClass("contact")}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
          <button
            className="w-full bg-[#1877F2] text-white px-6 py-2 my-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1877F2]/90"
            onClick={openModal}
          >
            <Download className="w-4 h-4" /> Download App
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
