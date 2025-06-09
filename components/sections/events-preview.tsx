import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EventsPreview() {
  const events = [
    {
      id: 1,
      date: '15.02.2024',
      title: 'Annual Family Gathering 2024',
      location: 'Global Arena - Mumbai',
      time: '18:00 PM',
      attendees: 250,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      description: 'Join us for our biggest annual celebration bringing together families from across Maharashtra. Network, celebrate, and create lasting memories.',
      category: 'Social'
    },
    {
      id: 2,
      date: '22.02.2024',
      title: 'Professional Networking Mixer',
      location: 'Business Hub - Pune',
      time: '19:00 PM',
      attendees: 120,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      description: 'Connect with fellow professionals and explore new business opportunities. Expand your network and discover potential collaborations.',
      category: 'Professional'
    },
    {
      id: 3,
      date: '01.03.2024',
      title: 'Youth Leadership Workshop',
      location: 'Education Center - Nashik',
      time: '10:00 AM',
      attendees: 80,
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      description: 'Empowering the next generation with leadership skills and career guidance. Interactive sessions with industry experts.',
      category: 'Educational'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-community-text mb-4">
            Upcoming <span className="text-community-primary">Events</span>
          </h2>
          <p className="text-lg text-community-secondary max-w-2xl">
            Join us for engaging events that bring our community together, from professional networking 
            to family celebrations and educational workshops.
          </p>
        </div>
        
        {/* Events List */}
        <div className="space-y-8 mb-16">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Content Side */}
                <div className="flex-1 p-8 lg:p-12">
                  {/* Date */}
                  <div className="text-community-secondary text-sm font-medium mb-3">
                    {event.date}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-community-text mb-4 group-hover:text-community-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-6 text-community-secondary text-sm mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-community-accent" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-community-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-community-accent" />
                      <span>{event.attendees} attendees expected</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-community-secondary leading-relaxed mb-8 max-w-lg">
                    {event.description}
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    className="bg-community-accent hover:bg-community-primary text-white px-8 py-3 font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Book Now
                  </Button>
                </div>
                
                {/* Image Side */}
                <div className="lg:w-80 xl:w-96">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-community-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-community-primary hover:bg-community-accent text-white px-10 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            <Link href="/events" className="flex items-center">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}