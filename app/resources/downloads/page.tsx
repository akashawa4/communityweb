'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import Image from 'next/image';
import Link from 'next/link';
import { Download, FileText, Video, Image as ImageIcon, ArrowLeft, Calendar, Eye, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

function DownloadsContent() {
  const downloadCategories = [
    { name: 'All', count: 24 },
    { name: 'Documents', count: 12 },
    { name: 'Videos', count: 6 },
    { name: 'Images', count: 4 },
    { name: 'Templates', count: 2 }
  ];

  const downloads = [
    {
      id: 1,
      title: 'Maharashtra Cultural Heritage Guide',
      description: 'Comprehensive guide to Maharashtra\'s rich cultural traditions, festivals, and customs.',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1250,
      rating: 4.8,
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'Documents',
      icon: FileText,
      featured: true,
      downloadUrl: '/resources/downloads/maharashtra-cultural-heritage-guide.pdf'
    },
    {
      id: 2,
      title: 'Traditional Recipes Collection',
      description: 'Authentic Maharashtra recipes passed down through generations.',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 890,
      rating: 4.9,
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      category: 'Documents',
      icon: FileText,
      featured: false,
      downloadUrl: '/resources/downloads/traditional-recipes-collection.pdf'
    },
    {
      id: 3,
      title: 'Community Event Planning Template',
      description: 'Professional template for organizing community events and gatherings.',
      type: 'DOCX',
      size: '0.5 MB',
      downloads: 650,
      rating: 4.7,
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Templates',
      icon: FileText,
      featured: false,
      downloadUrl: '/resources/downloads/event-planning-template.docx'
    },
    {
      id: 4,
      title: 'Marathi Language Learning Video Series',
      description: 'Complete video course for learning basic Marathi conversation.',
      type: 'MP4',
      size: '150 MB',
      downloads: 420,
      rating: 4.6,
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      category: 'Videos',
      icon: Video,
      featured: true,
      downloadUrl: '/resources/downloads/marathi-language-basics.zip'
    },
    {
      id: 5,
      title: 'Community Photo Pack 2024',
      description: 'High-resolution photos from recent community events and gatherings.',
      type: 'ZIP',
      size: '45 MB',
      downloads: 320,
      rating: 4.5,
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      category: 'Images',
      icon: ImageIcon,
      featured: false,
      downloadUrl: '/resources/downloads/community-photos-2024.zip'
    },
    {
      id: 6,
      title: 'Business Networking Presentation',
      description: 'Professional presentation template for business networking events.',
      type: 'PPTX',
      size: '3.2 MB',
      downloads: 280,
      rating: 4.4,
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Templates',
      icon: FileText,
      featured: false,
      downloadUrl: '/resources/downloads/networking-presentation.pptx'
    },
    {
      id: 7,
      title: 'Family Financial Planning Worksheet',
      description: 'Comprehensive worksheet to help families plan their finances effectively.',
      type: 'XLSX',
      size: '0.8 MB',
      downloads: 540,
      rating: 4.6,
      date: '2024-01-12',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Templates',
      icon: FileText,
      featured: false,
      downloadUrl: '/resources/downloads/financial-planning-worksheet.xlsx'
    },
    {
      id: 8,
      title: 'Child Development Milestones Tracker',
      description: 'Interactive guide to track your child\'s developmental progress.',
      type: 'PDF',
      size: '1.2 MB',
      downloads: 780,
      rating: 4.8,
      date: '2024-01-14',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      category: 'Documents',
      icon: FileText,
      featured: true,
      downloadUrl: '/resources/downloads/child-development-tracker.pdf'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'DOCX':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'MP4':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'ZIP':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'PPTX':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'XLSX':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleDownload = (url: string, title: string, type: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = title.toLowerCase().replace(/\s+/g, '-') + '.' + type.toLowerCase();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert(`Downloading: ${title}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Header */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <Button asChild variant="outline" className="mb-6">
                <Link href="/resources" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
                <Download className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Resource Library</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Download{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Access our collection of educational materials, templates, guides, and multimedia content 
                designed to support your family and professional growth.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search resources..."
                    className="pl-10 bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-500"
                  />
                </div>
                <Button variant="outline" className="border-orange-200 text-gray-700 hover:bg-orange-50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {downloadCategories.map((category, index) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                      : 'bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200'
                  } hover:scale-105`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {downloads.map((download) => (
                <Card key={download.id} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 ${download.featured ? 'ring-2 ring-orange-200' : ''}`}>
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={download.image}
                        alt={download.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(download.type)} backdrop-blur-sm`}>
                          {download.type}
                        </span>
                      </div>
                      
                      {/* Featured Badge */}
                      {download.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                      
                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 flex gap-3">
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          <Download className="h-3 w-3" />
                          <span>{download.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{download.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(download.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{download.size}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {download.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {download.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <download.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-xs text-gray-500">{download.category}</span>
                      </div>
                      
                      <Button 
                        onClick={() => handleDownload(download.downloadUrl, download.title, download.type)}
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Resource Library Stats
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24</div>
                <div className="text-gray-600 font-medium">Total Resources</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">5.2K</div>
                <div className="text-gray-600 font-medium">Total Downloads</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.7</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">15K</div>
                <div className="text-gray-600 font-medium">Page Views</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need More Resources?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community to access exclusive content and contribute your own resources 
              to help other families grow and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership">
                  Join Community
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Request Resource</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function DownloadsPage() {
  return (
    <ProtectedRoute requireSubscription={true}>
      <DownloadsContent />
    </ProtectedRoute>
  );
}