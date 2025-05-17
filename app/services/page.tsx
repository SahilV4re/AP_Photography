import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Our comprehensive wedding photography service captures every precious moment of your special day, from getting ready with your wedding party to the last dance of the evening. We believe in documenting both the significant events and the candid, spontaneous moments that make your wedding unique.',
    features: [
      'Pre-wedding consultation and location scouting',
      'Coverage options from 6 to 12 hours',
      'Multiple photographer packages available',
      'Professional editing with color correction',
      'Online gallery with high-resolution images',
      'Premium wedding albums and prints',
    ],
    image: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'portrait',
    title: 'Portrait Sessions',
    description: 'Our portrait sessions are designed to capture the authentic personality and emotion of individuals, couples, and families. We offer both studio sessions with professional lighting and location shoots at meaningful places of your choice.',
    features: [
      'Individuals, couples, and family sessions',
      'Studio and on-location options',
      'Wardrobe consultation available',
      'Professional editing and retouching',
      'Digital images and print packages',
      'Mini-sessions available for special occasions',
    ],
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'event',
    title: 'Event Coverage',
    description: 'From corporate gatherings to milestone celebrations, our event photography services ensure that every special moment is documented with professionalism and creativity. We work discreetly to capture both the scheduled highlights and candid interactions.',
    features: [
      'Corporate events and conferences',
      'Birthday parties and anniversaries',
      'Graduations and celebrations',
      'Quick turnaround times',
      'Both formal and candid photography',
      'Custom packages for event duration',
    ],
    image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1280'
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'Our commercial photography services help businesses showcase their products, services, and brand identity with high-quality, professional images. We work with you to understand your marketing goals and create visuals that effectively communicate your brand story.',
    features: [
      'Product photography with styling',
      'Food and beverage photography',
      'Real estate and architectural images',
      'Branding and marketing content',
      'Team and corporate headshots',
      'Commercial licensing available',
    ],
    image: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=1280'
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We offer a comprehensive range of photography services to meet your personal and professional needs. 
            Each service is tailored to provide the highest quality images that tell your unique story.
          </p>
        </div>
      </section>
      
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-16 px-6 md:px-12 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-medium mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <h3 className="text-xl font-medium mb-3">What's Included:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild>
                  <Link href="/contact">Book This Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-4">Custom Photography Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't see exactly what you need? We offer custom photography packages 
            tailored to your specific requirements. Contact us to discuss your project.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact For Custom Package</Link>
          </Button>
        </div>
      </section>
    </>
  );
}