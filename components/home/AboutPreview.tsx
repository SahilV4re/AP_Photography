"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutPreview = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] fade-in">
            <Image
              src="https://images.pexels.com/photos/2253916/pexels-photo-2253916.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional photographer in action"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">About AP Photography</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2015, AP Photography has been capturing beautiful moments 
              and telling visual stories for clients across the country.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team of professional photographers brings years of experience and 
              a passionate eye for detail to every shoot. We believe that photography 
              is more than just taking pictures—it&apos;s about creating lasting memories 
              and showcasing the authentic beauty in every moment.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether you&apos;re planning your dream wedding, need professional portraits, 
              or require commercial photography for your business, we approach each 
              project with creativity, technical excellence, and personal dedication.
            </p>
            <Button asChild>
              <Link href="/about">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;