'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Calendar, Users, Star, Heart, Baby, GraduationCap, Briefcase, Home, Shield, MessageSquare, UserPlus, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface FamilyProfilePageProps {
  params: {
    id: string;
  };
}

function FamilyProfileContent({ params }: FamilyProfilePageProps) {
  const [isConnected, setIsConnected] = useState(false);

  // Mock data - in a real app, this would be fetched based on the ID
  const family = {
    id: parseInt(params.id),
    familyName: 'The Sharma Family',
    headOfFamily: 'Rajesh & Priya Sharma',
    location: 'Kolhapur City, Maharashtra',
    memberSince: '2019',
    children: [
      { name: 'Aarav Sharma', age: 12, grade: '7th Grade', interests: ['Cricket', 'Mathematics', 'Reading'] },
      { name: 'Ananya Sharma', age: 8, grade: '3rd Grade', interests: ['Dancing', 'Art', 'Swimming'] }
    ],
    interests: ['Business', 'Education', 'Sports', 'Community Service'],
    profession: 'Software Engineer & Teacher',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    verified: true,
    rating: 4.9,
    connections: 45,
    reviews: 23,
    description: 'We are a warm and welcoming family passionate about education and community service. Rajesh works as a software engineer at a leading tech company, while Priya is a dedicated teacher at a local school. We love organizing study groups and sports activities for children in our neighborhood.',
    detailedInfo: {
      familyValues: 'Education, Integrity, Community Service, Family Bonding',
      languages: ['Marathi', 'Hindi', 'English'],
      hobbies: ['Traveling', 'Cooking', 'Gardening', 'Photography'],
      lookingFor: 'Families with school-age children for playdates and study groups',
      availability: 'Weekends and evenings'
    },
    contact: {
      phone: '+91 98765 43210',
      email: 'sharma.family@email.com',
      preferredContact: 'WhatsApp'
    },
    gallery: [
      'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    ],
    recentActivity: [
      { type: 'event', description: 'Attended Annual Family Gathering 2024', date: '2024-01-15' },
      { type: 'review', description: 'Received 5-star review from Patil Family', date: '2024-01-10' },
      { type: 'connection', description: 'Connected with 3 new families', date: '2024-01-05' }
    ]
  };

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Header */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <Button asChild variant="outline" className="mb-6">
                <Link href="/directory" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Directory
                </Link>
              </Button>
            </div>

            {/* Family Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl mb-12">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Family Photo */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <Image
                      src={family.image}
                      alt={family.familyName}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    {family.verified && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          Verified Family
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {family.rating}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Family Info */}
                <div className="lg:col-span-2">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {family.familyName}
                  </h1>
                  
                  <p className="text-xl text-gray-700 font-medium mb-6">
                    {family.headOfFamily}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{family.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{family.profession}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Member since {family.memberSince}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{family.connections} connections</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {family.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {family.interests.map((interest, index) => (
                      <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={handleConnect}
                      className={`${
                        isConnected 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                      } text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
                    >
                      {isConnected ? (
                        <>
                          <Users className="mr-2 h-5 w-5" />
                          Connected
                        </>
                      ) : (
                        <>
                          <UserPlus className="mr-2 h-5 w-5" />
                          Connect
                        </>
                      )}
                    </Button>
                    
                    <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 px-6 py-3 font-semibold rounded-xl">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Message
                    </Button>
                    
                    <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-3 font-semibold rounded-xl">
                      <Share2 className="mr-2 h-5 w-5" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Children Information */}
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Baby className="h-6 w-6 text-orange-500" />
                      Children
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {family.children.map((child, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{child.name}</h4>
                            <span className="text-gray-600">{child.age} years old</span>
                          </div>
                          <p className="text-gray-600 mb-2">{child.grade}</p>
                          <div className="flex flex-wrap gap-2">
                            {child.interests.map((interest, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Family Details */}
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-6 w-6 text-orange-500" />
                      Family Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Family Values</h4>
                        <p className="text-gray-600">{family.detailedInfo.familyValues}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Languages Spoken</h4>
                        <div className="flex flex-wrap gap-2">
                          {family.detailedInfo.languages.map((language, index) => (
                            <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Family Hobbies</h4>
                        <div className="flex flex-wrap gap-2">
                          {family.detailedInfo.hobbies.map((hobby, index) => (
                            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Looking For</h4>
                        <p className="text-gray-600">{family.detailedInfo.lookingFor}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                        <p className="text-gray-600">{family.detailedInfo.availability}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Photo Gallery */}
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-6 w-6 text-orange-500" />
                      Family Gallery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {family.gallery.map((photo, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={photo}
                            alt={`Family photo ${index + 1}`}
                            width={200}
                            height={200}
                            className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Contact Information */}
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-6 w-6 text-orange-500" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">{family.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">{family.contact.email}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Preferred contact: {family.contact.preferredContact}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-6 w-6 text-orange-500" />
                      Community Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{family.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Connections</span>
                        <span className="font-semibold">{family.connections}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Reviews</span>
                        <span className="font-semibold">{family.reviews}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Member Since</span>
                        <span className="font-semibold">{family.memberSince}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-6 w-6 text-orange-500" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {family.recentActivity.map((activity, index) => (
                        <div key={index} className="text-sm">
                          <p className="text-gray-700">{activity.description}</p>
                          <p className="text-gray-500 text-xs">{activity.date}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function FamilyProfilePage({ params }: FamilyProfilePageProps) {
  return (
    <ProtectedRoute requireSubscription={true}>
      <FamilyProfileContent params={params} />
    </ProtectedRoute>
  );
}