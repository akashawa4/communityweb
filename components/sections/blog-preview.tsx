import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock, BookOpen, TrendingUp, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Strong Professional Networks in Maharashtra',
      excerpt: 'Discover the key strategies for creating meaningful professional connections that benefit both your career and family life.',
      author: 'Rashmi Kulkarni',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Professional Development',
      tags: ['Networking', 'Career Growth', 'Business'],
      views: 1250,
      likes: 89,
      trending: true
    },
    {
      id: 2,
      title: 'Celebrating Festivals as a Community: Traditions That Unite Us',
      excerpt: 'How our community comes together to celebrate traditional festivals while creating new memories for the next generation.',
      author: 'Santosh Deshmukh',
      date: '2024-01-10',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'Culture & Traditions',
      tags: ['Festivals', 'Community', 'Traditions'],
      views: 980,
      likes: 67,
      trending: false
    },
    {
      id: 3,
      title: 'Youth Leadership Workshop: Empowering the Next Generation',
      excerpt: 'Interactive sessions with industry experts helping young minds develop leadership skills and career guidance.',
      author: 'Dr. Meera Joshi',
      date: '2024-01-08',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg',
      category: 'Education',
      tags: ['Youth', 'Leadership', 'Education'],
      views: 750,
      likes: 45,
      trending: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Professional Development':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Culture & Traditions':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Education':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-orange-100 text-orange-700 border-orange-200';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-amber-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
            <BookOpen className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Community Insights</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest from Our{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Community Blog
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with insights, stories, and tips from our community members. 
            Learn from shared experiences and discover new opportunities.
          </p>
        </div>
        
        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                
                {/* Trending Badge */}
                {blogPosts[0].trending && (
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      <TrendingUp className="h-4 w-4" />
                      <span>Trending</span>
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(blogPosts[0].category)} backdrop-blur-sm`}>
                    {blogPosts[0].category}
                  </span>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 flex gap-4">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <Eye className="h-3 w-3" />
                    <span>{blogPosts[0].views}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <Heart className="h-3 w-3" />
                    <span>{blogPosts[0].likes}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={blogPosts[0].date}>
                      {formatDate(blogPosts[0].date)}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {blogPosts[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-fit"
                >
                  <Link href={`/blog/${blogPosts[0].id}`} className="flex items-center">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article 
              key={post.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)} backdrop-blur-sm`}>
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Stats */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        <Heart className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 font-semibold group"
                  >
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>
        
        {/* Blog Stats */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600 font-medium">Articles Published</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">25K+</div>
              <div className="text-sm text-gray-600 font-medium">Monthly Readers</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5K+</div>
              <div className="text-sm text-gray-600 font-medium">Article Likes</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600 font-medium">Expert Contributors</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Link href="/blog" className="flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              Subscribe to Newsletter
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm">
            ✨ Get weekly insights delivered to your inbox
          </p>
        </div>
      </div>
    </section>
  );
}