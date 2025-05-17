"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding photography',
    category: 'Wedding'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Couple portrait',
    category: 'Portrait'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Event coverage',
    category: 'Event'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Product photography',
    category: 'Commercial'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1486827/pexels-photo-1486827.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Family portrait',
    category: 'Portrait'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/2403051/pexels-photo-2403051.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fashion photography',
    category: 'Commercial'
  },
];

const GalleryPreview = () => {
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through a selection of our recent photography projects across various categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg aspect-[3/4] fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent/90 text-white px-3 py-1 rounded-full text-xs mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-medium text-lg">{item.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <Button size="lg" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;