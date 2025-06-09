'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, Check, Gift, Heart, Star, Sparkles, Crown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function MembershipSection() {
  const [activeTab, setActiveTab] = useState('member');

  const membershipBenefits = [
    {
      icon: Star,
      text: 'Exclusive access to premium events',
      highlight: true
    },
    {
      icon: Users,
      text: 'Connect with 500+ verified Solapur families',
      highlight: true
    },
    {
      icon: Shield,
      text: 'Access to private community groups',
      highlight: false
    },
    {
      icon: Crown,
      text: 'Priority event booking & discounts',
      highlight: false
    },
    {
      icon: Heart,
      text: 'Family mentorship programs',
      highlight: false
    },
    {
      icon: Sparkles,
      text: 'Monthly networking mixers',
      highlight: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-red-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
            <Gift className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Become a Member</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Join Kolhapur's Most{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Exclusive Solapur Community
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connect with like-minded Solapur families living in Kolhapur, attend exclusive events, and build lasting relationships 
            that bridge your heritage with your new home.
          </p>
        </div>

        {/* Membership Card */}
        <div className="max-w-lg mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Header Tabs */}
              <div className="flex bg-gray-50/80">
                <button
                  onClick={() => setActiveTab('member')}
                  className={`flex-1 px-6 py-4 text-center font-semibold transition-all duration-300 ${
                    activeTab === 'member'
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Gift className="h-5 w-5 mx-auto mb-1" />
                  Become a member
                </button>
                
              </div>

              <div className="p-8">
                {/* Single Pricing Option */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border-2 border-orange-200">
                    <div className="text-4xl font-bold text-gray-900 mb-2">₹500</div>
                    <div className="text-orange-600 font-semibold">Lifetime Membership</div>
                    <div className="text-sm text-gray-600 mt-1">One-time payment • No recurring fees</div>
                  </div>
                </div>

                {/* Special Offer Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 mb-6 text-white">
                  <div className="flex items-center gap-2 justify-center">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-semibold text-sm">Limited Time: Lifetime Access for Just ₹500!</span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {membershipBenefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className={`${benefit.highlight ? 'font-semibold' : ''}`}>
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {activeTab === 'member' ? 'Become a member (₹500)' : 'Support community (₹500)'}
                </Button>

                {/* Trust Indicators */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>500+ families</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">
                    ✨ Lifetime access • One-time payment • No hidden fees
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Join Our Solapur Community in Kolhapur?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Verified Network</h4>
              <p className="text-gray-600 text-sm">Connect with 500+ verified Solapur families living in Kolhapur</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Events</h4>
              <p className="text-gray-600 text-sm">Access to premium networking events and family gatherings</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Bridge</h4>
              <p className="text-gray-600 text-sm">Bridge your Solapur heritage with your new life in Kolhapur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}