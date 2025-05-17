"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const serviceItems = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capture every moment of your special day with our premium wedding photography services.',
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'portrait',
    title: 'Portrait Sessions',
    description: 'Professional portrait sessions for individuals, couples, and families in studio or location.',
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'event',
    title: 'Event Coverage',
    description: 'Comprehensive photography services for corporate events, parties, and special occasions.',
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'High-quality product and branding photography to elevate your business and marketing materials.',
    image: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const ServicesPreview = () => {
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a range of professional photography services to meet your needs, 
            from weddings and portraits to commercial shoots.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {serviceItems.map((service, index) => (
            <div key={service.id} className="bg-card rounded-lg overflow-hidden shadow-sm fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" asChild>
                  <Link href={`/services#${service.id}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;