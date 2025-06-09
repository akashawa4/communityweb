'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowLeft, Download, Heart, Eye, Calendar, Filter, Search, Grid, List, Share2, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PhotoGalleryPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Events', 'Culture', 'Business', 'Education', 'Family', 'Sports'];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      title: 'Annual Family Gathering 2024',
      category: 'Events',
      date: 'January 2024',
      views: 1250,
      likes: 89,
      description: 'Our biggest annual celebration bringing together families from across Maharashtra'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Cultural Festival Celebration',
      category: 'Culture',
      date: 'December 2023',
      views: 980,
      likes: 67,
      description: 'Traditional dance and music performances during our cultural festival'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      title: 'Professional Networking Event',
      category: 'Business',
      date: 'November 2023',
      views: 1100,
      likes: 78,
      description: 'Business leaders connecting and sharing opportunities'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Youth Leadership Workshop',
      category: 'Education',
      date: 'October 2023',
      views: 850,
      likes: 56,
      description: 'Empowering the next generation with leadership skills'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      title: 'Community Service Day',
      category: 'Events',
      date: 'September 2023',
      views: 720,
      likes: 45,
      description: 'Giving back to the community through volunteer work'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg',
      title: 'Family Sports Tournament',
      category: 'Sports',
      date: 'August 2023',
      views: 950,
      likes: 62,
      description: 'Friendly competition bringing families together'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      title: 'Educational Seminar',
      category: 'Education',
      date: 'July 2023',
      views: 680,
      likes: 41,
      description: 'Learning and development session for community members'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Children\'s Day Celebration',
      category: 'Family',
      date: 'June 2023',
      views: 1300,
      likes: 95,
      description: 'Special day dedicated to our youngest community members'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg',
      title: 'Traditional Cooking Workshop',
      category: 'Culture',
      date: 'May 2023',
      views: 890,
      likes: 73,
      description: 'Learning traditional Maharashtra recipes from expert cooks'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      title: 'Business Excellence Awards',
      category: 'Business',
      date: 'April 2023',
      views: 1150,
      likes: 84,
      description: 'Recognizing outstanding achievements in business and entrepreneurship'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      title: 'Community Picnic',
      category: 'Family',
      date: 'March 2023',
      views: 760,
      likes: 58,
      description: 'Relaxing day out with families enjoying nature and games'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      title: 'Holi Celebration',
      category: 'Culture',
      date: 'March 2023',
      views: 1400,
      likes: 102,
      description: 'Colorful celebration of the festival of colors'
    }
  ];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Header */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <Button asChild variant="outline" className="mb-6">
                <Link href="/gallery" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Gallery
                </Link>
              </Button>
            </div>

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
                <Camera className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Photo Collection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Photo{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Browse through our extensive collection of community photos capturing memorable moments, 
                events, and celebrations from our vibrant family network.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search photos..."
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

        {/* Photo Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredPhotos.map((photo) => (
                  <Card key={photo.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Hover Actions */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                              <ZoomIn className="h-5 w-5" />
                            </button>
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                              <Download className="h-5 w-5" />
                            </button>
                            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                              <Share2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {photo.category}
                          </span>
                        </div>
                        
                        {/* Stats */}
                        <div className="absolute bottom-3 right-3 flex gap-2">
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            <Eye className="h-3 w-3" />
                            <span>{photo.views}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            <Heart className="h-3 w-3" />
                            <span>{photo.likes}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{photo.date}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {photo.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {photo.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPhotos.map((photo) => (
                  <Card key={photo.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 relative">
                          <Image
                            src={photo.src}
                            alt={photo.title}
                            width={320}
                            height={200}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {photo.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4" />
                            <span>{photo.date}</span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {photo.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {photo.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                <span>{photo.views} views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4" />
                                <span>{photo.likes} likes</span>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
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
      </main>
      <Footer />
    </div>
  );
}