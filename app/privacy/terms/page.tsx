import Link from 'next/link';
import { FileText, ArrowLeft, Calendar, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function TermsPage() {
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
                <Scale className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Legal Agreement</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Terms & Conditions
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

        {/* Terms Content */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    By accessing and using the Karvirvasi Solapurkar community platform ("Service"), 
                    you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Membership and Registration</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Eligibility</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To become a member, you must:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Be at least 18 years of age</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Have a connection to Maharashtra or its culture</li>
                    <li>Agree to maintain professional and respectful conduct</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Account Responsibility</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account. You must notify us immediately 
                    of any unauthorized use of your account.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Membership Fees and Payment</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Lifetime Membership</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our current membership offering is a lifetime membership for ₹500. This includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Unlimited access to community features</li>
                    <li>Participation in all events and activities</li>
                    <li>Access to member directory and networking tools</li>
                    <li>Educational resources and workshops</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Payment Terms</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Payment is due at the time of registration. All fees are non-refundable except 
                    as required by law. We reserve the right to change membership fees with 30 days 
                    notice to existing members.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Community Guidelines and Conduct</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Acceptable Use</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree to use our services only for lawful purposes and in accordance with 
                    community guidelines. Prohibited activities include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Harassment, bullying, or discriminatory behavior</li>
                    <li>Sharing inappropriate or offensive content</li>
                    <li>Spamming or unauthorized commercial activities</li>
                    <li>Violating others' privacy or intellectual property rights</li>
                    <li>Impersonating others or providing false information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Content Standards</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    All content shared within the community must be family-friendly, respectful, 
                    and appropriate for all ages. We reserve the right to remove content that 
                    violates these standards.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your privacy is important to us. Please review our Privacy Policy, which also 
                    governs your use of the Service, to understand our practices regarding the 
                    collection and use of your information.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Our Content</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Service and its original content, features, and functionality are owned by 
                    Karvirvasi Solapurkar and are protected by international copyright, trademark, 
                    patent, trade secret, and other intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 User Content</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    By posting content to our platform, you grant us a non-exclusive, royalty-free 
                    license to use, modify, and display such content for the purpose of providing 
                    and improving our services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Events and Activities</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Event Participation</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Participation in community events is subject to availability and additional terms 
                    that may apply to specific events. We reserve the right to refuse participation 
                    or remove participants who violate community guidelines.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Event Liability</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You participate in events at your own risk. We are not liable for any injuries, 
                    damages, or losses that may occur during event participation.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Termination by You</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You may terminate your membership at any time by contacting us. Upon termination, 
                    your access to the Service will be discontinued, but your membership fee will not 
                    be refunded.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Termination by Us</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We may terminate or suspend your membership immediately, without prior notice, 
                    for conduct that we believe violates these Terms or is harmful to other members 
                    or the community.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Availability</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We strive to provide continuous service but cannot guarantee uninterrupted access. 
                    The Service is provided "as is" without warranties of any kind, either express or implied.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Limitation of Liability</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    In no event shall Karvirvasi Solapurkar be liable for any indirect, incidental, 
                    special, consequential, or punitive damages, including without limitation, loss of 
                    profits, data, use, goodwill, or other intangible losses.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These Terms shall be interpreted and governed by the laws of India. Any disputes 
                    arising from these Terms or your use of the Service shall be subject to the 
                    jurisdiction of the courts in Mumbai, Maharashtra.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We reserve the right to modify these Terms at any time. We will notify members of 
                    any material changes by email or through the Service. Your continued use of the 
                    Service after such modifications constitutes acceptance of the updated Terms.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> legal@maharashtra-families.com
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
                      By using our Service, you acknowledge that you have read and understood these 
                      Terms and Conditions and agree to be bound by them.
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