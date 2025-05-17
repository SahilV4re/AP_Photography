import HeroSection from '@/components/home/HeroSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutPreview from '@/components/home/AboutPreview';
import GalleryPreview from '@/components/home/GalleryPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCta from '@/components/home/ContactCta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}