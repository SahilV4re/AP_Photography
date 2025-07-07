import Link from 'next/link';
import { Camera, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Cancellation from '../PaymentHelper/Cancellation&Refund';
import Privacy from '../PaymentHelper/PrivacyPolicy';
import Shipping from '../PaymentHelper/Shipping&Exchange';
import Terms from '../PaymentHelper/termsandcondition';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Camera className="h-8 w-8" />
              <span className="font-playfair text-xl font-medium">AP</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Capturing authentic moments and creating timeless memories through the art of photography.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#wedding" className="text-muted-foreground hover:text-accent transition-colors">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="/services#portrait" className="text-muted-foreground hover:text-accent transition-colors">
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link href="/services#event" className="text-muted-foreground hover:text-accent transition-colors">
                  Event Coverage
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-muted-foreground hover:text-accent transition-colors">
                  Commercial Photography
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent mt-0.5" />
                <span className="text-muted-foreground">Mumbai</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <Link href="tel:+15555555555" className="text-muted-foreground hover:text-accent transition-colors">
                  (555) 555-5555
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <Link href="mailto:hello@luminaphotography.com" className="text-muted-foreground hover:text-accent transition-colors">
                  hello@APphotography.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AP Photography. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            <Link href="/privacypolicy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">·</span>
            <Link href="/T&C" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <span className="mx-2">·</span>
            <Link href="/cancellation" className="hover:text-accent transition-colors">
              Cancellation & Refund
            </Link>
            <span className="mx-2">·</span>
            <Link href="/exchange" className="hover:text-accent transition-colors">
              Shipping & Exchange
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;