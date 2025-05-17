"use client"

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ContactCta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Capture Your Story?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get in touch with us to discuss your photography needs and schedule a consultation. 
            We&apos;re looking forward to bringing your vision to life.
          </p>
          <Button size="lg" asChild className="mx-2">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="mx-2">
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;