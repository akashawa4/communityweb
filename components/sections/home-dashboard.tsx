'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  ArrowRight, 
  Clock, 
  MapPin, 
  BookOpen, 
  Bell, 
  Star, 
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Pin,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';

export default function HomeDashboard() {
  const { user } = useAuth();
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [greeting, setGreeting] = useState('');

  // Set dynamic greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  // Community news and announcements
  const communityNews = [
    {
      id: 1,
      title: 'Annual Family Gathering 2024 - Registration Now Open!',
      content: 'Join us for our biggest celebration of the year. Early bird discounts available until March 1st.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      date: '2024-01-20',
      author: 'Community Admin',
      isPinned: true,
      category: 'Event',
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'New Business Networking Group Launched',
      content: 'Exciting news! We\'ve launched a dedicated business networking group for entrepreneurs and professionals.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      date: '2024-01-18',
      author: 'Rajesh Patil',
      isPinned: false,
      category: 'Business',
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: 'Youth Leadership Program Applications Open',
      content: 'Applications are now open for our youth leadership development program. Limited seats available.',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      date: '2024-01-15',
      author: 'Dr. Meera Joshi',
      isPinned: true,
      category: 'Education',
      likes: 45,
      comments: 8
    }
  ];

  // Featured upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Professional Networking Mixer',
      date: '2024-02-15',
      time: '19:00 PM',
      location: 'Business Hub, Kolhapur',
      attendees: 45,
      maxAttendees: 100,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Professional',
      featured: true
    },
    {
      id: 2,
      title: 'Cultural Festival Celebration',
      date: '2024-02-22',
      time: '18:00 PM',
      location: 'Community Center, Kolhapur',
      attendees: 78,
      maxAttendees: 150,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'Cultural',
      featured: false
    },
    {
      id: 3,
      title: 'Family Picnic & Sports Day',
      date: '2024-03-01',
      time: '10:00 AM',
      location: 'Rankala Lake, Kolhapur',
      attendees: 92,
      maxAttendees: 200,
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      category: 'Family',
      featured: false
    }
  ];

  // Latest blog posts
  const latestBlogs = [
    {
      id: 1,
      title: 'Building Strong Professional Networks in Maharashtra',
      excerpt: 'Discover key strategies for creating meaningful professional connections...',
      author: 'Rashmi Kulkarni',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Professional',
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: 'Celebrating Festivals as a Community',
      excerpt: 'How our community comes together to celebrate traditional festivals...',
      author: 'Santosh Deshmukh',
      date: '2024-01-10',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'Culture',
      views: 980,
      featured: false
    }
  ];

  const nextNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev + 1) % communityNews.length);
  };

  const prevNewsSlide = () => {
    setCurrentNewsSlide((prev) => (prev - 1 + communityNews.length) % communityNews.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {greeting}, {user?.name}! 👋
                </h1>
                <p className="text-lg text-gray-600">
                  Welcome back to your community dashboard
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 border border-orange-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Gift className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Member since</div>
                      <div className="text-orange-600 text-sm">{user?.memberSince}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What's New for You */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-500" />
                What's New for You
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Bell className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">3 New Events</div>
                    <div className="text-xs text-gray-600">This week</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">5 New Members</div>
                    <div className="text-xs text-gray-600">Joined recently</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2 New Articles</div>
                    <div className="text-xs text-gray-600">Published today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Community News */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Latest Community News
            </h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevNewsSlide}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextNewsSlide}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentNewsSlide * 100}%)` }}
            >
              {communityNews.map((news) => (
                <div key={news.id} className="w-full flex-shrink-0">
                  <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-full">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                        
                        {news.isPinned && (
                          <div className="absolute top-4 left-4">
                            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <Pin className="h-3 w-3" />
                              Pinned
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute top-4 right-4">
                          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {news.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(news.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {news.author}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {news.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                          {news.content}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {news.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {news.comments}
                            </div>
                          </div>
                          
                          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* News Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {communityNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentNewsSlide 
                    ? 'w-8 h-3 bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Events & Blog */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Featured Events */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/events">View All</Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className={`bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 0 ? 'ring-2 ring-orange-200' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        {index === 0 && (
                          <div className="absolute top-1 right-1">
                            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-gray-900 line-clamp-1">
                            {event.title}
                          </h3>
                          {index === 0 && (
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(event.date)} at {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {event.attendees}/{event.maxAttendees} registered
                          </div>
                        </div>
                        
                        <Button size="sm" className="mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                          RSVP Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Latest Blog */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Stories</h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/blog">View All</Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              {latestBlogs.map((blog, index) => (
                <Card key={blog.id} className={`bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 0 ? 'ring-2 ring-purple-200' : ''}`}>
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {index === 0 && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Featured
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {blog.views}
                        </div>
                        <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {blog.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span>{blog.author}</span>
                        <span>•</span>
                        <span>{formatDate(blog.date)}</span>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                          {blog.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      
                      <Button variant="outline" size="sm" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}