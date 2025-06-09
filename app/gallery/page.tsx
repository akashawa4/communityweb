import Link from 'next/link';
import { Camera, Video, ArrowRight, Play, Download, Heart, Eye, Calendar, Users, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function GalleryPage() {
  const galleryStats = [
    {
      icon: Camera,
      title: 'Photos',
      count: '2,500+',
      description: 'Captured memories',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Videos',
      count: '150+',
      description: 'Event recordings',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Likes',
      count: '15K+',
      description: 'Community appreciation',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Eye,
      title: 'Views',
      count: '50K+',
      description: 'Total engagement',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const featuredContent = [
    {
      type: 'photo',
      title: 'Photo Gallery',
      description: 'Browse through thousands of photos from our community events, celebrations, and memorable moments',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      stats: { items: '2,500+', views: '25K+' },
      link: '/gallery/photos'
    },
    {
      type: 'video',
      title: 'Video Gallery',
      description: 'Watch highlights, event recordings, and special moments captured in our video collection',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      stats: { items: '150+', views: '18K+' },
      link: '/gallery/videos'
    }
  ];

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
                <Camera className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Community Gallery</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Visual Journey
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore thousands of photos and videos capturing our community's most precious moments, 
                from professional networking events to cultural celebrations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {galleryStats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.count}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">{stat.title}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Gallery Options */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredContent.map((content, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${content.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                          content.type === 'photo' 
                            ? 'bg-blue-500' 
                            : 'bg-purple-500'
                        }`}>
                          {content.type === 'photo' ? 'Photo Collection' : 'Video Collection'}
                        </span>
                      </div>
                      
                      {/* Play Button for Video */}
                      {content.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                            <Play className="h-8 w-8 ml-1" />
                          </div>
                        </div>
                      )}
                      
                      {/* Stats */}
                      <div className="absolute bottom-4 left-4 flex gap-3">
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          <Grid className="h-3 w-3" />
                          <span>{content.stats.items}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          <Eye className="h-3 w-3" />
                          <span>{content.stats.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {content.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {content.description}
                      </p>
                      
 <Link href={content.link} passHref>
 <Button
 className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
 >
 <div className="flex items-center justify-center">
                          Explore {content.type === 'photo' ? 'Photos' : 'Videos'}
                          <ArrowRight className="ml-2 h-4 w-4" />
 </div>
 </Button>
 </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Jump directly to what you're looking for or browse our entire collection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/gallery/photos" className="flex items-center justify-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Browse Photos
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/gallery/videos" className="flex items-center justify-center">
                  <Video className="mr-2 h-5 w-5" />
                  Watch Videos
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}