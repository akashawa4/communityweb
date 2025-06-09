'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock, Filter, Search, Grid, List, Star, Heart, ArrowRight, Play, Eye, MessageSquare, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function EventsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const categories = ['All', 'Festivals', 'Meetups', 'Charity', 'Workshops', 'Business', 'Cultural'];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Family Gathering 2024',
      description: 'Join us for our biggest annual celebration bringing together families from across Maharashtra. Experience traditional food, cultural performances, and networking opportunities.',
      date: '2024-02-15',
      time: '18:00 PM',
      endTime: '22:00 PM',
      location: 'Global Arena - Mumbai',
      venue: 'Global Arena, Bandra Kurla Complex, Mumbai',
      category: 'Festivals',
      attendees: 250,
      maxAttendees: 500,
      price: 'Free',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      organizer: 'Community Admin',
      featured: true,
      rules: [
        'Family-friendly event - children welcome',
        'Traditional attire encouraged',
        'No outside food or beverages',
        'Photography allowed in designated areas',
        'RSVP required by February 10th'
      ],
      highlights: [
        'Live cultural performances',
        'Traditional Maharashtra cuisine',
        'Kids activity zone',
        'Professional networking session'
      ]
    },
    {
      id: 2,
      title: 'Professional Networking Mixer',
      description: 'Connect with fellow professionals and explore new business opportunities. Expand your network and discover potential collaborations in a relaxed environment.',
      date: '2024-02-22',
      time: '19:00 PM',
      endTime: '21:30 PM',
      location: 'Business Hub - Pune',
      venue: 'Business Hub, Hinjewadi Phase 1, Pune',
      category: 'Business',
      attendees: 120,
      maxAttendees: 200,
      price: '₹500',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      organizer: 'Rajesh Patil',
      featured: false,
      rules: [
        'Business attire required',
        'Bring business cards for networking',
        'No solicitation during presentations',
        'Refreshments will be provided',
        'Registration closes 24 hours before event'
      ],
      highlights: [
        'Industry expert speakers',
        'Speed networking sessions',
        'Business card exchange',
        'Refreshments and dinner'
      ]
    },
    {
      id: 3,
      title: 'Youth Leadership Workshop',
      description: 'Empowering the next generation with leadership skills and career guidance. Interactive sessions with industry experts and hands-on activities.',
      date: '2024-03-01',
      time: '10:00 AM',
      endTime: '16:00 PM',
      location: 'Education Center - Nashik',
      venue: 'Education Center, College Road, Nashik',
      category: 'Workshops',
      attendees: 80,
      maxAttendees: 150,
      price: '₹300',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      organizer: 'Dr. Meera Joshi',
      featured: true,
      rules: [
        'Age limit: 16-25 years',
        'Bring notebook and pen',
        'Lunch will be provided',
        'Certificate of participation provided',
        'Interactive participation expected'
      ],
      highlights: [
        'Leadership skill development',
        'Career guidance sessions',
        'Group activities and games',
        'Networking with peers'
      ]
    },
    {
      id: 4,
      title: 'Community Charity Drive',
      description: 'Join us in giving back to the community. Donation drive for underprivileged families with volunteer opportunities and awareness sessions.',
      date: '2024-03-08',
      time: '09:00 AM',
      endTime: '17:00 PM',
      location: 'Community Center - Kolhapur',
      venue: 'Community Center, Shivaji Park, Kolhapur',
      category: 'Charity',
      attendees: 150,
      maxAttendees: 300,
      price: 'Free',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      organizer: 'Sunita Desai',
      featured: false,
      rules: [
        'Bring donations (clothes, books, toys)',
        'Volunteer registration required',
        'Age-appropriate activities for children',
        'Refreshments will be provided',
        'Photography for documentation purposes'
      ],
      highlights: [
        'Donation collection drive',
        'Volunteer opportunities',
        'Community service activities',
        'Awareness sessions'
      ]
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Diwali Celebration 2023',
      date: '2023-11-12',
      attendees: 400,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      photos: 156,
      testimonial: 'Amazing celebration with the entire community! The cultural performances were outstanding.',
      author: 'Priya Sharma'
    },
    {
      id: 2,
      title: 'Business Summit 2023',
      date: '2023-10-15',
      attendees: 200,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      photos: 89,
      testimonial: 'Excellent networking opportunities and insightful sessions from industry leaders.',
      author: 'Amit Joshi'
    },
    {
      id: 3,
      title: 'Sports Tournament 2023',
      date: '2023-09-20',
      attendees: 300,
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      photos: 234,
      testimonial: 'Great fun for the whole family! Kids enjoyed the games and adults had competitive matches.',
      author: 'Kavita Bhosale'
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const EventModal = ({ event, onClose }: { event: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Image
            src={event.image}
            alt={event.title}
            width={800}
            height={300}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {event.category}
            </span>
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>{event.time} - {event.endTime}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>{event.venue}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5 text-orange-500" />
                <span>{event.attendees}/{event.maxAttendees} registered</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{event.price}</div>
              <div className="text-gray-600">Organized by {event.organizer}</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Highlights</h3>
              <ul className="space-y-2">
                {event.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Rules</h3>
              <ul className="space-y-2">
                {event.rules.map((rule: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">RSVP for this Event</h3>
            <div className="flex gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <CheckCircle className="mr-2 h-4 w-4" />
                Yes, I'll attend
              </Button>
              <Button variant="outline" className="border-yellow-300 text-yellow-600 hover:bg-yellow-50">
                Maybe
              </Button>
              <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                Can't attend
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
                <Calendar className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Community Events</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Upcoming{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join us for engaging events that bring our Solapur community together in Kolhapur. 
                From cultural celebrations to professional networking and educational workshops.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-orange-200 text-gray-700 hover:bg-orange-50">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <div className="flex border border-orange-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-orange-50'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 hover:bg-orange-50'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                        : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200'
                    } hover:scale-105`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden cursor-pointer ${event.featured ? 'ring-2 ring-orange-200' : ''}`}>
                    <CardContent className="p-0" onClick={() => setSelectedEvent(event.id)}>
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {event.featured && (
                          <div className="absolute top-4 left-4">
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <Star className="h-3 w-3 fill-white" />
                              Featured
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute top-4 right-4">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {event.category}
                          </span>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-bold">{event.price}</div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                          <Clock className="h-4 w-4 ml-2" />
                          <span>{event.time}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees}/{event.maxAttendees}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden cursor-pointer">
                    <CardContent className="p-0" onClick={() => setSelectedEvent(event.id)}>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 relative">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={320}
                            height={200}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {event.featured && (
                            <div className="absolute top-4 left-4">
                              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                <Star className="h-3 w-3 fill-white" />
                                Featured
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 p-8">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.time}
                            </div>
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                              {event.category}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {event.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {event.attendees}/{event.maxAttendees}
                              </div>
                            </div>
                            
                            <div className="text-2xl font-bold text-green-600">{event.price}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Events Highlights */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Past Events Highlights
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Relive the memorable moments from our previous community gatherings and celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {event.photos} photos
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <div className="text-sm text-gray-500 mb-4">{formatDate(event.date)}</div>
                    
                    <blockquote className="text-gray-700 italic mb-3">
                      "{event.testimonial}"
                    </blockquote>
                    <div className="text-sm text-gray-600">- {event.author}</div>
                    
                    <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      <Play className="mr-2 h-4 w-4" />
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Want to Organize an Event?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have an idea for a community event? We'd love to help you bring it to life. 
              Contact us to discuss your event proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Propose an Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership">Join Community</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal 
          event={upcomingEvents.find(e => e.id === selectedEvent)} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}