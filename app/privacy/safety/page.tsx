import Link from 'next/link';
import { Heart, ArrowLeft, Shield, Users, AlertTriangle, CheckCircle, Eye, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function SafetyGuidelinesPage() {
  const safetyPrinciples = [
    {
      icon: Heart,
      title: 'Respect and Kindness',
      description: 'Treat every community member with dignity, respect, and kindness.',
      guidelines: [
        'Use polite and professional language in all communications',
        'Be considerate of different viewpoints and backgrounds',
        'Show empathy and understanding in discussions',
        'Celebrate diversity within our community'
      ]
    },
    {
      icon: Shield,
      title: 'Zero Tolerance for Harassment',
      description: 'We maintain a strict no-harassment policy to ensure everyone feels safe.',
      guidelines: [
        'No bullying, intimidation, or threatening behavior',
        'Respect personal boundaries and privacy',
        'No discriminatory language or behavior',
        'Report any harassment immediately to moderators'
      ]
    },
    {
      icon: Users,
      title: 'Family-Friendly Environment',
      description: 'Keep all content and interactions appropriate for families and children.',
      guidelines: [
        'Share only family-appropriate content and images',
        'Use language suitable for all ages',
        'Avoid controversial or sensitive topics in public forums',
        'Consider the impact of your words on younger community members'
      ]
    },
    {
      icon: Lock,
      title: 'Privacy Protection',
      description: 'Respect and protect the privacy of all community members.',
      guidelines: [
        'Do not share others\' personal information without consent',
        'Respect privacy settings and boundaries',
        'Ask permission before posting photos of others',
        'Keep private conversations confidential'
      ]
    }
  ];

  const reportingProcess = [
    {
      step: 1,
      title: 'Identify the Issue',
      description: 'Recognize behavior that violates our community guidelines'
    },
    {
      step: 2,
      title: 'Document the Incident',
      description: 'Take screenshots or note details of the inappropriate behavior'
    },
    {
      step: 3,
      title: 'Report to Moderators',
      description: 'Contact our moderation team through the reporting system'
    },
    {
      step: 4,
      title: 'Follow Up',
      description: 'Our team will investigate and take appropriate action within 24 hours'
    }
  ];

  const safetyTips = [
    {
      icon: Eye,
      title: 'Be Mindful of What You Share',
      tip: 'Think twice before sharing personal information, photos, or details about your family online.'
    },
    {
      icon: Users,
      title: 'Meet in Public Spaces',
      tip: 'When meeting community members in person, choose public locations and inform someone you trust.'
    },
    {
      icon: Shield,
      title: 'Trust Your Instincts',
      tip: 'If something feels wrong or makes you uncomfortable, trust your instincts and seek help.'
    },
    {
      icon: AlertTriangle,
      title: 'Report Suspicious Activity',
      tip: 'Report any suspicious behavior, inappropriate content, or safety concerns immediately.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Header */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <Button asChild variant="outline" className="mb-6">
                <Link href="/privacy" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Privacy & Safety
                </Link>
              </Button>
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
                <Heart className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Community Safety</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Safety Guidelines
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive safety guidelines help maintain a secure, respectful, and 
                welcoming environment for all families in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Principles */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Our Safety Principles
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                These core principles guide our community interactions and help create a safe space for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {safetyPrinciples.map((principle, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <principle.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {principle.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {principle.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {guideline}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting Process */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Report Safety Concerns
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                If you encounter any behavior that violates our guidelines, please follow this process to report it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {reportingProcess.map((process, index) => (
                <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Emergency Contact
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    For urgent safety concerns or emergencies, contact us immediately:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-900 font-semibold">
                      Emergency Hotline: +91 98765 43210
                    </p>
                    <p className="text-gray-900 font-semibold">
                      Email: safety@maharashtra-families.com
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Personal Safety Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these practical tips to stay safe while participating in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {safetyTips.map((tip, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <tip.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {tip.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {tip.tip}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Commitment */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Commitment to Your Safety
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to maintaining a safe, inclusive, and respectful community where 
              every family can thrive and build meaningful connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  Report a Safety Concern
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership">
                  Join Our Safe Community
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