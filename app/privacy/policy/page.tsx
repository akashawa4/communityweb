import Link from 'next/link';
import { Shield, ArrowLeft, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
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
                <Shield className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Legal Document</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Privacy Policy
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: January 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span>Version 2.1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Karvirvasi Solapurkar ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you use our community platform and services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Name, email address, and phone number</li>
                    <li>Professional information and family details</li>
                    <li>Profile photos and biographical information</li>
                    <li>Event registration and participation data</li>
                    <li>Communication preferences and feedback</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you use our services, we automatically collect:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Device information and IP address</li>
                    <li>Browser type and operating system</li>
                    <li>Usage patterns and interaction data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Provide and maintain our community services</li>
                    <li>Process membership registrations and payments</li>
                    <li>Organize and manage community events</li>
                    <li>Send important updates and newsletters</li>
                    <li>Improve our platform and user experience</li>
                    <li>Ensure community safety and prevent fraud</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>With other community members (limited profile information only)</li>
                    <li>With service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In case of business transfer or merger</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or 
                    destruction. However, no method of transmission over the internet is 100% secure.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Control your privacy settings</li>
                    <li>Request a copy of your data</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We use cookies and similar technologies to enhance your experience, analyze usage 
                    patterns, and provide personalized content. You can control cookie settings through 
                    your browser preferences.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our services are designed for families, but we do not knowingly collect personal 
                    information from children under 13 without parental consent. If you believe we have 
                    collected such information, please contact us immediately.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your information may be transferred to and processed in countries other than your 
                    country of residence. We ensure appropriate safeguards are in place to protect your 
                    information during such transfers.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    material changes by posting the new policy on our website and updating the 
                    "Last Updated" date.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> privacy@maharashtra-families.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> Mumbai, Maharashtra, India
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <p className="text-sm text-gray-500 text-center">
                      This Privacy Policy is effective as of January 15, 2024, and will remain in effect 
                      except with respect to any changes in its provisions in the future.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                <Link href="/contact">
                  Have Questions? Contact Us
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