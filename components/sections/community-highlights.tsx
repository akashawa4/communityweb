'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star, Play, Heart, Users, Award, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CommunityHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer & Mother',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      quote: 'This community has been a blessing for our family. We\'ve made lifelong friends and found incredible support for both our professional and personal growth.',
      rating: 5,
      memberSince: '2019',
      achievements: ['Top Networker', 'Event Organizer']
    },
    {
      id: 2,
      name: 'Rajesh Patil',
      role: 'Business Owner & Father',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      quote: 'The networking opportunities here are unmatched. I\'ve expanded my business significantly through connections made in this wonderful community.',
      rating: 5,
      memberSince: '2020',
      achievements: ['Business Leader', 'Mentor']
    },
    {
      id: 3,
      name: 'Sunita Desai',
      role: 'Doctor & Community Volunteer',
      location: 'Nashik',
      image: 'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg',
      quote: 'Being part of this community has enriched our lives immensely. The events are well-organized and the values align perfectly with what we believe in.',
      rating: 5,
      memberSince: '2021',
      achievements: ['Community Champion', 'Volunteer Leader']
    },
    {
      id: 4,
      name: 'Amit Joshi',
      role: 'Educator & Father',
      location: 'Aurangabad',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      quote: 'Our children have benefited tremendously from the youth programs. This community truly cares about the next generation\'s development.',
      rating: 5,
      memberSince: '2022',
      achievements: ['Youth Mentor', 'Education Advocate']
    }
  ];

  const communityImages = [
    'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
    'https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg'
  ];

  // Auto-scroll functionality with improved performance
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Faster transition

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-red-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
            <Heart className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Community Stories</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Community{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our community members about their experiences and how being part of our 
            family network has positively impacted their lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Auto-scrolling Images */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-pink-500/20 z-10"></div>
              <Image
                src={communityImages[currentSlide]}
                alt="Community moments"
                fill
                className="object-cover transition-all duration-700 ease-in-out"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
                >
                  {isAutoPlaying ? (
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </button>
              </div>
              
              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
                {currentSlide + 1} / {communityImages.length}
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-orange-100 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-orange-100 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-orange-100 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-semibold text-gray-900">Premium</span>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-orange-100 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-3 shadow-lg">
                  <Quote className="h-6 w-6" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex justify-center mb-6 mt-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-8 italic text-center">
                "{testimonials[currentSlide].quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-orange-100"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-400 w-6 h-6 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentSlide].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentSlide].location} • Member since {testimonials[currentSlide].memberSince}
                  </div>
                  
                  {/* Achievement Badges */}
                  <div className="flex gap-2 mt-2">
                    {testimonials[currentSlide].achievements.map((achievement, index) => (
                      <span 
                        key={index}
                        className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-12 gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="rounded-full w-12 h-12 p-0 border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="rounded-full w-12 h-12 p-0 border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-gradient-to-r from-orange-500 to-red-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600 font-medium">Active Families</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
            <div className="text-gray-600 font-medium">Events Hosted</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
            <div className="text-gray-600 font-medium">Years Strong</div>
          </div>
        </div>
      </div>
    </section>
  );
}