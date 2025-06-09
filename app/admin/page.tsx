'use client';

import { useState } from 'react';
import { Users, Calendar, MessageSquare, FileText, Image, Settings, BarChart3, Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AdminHeader from '@/components/admin/admin-header';
import AdminSidebar from '@/components/admin/admin-sidebar';
import EventsManagement from '@/components/admin/events-management';
import ForumsManagement from '@/components/admin/forums-management';
import ContentManagement from '@/components/admin/content-management';
import GalleryManagement from '@/components/admin/gallery-management';
import BlogManagement from '@/components/admin/blog-management';
import ResourcesManagement from '@/components/admin/resources-management';
import UsersManagement from '@/components/admin/users-management';
import AnalyticsDashboard from '@/components/admin/analytics-dashboard';
import ProtectedRoute from '@/components/auth/protected-route';

function AdminDashboardContent() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const stats = [
    {
      title: 'Total Members',
      value: '524',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Events',
      value: '18',
      change: '+5%',
      icon: Calendar,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Forum Posts',
      value: '1,247',
      change: '+23%',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Gallery Items',
      value: '2,856',
      change: '+8%',
      icon: Image,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const recentActivity = [
    {
      type: 'event',
      title: 'New event created: Annual Family Gathering 2024',
      time: '2 hours ago',
      user: 'Admin'
    },
    {
      type: 'forum',
      title: 'New discussion in Parenting Tips forum',
      time: '4 hours ago',
      user: 'Priya Sharma'
    },
    {
      type: 'member',
      title: 'New member registration: Rajesh Patil',
      time: '6 hours ago',
      user: 'System'
    },
    {
      type: 'blog',
      title: 'Blog post published: Community Guidelines Update',
      time: '1 day ago',
      user: 'Admin'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'events':
        return <EventsManagement />;
      case 'forums':
        return <ForumsManagement />;
      case 'content':
        return <ContentManagement />;
      case 'gallery':
        return <GalleryManagement />;
      case 'blog':
        return <BlogManagement />;
      case 'resources':
        return <ResourcesManagement />;
      case 'users':
        return <UsersManagement />;
      case 'analytics':
        return <AnalyticsDashboard />;
      default:
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-orange-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button 
                    onClick={() => setActiveSection('events')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white h-20 flex flex-col items-center justify-center"
                  >
                    <Calendar className="h-6 w-6 mb-2" />
                    Create Event
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('forums')}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-20 flex flex-col items-center justify-center"
                  >
                    <MessageSquare className="h-6 w-6 mb-2" />
                    Manage Forums
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('blog')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-20 flex flex-col items-center justify-center"
                  >
                    <FileText className="h-6 w-6 mb-2" />
                    Write Blog Post
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('gallery')}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white h-20 flex flex-col items-center justify-center"
                  >
                    <Image className="h-6 w-6 mb-2" />
                    Upload Media
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-orange-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'event' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'forum' ? 'bg-purple-100 text-purple-600' :
                        activity.type === 'member' ? 'bg-green-100 text-green-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {activity.type === 'event' && <Calendar className="h-5 w-5" />}
                        {activity.type === 'forum' && <MessageSquare className="h-5 w-5" />}
                        {activity.type === 'member' && <Users className="h-5 w-5" />}
                        {activity.type === 'blog' && <FileText className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">by {activity.user} • {activity.time}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <AdminHeader />
      
      <div className="flex">
        <AdminSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute requireAdmin={true} requireSubscription={false}>
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}