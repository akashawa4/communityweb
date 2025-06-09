'use client';

import Link from 'next/link';
import { Users, ArrowUp, Mail, Phone, MapPin, Heart, Sparkles, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const navigationLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Events', href: '/events' },
    { name: 'Directory', href: '/directory' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'from-pink-500 to-purple-600' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'from-sky-400 to-blue-500' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 border-t border-gray-100 overflow-hidden">
      {/* Modern Background Effects - Aligned with website */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-5">
              {/* Logo & Brand */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    Karvirvasi Solapurkar
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Solapur Community in Kolhapur</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Info - Modern Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">+91 98765 43210</div>
                    <div className="text-gray-600 text-sm">Call us anytime</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">info@solapur-kolhapur.com</div>
                    <div className="text-gray-600 text-sm">Get in touch</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-100 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">Kolhapur, Maharashtra</div>
                    <div className="text-gray-600 text-sm">Serving Solapur families</div>
                  </div>
                </div>
              </div>
              
              
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-orange-500" />
                Quick Links
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Media Section */}
            <div className="lg:col-span-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-orange-500" />
                  Stay Connected
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-900 font-medium text-sm">{social.name}</div>
                          <div className="text-gray-500 text-xs">Follow us</div>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Simplified */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <span>© 2025 Karvirvasi Solapurkar</span>
              <Link href="/privacy" className="hover:text-orange-600 transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-orange-600 transition-colors duration-200">
                Terms
              </Link>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>500+ Solapur Families in Kolhapur</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-all duration-200 group"
                aria-label="Back to top"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-200 group-hover:scale-110 border border-orange-100">
                  <ArrowUp className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}