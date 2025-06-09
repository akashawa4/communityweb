'use client';

import { useState } from 'react';
import Image from 'next/image'; // Keep Image if using thumbnails, remove if direct embed
import Link from 'next/link';
import { Video, ArrowLeft, Play, Heart, Eye, Calendar, Filter, Search, Grid, List, Share2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Simple Modal component (you can replace with a more robust library like shadcn/ui Dialog)
const VideoModal = ({ videoUrl, onClose }: { videoUrl: string | null; onClose: () => void }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={onClose}>
      <div className="relative w-full max-w-3xl mx-4 aspect-video" onClick={(e) => e.stopPropagation()}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button onClick={onClose} className="absolute -top-8 right-0 text-white text-2xl">&times;</button>
      </div>
    </div>
  );
};

export default function VideoGalleryPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const categories = ['All', 'Events', 'Culture', 'Business', 'Education', 'Highlights', 'Interviews'];
  
  // NOTE: Replace thumbnail URLs with actual video embed URLs (e.g., YouTube embed URLs)
  // This example uses placeholder image URLs. You'll need to update the 'url' property
  // for each video object with the correct embed link.
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      title: 'Annual Family Gathering 2024 Highlights',
      category: 'Events',
      date: 'January 2024',
      duration: '8:45',
      views: 2150,
      likes: 189,      
      url: 'https://www.youtube.com/embed/your_video_id_1', // **Replace with actual video embed URL**
      description: 'Experience the best moments from our biggest annual celebration bringing together families from across Maharashtra'
    },
    {
      id: 2,
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      title: 'Cultural Festival Dance Performances',
      category: 'Culture',
      date: 'December 2023',
      duration: '12:30',
      views: 1890,
      url: 'https://www.youtube.com/embed/your_video_id_2', // **Replace with actual video embed URL**
      likes: 156,
      description: 'Traditional dance and music performances showcasing the rich cultural heritage of Maharashtra'
    },
    {
      id: 3,
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      title: 'Business Leadership Panel Discussion',
      category: 'Business',
      date: 'November 2023',
      duration: '25:15',
      views: 1650,
      url: 'https://www.youtube.com/embed/your_video_id_3', // **Replace with actual video embed URL**
      likes: 134,
      description: 'Industry leaders share insights on entrepreneurship and business growth strategies'
    },
    {
      id: 4,
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Youth Leadership Workshop Session',
      category: 'Education',
      date: 'October 2023',
      duration: '18:20',
      views: 1420,
      url: 'https://www.youtube.com/embed/your_video_id_4', // **Replace with actual video embed URL**
      likes: 98,
      description: 'Interactive workshop empowering young minds with leadership skills and career guidance'
    },
    {
      id: 5,
      thumbnail: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      title: 'Community Service Impact Story',
      category: 'Highlights',
      date: 'September 2023',
      duration: '6:30',
      views: 980,
      url: 'https://www.youtube.com/embed/your_video_id_5', // **Replace with actual video embed URL**
      likes: 87,
      description: 'Heartwarming stories of how our community service initiatives are making a difference'
    },
    {
      id: 6,
      thumbnail: 'https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg',
      title: 'Family Sports Tournament Finals',
      category: 'Events',
      date: 'August 2023',
      duration: '15:45',
      views: 1320,
      url: 'https://www.youtube.com/embed/your_video_id_6', // **Replace with actual video embed URL**
      likes: 112,
      description: 'Exciting moments from the championship matches of our annual family sports tournament'
    },
    {
      id: 7,
      thumbnail: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      title: 'Educational Excellence Awards Ceremony',
      category: 'Education',
      date: 'July 2023',
      duration: '22:10',
      views: 1150,
      url: 'https://www.youtube.com/embed/your_video_id_7', // **Replace with actual video embed URL**
      likes: 95,
      description: 'Celebrating academic achievements and recognizing outstanding students in our community'
    },
    {
      id: 8,
      thumbnail: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Children\'s Day Special Program',
      category: 'Events',
      date: 'June 2023',
      duration: '10:25',
      views: 1780,
      url: 'https://www.youtube.com/embed/your_video_id_8', // **Replace with actual video embed URL**
      likes: 145,
      description: 'Special performances and activities celebrating our youngest community members'
    },
    {
      id: 9,
      thumbnail: 'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg',
      title: 'Traditional Cooking Masterclass',
      category: 'Culture',
      date: 'May 2023',
      duration: '28:40',
      views: 2200,
      url: 'https://www.youtube.com/embed/your_video_id_9', // **Replace with actual video embed URL**
      likes: 178,
      description: 'Learn authentic Maharashtra recipes from master chefs and experienced home cooks'
    },
    {
      id: 10,
      thumbnail: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      title: 'Entrepreneur Success Stories',
      category: 'Interviews',
      date: 'April 2023',
      duration: '35:20',
      views: 1950,
      url: 'https://www.youtube.com/embed/your_video_id_10', // **Replace with actual video embed URL**
      likes: 167,
      description: 'Inspiring interviews with successful entrepreneurs sharing their journey and insights'
    },
    {
      id: 11,
      thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      title: 'Community Picnic Fun Moments',
      category: 'Highlights',
      date: 'March 2023',
      duration: '7:15',
      views: 890,
      url: 'https://www.youtube.com/embed/your_video_id_11', // **Replace with actual video embed URL**
      likes: 76,
      description: 'Joyful moments from our community picnic with games, food, and family bonding'
    },
    {
      id: 12,
      thumbnail: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      title: 'Holi Festival Celebration',
      category: 'Culture',
      date: 'March 2023',
      duration: '9:50',
      views: 2450,
      url: 'https://www.youtube.com/embed/your_video_id_12', // **Replace with actual video embed URL**
      likes: 201,
      description: 'Colorful celebration of Holi with traditional music, dance, and community participation'
    }
  ];

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

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
                <Video className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Video Collection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Video{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Watch highlights, event recordings, and special moments from our community. 
                Experience the energy and spirit of our vibrant family network.
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search videos..."
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

        {/* Video Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredVideos.length === 0 ? (
              <div className="text-center text-gray-600 py-10">
                No videos found for the selected category.
              </div>
            ) : viewMode === 'grid' ? (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          width={400}
                          height={225}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button onClick={() => setSelectedVideoUrl(video.url)} className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group-hover:scale-125">
                            <Play className="h-8 w-8 ml-1" />
                          </button>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {video.category}
                          </span>
                        </div>
                        
                        {/* Duration */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                            {video.duration}
                          </span>
                        </div>
                        
                        {/* Stats */}
                        <div className="absolute bottom-3 right-3 flex gap-2">
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            <Eye className="h-3 w-3" />
                            <span>{video.views}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            <Heart className="h-3 w-3" />
                            <span>{video.likes}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{video.date}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 relative">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            width={320}
                            height={180}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button onClick={() => setSelectedVideoUrl(video.url)} className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                              <Play className="h-6 w-6 ml-1" />
                            </button>
                          </div>
                          
                          <div className="absolute top-3 left-3">
                            <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {video.category}
                            </span>
                          </div>
                          
                          <div className="absolute top-3 right-3">
                            <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                              {video.duration}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4" />
                            <span>{video.date}</span>
                            <Clock className="h-4 w-4 ml-2" />
                            <span>{video.duration}</span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {video.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {video.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                <span>{video.views} views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4" />
                                <span>{video.likes} likes</span>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => setSelectedVideoUrl(video.url)} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                                <Play className="mr-2 h-4 w-4" />
                                Watch
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
        <VideoModal videoUrl={selectedVideoUrl} onClose={() => setSelectedVideoUrl(null)} />
      </main>
      <Footer />
    </div>
  );
}