import Link from 'next/link';
import { ArrowRight, Users, Award, Heart, Sparkles, Star, CheckCircle, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const benefits = [
    {
      icon: Users,
      text: 'Connect with 500+ Solapur Families in Kolhapur',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      text: 'Access to Exclusive Events & Workshops',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      text: 'Build Lasting Friendships & Partnerships',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Sparkles,
      text: 'Bridge Your Solapur Roots with Kolhapur Life',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    'Verified Solapur families living in Kolhapur',
    'Monthly networking events',
    'Family mentorship programs',
    'Business collaboration opportunities',
    'Cultural celebration events',
    'Youth development workshops'
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/40 to-amber-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg rotate-45 animate-spin opacity-20" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-400 rounded-full animate-pulse opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
            <Crown className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Join the Elite Community</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Join Kolhapur's Most{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Trusted Solapur Community?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Don't miss out on the opportunity to connect with like-minded Solapur families living in Kolhapur, 
            attend exclusive events, and create a brighter future for your family.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-green-500" />
              <span>500+ Solapur families</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-500" />
              <span>15+ years trusted</span>
            </div>
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <p className="text-gray-700 font-medium text-center leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
        
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Features */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  What You'll Get as a Member
                </h3>
                
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Special Offer */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">Limited Time Offer</span>
                  </div>
                  <p className="text-orange-700 text-sm">
                    Join now and get lifetime access for just ₹500 - No recurring fees!
                  </p>
                </div>
              </div>
              
              {/* Right Side - CTA */}
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Join Today & Get Instant Access
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Become part of a community that bridges your Solapur heritage with your Kolhapur life.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      asChild 
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <Link href="/membership" className="flex items-center justify-center">
                        Join Our Community
                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg"
                      className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Instant access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600 font-medium">Solapur Families</div>
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
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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