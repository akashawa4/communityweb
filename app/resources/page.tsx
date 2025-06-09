'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Video, Download, Users, Calendar, ArrowRight, Play, FileText, Globe, Heart, Star, Clock, Eye, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

function ResourcesContent() {
  const educationalContent = [
    {
      id: 1,
      title: 'Maharashtra Cultural Heritage Guide',
      description: 'Comprehensive guide to Maharashtra\'s rich cultural traditions, festivals, and customs.',
      type: 'E-book',
      duration: '45 min read',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      downloadUrl: '/resources/downloads/maharashtra-cultural-heritage-guide.pdf',
      views: 1250,
      rating: 4.8,
      isDownloadable: true
    },
    {
      id: 2,
      title: 'Marathi Language Learning Basics',
      description: 'Essential Marathi phrases and conversation starters for community members.',
      type: 'Video Series',
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      downloadUrl: '/resources/downloads/marathi-language-basics.zip',
      views: 890,
      rating: 4.9,
      isDownloadable: true
    },
    {
      id: 3,
      title: 'Traditional Recipes Collection',
      description: 'Authentic Maharashtra recipes passed down through generations.',
      type: 'PDF Guide',
      duration: '30 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      downloadUrl: '/resources/downloads/traditional-recipes-collection.pdf',
      views: 2100,
      rating: 4.7,
      isDownloadable: true
    }
  ];

  const upcomingWorkshops = [
    {
      id: 1,
      title: 'Financial Literacy for Families',
      date: '2024-02-15',
      time: '19:00 PM',
      type: 'Virtual Workshop',
      instructor: 'CA Rajesh Sharma',
      description: 'Learn essential financial planning strategies for your family\'s future.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      registrationUrl: '/events',
      attendees: 45,
      maxAttendees: 100
    },
    {
      id: 2,
      title: 'Nutrition & Wellness for Families',
      date: '2024-02-22',
      time: '18:30 PM',
      type: 'In-Person Workshop',
      instructor: 'Dr. Priya Kulkarni',
      description: 'Practical tips for maintaining family health and nutrition.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      registrationUrl: '/events',
      attendees: 32,
      maxAttendees: 50
    },
    {
      id: 3,
      title: 'Digital Parenting in Modern Times',
      date: '2024-03-01',
      time: '20:00 PM',
      type: 'Virtual Webinar',
      instructor: 'Prof. Meera Joshi',
      description: 'Navigate the challenges of raising children in the digital age.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      registrationUrl: '/events',
      attendees: 67,
      maxAttendees: 150
    }
  ];

  const parentingResources = [
    {
      title: 'Child Development Milestones',
      description: 'Track your child\'s growth and development stages.',
      type: 'Interactive Tool',
      icon: Users,
      link: '/resources/tools/child-development-tracker',
      isExternal: false
    },
    {
      title: 'Educational Activities by Age',
      description: 'Age-appropriate learning activities for children.',
      type: 'Activity Guide',
      icon: BookOpen,
      link: '/resources/downloads/educational-activities-guide.pdf',
      isExternal: false
    },
    {
      title: 'Family Communication Strategies',
      description: 'Build stronger family bonds through effective communication.',
      type: 'Article Series',
      icon: Heart,
      link: '/blog/family-communication-strategies',
      isExternal: false
    },
    {
      title: 'Screen Time Management',
      description: 'Healthy digital habits for the whole family.',
      type: 'Practical Guide',
      icon: Clock,
      link: '/resources/downloads/screen-time-management-guide.pdf',
      isExternal: false
    }
  ];

  const handleDownload = (url: string, title: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message (you could use a toast notification here)
    alert(`Downloading: ${title}`);
  };

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
                <BookOpen className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Learning Hub</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Resources &{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Learning
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover educational content, join workshops, and access parenting resources 
                designed to help your family grow and thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Content Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Educational Content
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Learn about local culture, history, and language through our curated educational materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationalContent.map((content) => (
                <Card key={content.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={content.image}
                        alt={content.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {content.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {content.views}
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {content.rating}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {content.duration}
                      </div>
                      {content.isDownloadable ? (
                        <Button 
                          onClick={() => handleDownload(content.downloadUrl, content.title)}
                          size="sm"
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Access
                        </Button>
                      ) : (
                        <Button 
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                        >
                          <Link href={content.downloadUrl} className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Access
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops & Webinars Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Workshops & Webinars
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Join our virtual and in-person learning opportunities on topics that matter to your family.
              </p>
            </div>

            <div className="space-y-8">
              {upcomingWorkshops.map((workshop) => (
                <Card key={workshop.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-white/50">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className="relative h-64 lg:h-full">
                        <Image
                          src={workshop.image}
                          alt={workshop.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {workshop.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(workshop.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {workshop.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {workshop.attendees}/{workshop.maxAttendees} registered
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {workshop.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {workshop.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-500">Instructor</div>
                            <div className="font-semibold text-gray-900">{workshop.instructor}</div>
                          </div>
                          
                          <Button 
                            asChild
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                          >
                            <Link href={workshop.registrationUrl} className="flex items-center">
                              Register Now
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
          </div>
        </section>

        {/* Parenting Resources Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Parenting Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Access tools, articles, and guides designed to support your family development journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {parentingResources.map((resource, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="text-xs text-orange-600 font-medium mb-4">
                      {resource.type}
                    </div>
                    {resource.link.endsWith('.pdf') ? (
                      <Button 
                        onClick={() => handleDownload(resource.link, resource.title)}
                        variant="outline"
                        size="sm"
                        className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        Access Resource
                      </Button>
                    ) : (
                      <Button 
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        <Link href={resource.link}>
                          Access Resource
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join our community to access exclusive educational content and participate in workshops.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership" className="flex items-center justify-center">
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/resources/downloads">Browse Downloads</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <ProtectedRoute requireSubscription={true}>
      <ResourcesContent />
    </ProtectedRoute>
  );
}