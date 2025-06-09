'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Heart, Users, Calendar, Play, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PhotoGallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      title: 'Annual Family Gathering 2024',
      category: 'Events',
      date: 'January 2024',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Cultural Festival Celebration',
      category: 'Culture',
      date: 'December 2023',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      title: 'Professional Networking Event',
      category: 'Business',
      date: 'November 2023',
      views: 1100,
      likes: 78
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Youth Leadership Workshop',
      category: 'Education',
      date: 'October 2023',
      views: 850,
      likes: 56
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      title: 'Community Service Day',
      category: 'Service',
      date: 'September 2023',
      views: 720,
      likes: 45
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg',
      title: 'Family Sports Tournament',
      category: 'Sports',
      date: 'August 2023',
      views: 950,
      likes: 62
    }
  ];

  const categories = ['All', 'Events', 'Culture', 'Business', 'Education', 'Service', 'Sports'];

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Camera Icons */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
            <Camera className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Community Memories</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h2 
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Capturing Our{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Community Journey
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore moments that define our community - from professional networking events to cultural celebrations, 
            each photo tells a story of connection, growth, and shared experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                  : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200'
              } hover:scale-105`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${index === 0 ? 'h-96 lg:h-[500px]' : 'h-64'}`}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                    {image.category}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <h3 className="text-white font-semibold text-lg lg:text-xl mb-2 leading-tight">
                    {image.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{image.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{image.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{image.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Play Button for Featured Image */}
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Play className="h-8 w-8 ml-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2,500+</div>
              <div className="text-sm text-gray-600 font-medium">Photos Shared</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-sm text-gray-600 font-medium">Events Captured</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15K+</div>
              <div className="text-sm text-gray-600 font-medium">Memories Liked</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-sm text-gray-600 font-medium">Total Views</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Link href="/gallery" className="flex items-center">
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <Camera className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Upload Photos
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm">
            ✨ Share your community moments and be part of our growing story
          </p>
        </div>
      </div>
    </section>
  );
}