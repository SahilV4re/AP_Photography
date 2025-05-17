"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Camera, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-background/70 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mr-[50px]">
          <Camera className="h-8 w-8" />
          <span className="font-playfair text-xl font-medium">AP</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                'text-base transition-colors hover:text-accent',
                pathname === link.href ? 'text-accent font-medium' : 'text-foreground/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-foreground/80 hover:text-accent transition-colors" />
          </Link>
          <Button size="sm" variant="outline" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} navLinks={navLinks} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;