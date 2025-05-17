"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sophia & Michael',
    role: 'Wedding Clients',
    image: 'https://images.pexels.com/photos/3585075/pexels-photo-3585075.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'Our wedding photos are absolutely stunning. The team captured every special moment perfectly, and the final album exceeded our highest expectations.'
  },
  {
    name: 'David Chen',
    role: 'Corporate Client',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The product photography for our e-commerce store transformed our online presence. Professional, detailed, and delivered ahead of schedule.'
  },
  {
    name: 'Emma Johnson',
    role: 'Portrait Client',
    image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'My family portrait session was such a fun experience, and the photos perfectly captured our personalities. We\'ll cherish these images forever.'
  }
];

const TestimonialsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience with Lumina Photography.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm flex flex-col fade-in",
                "border border-border hover:shadow-md transition-shadow"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="italic text-muted-foreground flex-1">"{testimonial.quote}"</blockquote>
              <div className="flex mt-4">
                {Array(5).fill(null).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;