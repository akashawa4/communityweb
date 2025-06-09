'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Search, Filter, MapPin, Heart, Star, ArrowRight, Baby, GraduationCap, Briefcase, Home, Phone, Mail, Eye, Calendar, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

function FamilyDirectoryContent() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedInterest, setSelectedInterest] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const locations = ['All', 'Kolhapur City', 'Panhala', 'Ichalkaranji', 'Kagal', 'Shirol'];
  const interests = ['All', 'Business', 'Education', 'Sports', 'Arts', 'Technology', 'Healthcare'];

  const families = [
    {
      id: 1,
      familyName: 'The Sharma Family',
      headOfFamily: 'Rajesh & Priya Sharma',
      location: 'Kolhapur City',
      memberSince: '2019',
      children: [
        { name: 'Aarav', age: 12 },
        { name: 'Ananya', age: 8 }
      ],
      interests: ['Business', 'Education', 'Sports'],
      profession: 'Software Engineer & Teacher',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      verified: true,
      rating: 4.9,
      connections: 45,
      description: 'A warm family passionate about education and community service. We love organizing study groups and sports activities for children.',
      contact: {
        phone: '+91 98765 43210',
        email: 'sharma.family@email.com'
      }
    },
    {
      id: 2,
      familyName: 'The Patil Family',
      headOfFamily: 'Santosh & Sunita Patil',
      location: 'Panhala',
      memberSince: '2020',
      children: [
        { name: 'Arjun', age: 15 },
        { name: 'Kavya', age: 10 },
        { name: 'Dev', age: 5 }
      ],
      interests: ['Business', 'Arts', 'Technology'],
      profession: 'Business Owner & Artist',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      verified: true,
      rating: 4.8,
      connections: 38,
      description: 'Entrepreneurial family with a passion for traditional arts and modern technology. We run art workshops for kids.',
      contact: {
        phone: '+91 98765 43211',
        email: 'patil.family@email.com'
      }
    },
    {
      id: 3,
      familyName: 'The Desai Family',
      headOfFamily: 'Amit & Meera Desai',
      location: 'Ichalkaranji',
      memberSince: '2021',
      children: [
        { name: 'Ishaan', age: 7 },
        { name: 'Riya', age: 4 }
      ],
      interests: ['Healthcare', 'Education', 'Sports'],
      profession: 'Doctor & Pharmacist',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      verified: true,
      rating: 4.9,
      connections: 52,
      description: 'Healthcare professionals dedicated to community wellness. We organize health camps and fitness activities.',
      contact: {
        phone: '+91 98765 43212',
        email: 'desai.family@email.com'
      }
    },
    {
      id: 4,
      familyName: 'The Joshi Family',
      headOfFamily: 'Vikram & Pooja Joshi',
      location: 'Kolhapur City',
      memberSince: '2018',
      children: [
        { name: 'Aditya', age: 14 },
        { name: 'Shreya', age: 11 }
      ],
      interests: ['Education', 'Technology', 'Arts'],
      profession: 'Engineer & Designer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      verified: true,
      rating: 4.7,
      connections: 41,
      description: 'Tech-savvy family passionate about innovation and creative arts. We mentor young entrepreneurs.',
      contact: {
        phone: '+91 98765 43213',
        email: 'joshi.family@email.com'
      }
    },
    {
      id: 5,
      familyName: 'The Kulkarni Family',
      headOfFamily: 'Rahul & Sneha Kulkarni',
      location: 'Kagal',
      memberSince: '2022',
      children: [
        { name: 'Tanvi', age: 9 },
        { name: 'Aryan', age: 6 }
      ],
      interests: ['Sports', 'Education', 'Business'],
      profession: 'Banker & Coach',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      verified: true,
      rating: 4.8,
      connections: 29,
      description: 'Sports enthusiasts who believe in physical fitness and financial literacy. We coach youth sports teams.',
      contact: {
        phone: '+91 98765 43214',
        email: 'kulkarni.family@email.com'
      }
    },
    {
      id: 6,
      familyName: 'The Bhosale Family',
      headOfFamily: 'Suresh & Kavita Bhosale',
      location: 'Shirol',
      memberSince: '2019',
      children: [
        { name: 'Rohan', age: 13 },
        { name: 'Prisha', age: 8 },
        { name: 'Karan', age: 3 }
      ],
      interests: ['Arts', 'Education', 'Healthcare'],
      profession: 'Teacher & Nurse',
      image: 'https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg',
      verified: true,
      rating: 4.9,
      connections: 47,
      description: 'Dedicated educators and healthcare workers. We organize cultural programs and health awareness sessions.',
      contact: {
        phone: '+91 98765 43215',
        email: 'bhosale.family@email.com'
      }
    }
  ];

  const filteredFamilies = families.filter(family => {
    const matchesSearch = family.familyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         family.headOfFamily.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         family.profession.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || family.location === selectedLocation;
    const matchesInterest = selectedInterest === 'All' || family.interests.includes(selectedInterest);
    
    return matchesSearch && matchesLocation && matchesInterest;
  });

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
                <Users className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Family Network</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Family{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Directory
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect with Solapur families living in Kolhapur. Find families with similar interests, 
                children of similar ages, and build meaningful relationships in your community.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search families by name, profession, or interests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-500"
                  />
                </div>
                
                <div className="flex gap-2">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-2 border border-orange-200 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="px-4 py-2 border border-orange-200 rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {interests.map(interest => (
                      <option key={interest} value={interest}>{interest}</option>
                    ))}
                  </select>
                  
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

              <div className="text-center text-gray-600">
                Showing {filteredFamilies.length} of {families.length} families
              </div>
            </div>
          </div>
        </section>

        {/* Family Directory Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFamilies.map((family) => (
                  <Card key={family.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={family.image}
                          alt={family.familyName}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Verified Badge */}
                        {family.verified && (
                          <div className="absolute top-4 left-4">
                            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                              <Star className="h-3 w-3 fill-white" />
                              Verified
                            </div>
                          </div>
                        )}
                        
                        {/* Rating */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {family.rating}
                          </div>
                        </div>
                        
                        {/* Member Since */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            Member since {family.memberSince}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {family.familyName}
                        </h3>
                        
                        <p className="text-gray-700 font-medium mb-2">{family.headOfFamily}</p>
                        
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{family.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <Briefcase className="h-4 w-4" />
                          <span>{family.profession}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                          <Baby className="h-4 w-4" />
                          <span>{family.children.length} children</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {family.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {family.interests.slice(0, 3).map((interest, index) => (
                            <span key={index} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                              {interest}
                            </span>
                          ))}
                          {family.interests.length > 3 && (
                            <span className="text-gray-400 text-xs px-2 py-1">
                              +{family.interests.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{family.connections} connections</span>
                            </div>
                          </div>
                          
                          <Button 
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                          >
                            <Link href={`/directory/${family.id}`}>
                              View Profile
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFamilies.map((family) => (
                  <Card key={family.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 relative">
                          <Image
                            src={family.image}
                            alt={family.familyName}
                            width={320}
                            height={200}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {family.verified && (
                            <div className="absolute top-4 left-4">
                              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                <Star className="h-3 w-3 fill-white" />
                                Verified
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                              {family.familyName}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {family.rating}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 font-medium mb-3">{family.headOfFamily}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <MapPin className="h-4 w-4" />
                              <span>{family.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Briefcase className="h-4 w-4" />
                              <span>{family.profession}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Baby className="h-4 w-4" />
                              <span>{family.children.length} children</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Calendar className="h-4 w-4" />
                              <span>Member since {family.memberSince}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {family.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {family.interests.map((interest, index) => (
                              <span key={index} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                                {interest}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{family.connections} connections</span>
                              </div>
                            </div>
                            
                            <Button 
                              asChild
                              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                            >
                              <Link href={`/directory/${family.id}`} className="flex items-center">
                                View Full Profile
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
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

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Directory Statistics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{families.length}</div>
                <div className="text-gray-600 font-medium">Registered Families</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{locations.length - 1}</div>
                <div className="text-gray-600 font-medium">Locations Covered</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Baby className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{families.reduce((total, family) => total + family.children.length, 0)}</div>
                <div className="text-gray-600 font-medium">Children in Network</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Want to Join Our Directory?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Create your family profile and connect with other Solapur families in Kolhapur. 
              Build lasting friendships and find support in your community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership">
                  Create Family Profile
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function FamilyDirectoryPage() {
  return (
    <ProtectedRoute requireSubscription={true}>
      <FamilyDirectoryContent />
    </ProtectedRoute>
  );
}