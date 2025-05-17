"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: { href: string; label: string }[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, navLinks, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background z-40 pt-20 px-6 md:hidden overflow-auto">
      <nav className="flex flex-col space-y-8 py-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              'text-2xl font-playfair transition-colors hover:text-accent',
              pathname === link.href ? 'text-accent' : 'text-foreground'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      
      <div className="border-t border-border pt-8">
        <p className="text-muted-foreground mb-4">Follow Us</p>
        <div className="flex space-x-6 mb-8">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-foreground hover:text-accent transition-colors" />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-foreground hover:text-accent transition-colors" />
          </Link>
        </div>
        
        <Button className="w-full" asChild>
          <Link href="/contact" onClick={onClose}>Book Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;