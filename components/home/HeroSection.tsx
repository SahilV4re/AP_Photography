"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional camera capturing a moment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-1000",
          loaded ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-medium mb-6 tracking-tight">
            Capturing Life's Beautiful Moments
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Professional photography services that tell your unique story through 
            stunning visuals and timeless memories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-[#E7E8E2] hover:bg-white/10 hover:text-white" asChild>
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;