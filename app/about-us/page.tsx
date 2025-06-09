import Image from 'next/image';
import Link from 'next/link';
import { Users, Heart, Award, Target, ArrowRight, CheckCircle, Star, Sparkles, Mail, Phone, Linkedin, MapPin, Calendar, Trophy, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AboutUsPage() {
    const values = [
        {
            icon: Heart,
            title: 'Community First',
            description: 'We believe in putting our Solapur community members at the center of everything we do.',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: Users,
            title: 'Cultural Bridge',
            description: 'Connecting our Solapur roots with our new life in Kolhapur through shared experiences.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Maintaining the highest standards in all our events and community interactions.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Target,
            title: 'Purpose Driven',
            description: 'Every initiative is designed to create meaningful impact for Solapur families in Kolhapur.',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const achievements = [
        { number: '500+', label: 'Solapur Families' },
        { number: '150+', label: 'Events Hosted' },
        { number: '15+', label: 'Years of Service' },
        { number: '98%', label: 'Satisfaction Rate' }
    ];

    const organizers = [
        {
            id: 1,
            name: 'Rajesh Patil',
            role: 'Community President',
            bio: 'Leading our community for over 8 years, Rajesh has been instrumental in organizing major events and building strong networks among Solapur families in Kolhapur.',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
            experience: '8+ years',
            specialization: 'Business Networking & Event Management',
            achievements: ['Founded Annual Family Gathering', 'Established Business Network', '500+ Families Connected'],
            contact: {
                email: 'rajesh.patil@karvirvasi.com',
                phone: '+91 98765 43210',
                linkedin: 'linkedin.com/in/rajeshpatil'
            },
            location: 'Kolhapur',
            memberSince: '2016'
        },
        {
            id: 2,
            name: 'Dr. Priya Sharma',
            role: 'Vice President & Education Head',
            bio: 'A dedicated educator and community leader, Dr. Priya focuses on youth development and educational initiatives for our community children.',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
            experience: '6+ years',
            specialization: 'Education & Youth Development',
            achievements: ['Youth Leadership Program', 'Educational Scholarships', 'Mentorship Network'],
            contact: {
                email: 'priya.sharma@karvirvasi.com',
                phone: '+91 98765 43211',
                linkedin: 'linkedin.com/in/priyasharma'
            },
            location: 'Kolhapur',
            memberSince: '2018'
        },
        {
            id: 3,
            name: 'Sunita Desai',
            role: 'Cultural Affairs Secretary',
            bio: 'Passionate about preserving our Maharashtra heritage, Sunita organizes cultural events and festivals that keep our traditions alive.',
            image: 'https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg',
            experience: '5+ years',
            specialization: 'Cultural Events & Heritage Preservation',
            achievements: ['Cultural Festival Series', 'Traditional Arts Workshop', 'Heritage Documentation'],
            contact: {
                email: 'sunita.desai@karvirvasi.com',
                phone: '+91 98765 43212',
                linkedin: 'linkedin.com/in/sunitadesai'
            },
            location: 'Kolhapur',
            memberSince: '2019'
        },
        {
            id: 4,
            name: 'Amit Joshi',
            role: 'Technology & Communications Lead',
            bio: 'Tech entrepreneur and community innovator, Amit manages our digital presence and develops technology solutions for better community engagement.',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
            experience: '4+ years',
            specialization: 'Technology & Digital Innovation',
            achievements: ['Community App Development', 'Digital Networking Platform', 'Online Event Management'],
            contact: {
                email: 'amit.joshi@karvirvasi.com',
                phone: '+91 98765 43213',
                linkedin: 'linkedin.com/in/amitjoshi'
            },
            location: 'Kolhapur',
            memberSince: '2020'
        },
        {
            id: 5,
            name: 'Kavita Bhosale',
            role: 'Women\'s Welfare & Family Coordinator',
            bio: 'Dedicated to women empowerment and family welfare, Kavita organizes programs focused on women\'s development and family support services.',
            image: 'https://images.pexels.com/photos/3184283/pexels-photo-3184283.jpeg',
            experience: '7+ years',
            specialization: 'Women Empowerment & Family Services',
            achievements: ['Women\'s Skill Development', 'Family Support Network', 'Health Awareness Campaigns'],
            contact: {
                email: 'kavita.bhosale@karvirvasi.com',
                phone: '+91 98765 43214',
                linkedin: 'linkedin.com/in/kavitabhosale'
            },
            location: 'Kolhapur',
            memberSince: '2017'
        },
        {
            id: 6,
            name: 'Santosh Kulkarni',
            role: 'Sports & Recreation Director',
            bio: 'Former state-level athlete, Santosh organizes sports tournaments and recreational activities that promote health and community bonding.',
            image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
            experience: '5+ years',
            specialization: 'Sports & Recreation Management',
            achievements: ['Annual Sports Tournament', 'Youth Fitness Programs', 'Community Recreation Center'],
            contact: {
                email: 'santosh.kulkarni@karvirvasi.com',
                phone: '+91 98765 43215',
                linkedin: 'linkedin.com/in/santoshkulkarni'
            },
            location: 'Kolhapur',
            memberSince: '2019'
        }
    ];

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
                <Heart className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Our Story</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Karvirvasi Solapurkar
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Building Kolhapur's strongest network for Solapur families through meaningful connections, 
                shared values, and mutual growth for over 15 years.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a thriving ecosystem where Solapur families living in Kolhapur can connect, 
                  collaborate, and grow together while preserving our rich cultural heritage and values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Foster meaningful connections among Solapur families</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Preserve and celebrate our Solapur cultural traditions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Create opportunities for family growth in Kolhapur</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                  alt="Solapur community gathering in Kolhapur"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

                {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape the culture of our Solapur community in Kolhapur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* Community Organizers Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-100 shadow-sm mb-6">
                <Crown className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Leadership Team</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Community Organizers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated leaders who drive our community forward and ensure every family feels welcomed and supported.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizers.map((organizer) => (
                <Card key={organizer.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={organizer.image}
                      alt={organizer.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {organizer.experience}
                      </div>
                    </div>
                    
                    {/* Member Since */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">Member since {organizer.memberSince}</div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{organizer.name}</h3>
                      <div className="text-orange-600 font-semibold mb-2">{organizer.role}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{organizer.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {organizer.bio}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Specialization</div>
                      <div className="text-sm text-gray-600">{organizer.specialization}</div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</div>
                      <div className="space-y-1">
                        {organizer.achievements.slice(0, 2).map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Trophy className="h-3 w-3 text-orange-500" />
                            <span className="text-xs text-gray-600">{achievement}</span>
                          </div>
                        ))}
                        {organizer.achievements.length > 2 && (
                          <div className="text-xs text-gray-500">+{organizer.achievements.length - 2} more</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center gap-1 mb-1">
                            <Mail className="h-3 w-3" />
                            <span className="text-xs">{organizer.contact.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            <span className="text-xs">{organizer.contact.phone}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

                {/* Achievements Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Journey in Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of Kolhapur's most trusted network for Solapur families and 
              start building meaningful connections today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button
                asChild 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership" className="flex items-center justify-center">
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    );
}