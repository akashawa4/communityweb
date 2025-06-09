import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Star, Play, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/40 to-amber-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ Solapur families</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <div className="text-gray-900">Solapur.</div>
                <div className="text-gray-900">Kolhapur.</div>
                <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Together.
                </div>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Connect with fellow Solapur families living in Kolhapur. 
                Build meaningful relationships that bridge our roots with our new home.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/membership" className="flex items-center justify-center">
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Solapur Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600 font-medium">Monthly Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Strong</div>
              </div>
            </div>
            
            {/* Features List */}
           
          </div>
          
          {/* Right Visual */}
          <div className="relative -mt-16 lg:-mt-24">
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-pink-500/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                    alt="Solapur families in Kolhapur networking"
                    width={700}
                    height={500}
                    className="w-full h-96 lg:h-[500px] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Families</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-900">Premium</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}