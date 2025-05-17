import Image from 'next/image';

const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial'];

const galleryItems = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding couple portrait',
    category: 'Wedding'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Professional portrait session',
    category: 'Portrait'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corporate event photography',
    category: 'Event'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Product photography',
    category: 'Commercial'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Wedding ceremony',
    category: 'Wedding'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Family portrait',
    category: 'Portrait'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Birthday party',
    category: 'Event'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fashion photography',
    category: 'Commercial'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/1486827/pexels-photo-1486827.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Engagement shoot',
    category: 'Wedding'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/2403051/pexels-photo-2403051.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Corporate headshot',
    category: 'Portrait'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/3075797/pexels-photo-3075797.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Conference photography',
    category: 'Event'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Interior design photography',
    category: 'Commercial'
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 md:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Our Gallery</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse through our portfolio showcasing a selection of our best work across different photography categories.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-center flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-secondary hover:bg-accent hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="relative overflow-hidden rounded-lg aspect-[3/4] group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-medium text-lg">{item.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}