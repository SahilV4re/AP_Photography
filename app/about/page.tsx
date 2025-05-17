import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Lead Photographer',
    bio: 'With over 15 years of experience, Alex specializes in wedding and portrait photography. Their work has been featured in several photography magazines.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Jamie Chen',
    role: 'Commercial Photographer',
    bio: 'Jamie brings a creative eye to our commercial projects. With a background in graphic design, they excel at creating images that tell compelling brand stories.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Taylor Wilson',
    role: 'Event Photographer',
    bio: 'Taylor has a natural talent for capturing candid moments. Their documentary-style approach ensures no special moment goes undocumented.',
    image: 'https://images.pexels.com/photos/3585075/pexels-photo-3585075.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground">
            Learn about our passion for photography and the team behind Lumina.
          </p>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.pexels.com/photos/3379907/pexels-photo-3379907.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Photographer capturing a sunset"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-medium mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, Lumina Photography began as a passion project between 
                two friends with a shared love for visual storytelling. What started as 
                weekend photoshoots for friends and family quickly grew into a full-service 
                photography studio serving clients nationwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been defined by a commitment to technical excellence, 
                creative vision, and personal connection with our clients. We believe that 
                the best photographs happen when people feel comfortable and authentic in 
                front of the camera.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, our team consists of passionate photographers with diverse backgrounds 
                and specialties, united by our mission to create beautiful images that tell 
                meaningful stories and preserve precious memories.
              </p>
              
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Work With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our approach to photography and client relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Artistic Excellence</h3>
              <p className="text-muted-foreground">
                We strive for technical perfection while maintaining a creative, 
                artistic approach that makes each image unique and emotionally resonant.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Authentic Stories</h3>
              <p className="text-muted-foreground">
                We capture genuine emotions and moments, telling your story truthfully 
                and beautifully without forced poses or artificial setups.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Client Relationships</h3>
              <p className="text-muted-foreground">
                We value the trust our clients place in us and prioritize clear communication, 
                professionalism, and exceeding expectations every time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented photographers bring diverse skills and perspectives to create exceptional work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 md:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-4">Let's Create Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We'd love to hear about your photography needs and discuss how we can bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}