import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Designs', href: '#designs' },
    { name: 'For Hamper Suppliers', href: '#for-suppliers' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  const mobileNavLinks = [
    ...navLinks,
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleDiscussOrder = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E1D3] py-3.5 shadow-sm' 
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center shrink-0">
          <BrandLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.14em] font-medium text-[#524A42] hover:text-[#8C6A28] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA Button - Strictly "Discuss Order" with guaranteed single-line formatting */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={handleDiscussOrder}
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-sm bg-[#4A0E1C] hover:bg-[#380B15] text-[#FAF7F2] text-xs font-medium tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Discuss Order</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E0B767] shrink-0" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2A231C] hover:text-[#8C6A28] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E1D3] px-6 py-6 space-y-4 shadow-md">
          {mobileNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#2A231C] hover:text-[#8C6A28] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E8E1D3]">
            <a
              href="#contact"
              onClick={handleDiscussOrder}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#4A0E1C] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium text-center cursor-pointer"
            >
              <span>Discuss Order</span>
              <ArrowUpRight className="w-4 h-4 text-[#E0B767]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
