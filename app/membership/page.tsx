'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Crown, Gift, Heart, Shield, Star, Users, Zap, Mail, Lock, CreditCard, FileText, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useAuth } from '@/hooks/use-auth';

export default function MembershipPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const { user, isAuthenticated, purchaseSubscription } = useAuth();

  const memberBenefits = [
    {
      icon: Users,
      title: 'Exclusive Network Access',
      description: 'Connect with 500+ verified professional families',
      included: true
    },
    {
      icon: Star,
      title: 'Premium Events',
      description: 'Priority booking and discounts on all events',
      included: true
    },
    {
      icon: Crown,
      title: 'VIP Support',
      description: 'Dedicated support and personalized assistance',
      included: true
    },
    {
      icon: Gift,
      title: 'Exclusive Resources',
      description: 'Access to premium content and learning materials',
      included: true
    },
    {
      icon: Heart,
      title: 'Family Programs',
      description: 'Special programs for children and families',
      included: true
    },
    {
      icon: Zap,
      title: 'Business Opportunities',
      description: 'Networking and collaboration opportunities',
      included: true
    }
  ];

  const handlePurchase = async () => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    setIsProcessing(true);
    
    const result = await purchaseSubscription();
    
    if (result.success) {
      setPurchaseComplete(true);
    } else {
      alert(result.error || 'Purchase failed. Please try again.');
    }
    
    setIsProcessing(false);
  };

  if (purchaseComplete) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
          <section className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-white" />
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Welcome to the Community!
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Congratulations! Your subscription is now active. You have full access to all community features and exclusive content.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/directory">
                      Explore Family Directory
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/resources">
                      Browse Resources
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

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
                <Crown className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Premium Membership</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Join Our{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Elite Community
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Become a lifetime member of Maharashtra's most exclusive professional family network 
                for just ₹500 - no recurring fees, unlimited access.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Membership Benefits */}
              <div>
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl">
                  <CardHeader className="text-center pb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900">
                      Lifetime Membership
                    </CardTitle>
                    <div className="text-5xl font-bold text-gray-900 mt-4">₹500</div>
                    <div className="text-orange-600 font-semibold">One-time payment • No recurring fees</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 border border-orange-200">
                      <div className="flex items-center gap-2 text-orange-800 font-semibold">
                        <Gift className="h-5 w-5" />
                        Limited Time Offer - Save 80%!
                      </div>
                      <div className="text-orange-700 text-sm mt-1">
                        Regular price ₹2,500 • Offer valid until March 2024
                      </div>
                    </div>

                    <div className="space-y-4">
                      {memberBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{benefit.title}</div>
                            <div className="text-gray-600 text-sm">{benefit.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>Secure payment</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>500+ members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>4.9/5 rating</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Purchase Section */}
              <div>
                <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                      {isAuthenticated ? 'Complete Your Purchase' : 'Get Started Today'}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    {isAuthenticated ? (
                      user?.hasSubscription ? (
                        <div className="text-center py-8">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            You're Already a Member!
                          </h3>
                          <p className="text-gray-600 mb-6">
                            You have full access to all community features.
                          </p>
                          <Button 
                            asChild 
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl"
                          >
                            <Link href="/directory">
                              Explore Directory
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              Welcome, {user?.name}!
                            </h4>
                            <p className="text-gray-600">
                              Complete your membership to unlock all features
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-gray-900 mb-2">₹500</div>
                              <div className="text-orange-600 font-semibold mb-4">Lifetime Access</div>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>✓ Access to Family Directory</li>
                                <li>✓ Premium Resources</li>
                                <li>✓ Exclusive Events</li>
                                <li>✓ Community Support</li>
                              </ul>
                            </div>
                          </div>

                          <Button 
                            onClick={handlePurchase}
                            disabled={isProcessing}
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          >
                            {isProcessing ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Processing Payment...
                              </>
                            ) : (
                              <>
                                <CreditCard className="mr-2 h-5 w-5" />
                                Purchase Membership (₹500)
                              </>
                            )}
                          </Button>

                          <div className="text-center text-sm text-gray-500">
                            <div className="flex items-center justify-center gap-4">
                              <div className="flex items-center gap-1">
                                <Shield className="h-4 w-4" />
                                <span>Secure payment</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Check className="h-4 w-4" />
                                <span>Instant access</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="space-y-6">
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Create Your Account
                          </h4>
                          <p className="text-gray-600">
                            Join our community to get started
                          </p>
                        </div>

                        <div className="space-y-4">
                          <Button 
                            asChild 
                            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          >
                            <Link href="/register">
                              Create Account & Purchase
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>
                          
                          <Button 
                            asChild 
                            variant="outline" 
                            className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                          >
                            <Link href="/login">
                              Already have an account? Sign In
                            </Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 lg:p-12 border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Newsletter
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get weekly updates about upcoming events, new community features, and exclusive member benefits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border-orange-200 focus:border-orange-500"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                ✨ Join 2,000+ families already subscribed
              </p>
            </div>
          </div>
        </section>

        {/* Terms & Conditions Link */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <Link href="/privacy/terms" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                <FileText className="h-4 w-4" />
                Terms & Conditions
              </Link>
              <Link href="/privacy/policy" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                <Shield className="h-4 w-4" />
                Privacy Policy
              </Link>
              <Link href="/privacy/safety" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                <Heart className="h-4 w-4" />
                Safety Guidelines
              </Link>
              <Link href="/contact" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
                <Mail className="h-4 w-4" />
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}