'use client';

import { BarChart3, TrendingUp, Users, Calendar, MessageSquare, Eye, Download, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsDashboard() {
  const stats = [
    {
      title: 'Total Page Views',
      value: '45,231',
      change: '+12.5%',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: '+8.2%',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Event Registrations',
      value: '1,234',
      change: '+15.3%',
      icon: Calendar,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Forum Engagement',
      value: '89.2%',
      change: '+5.7%',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const topContent = [
    {
      title: 'Annual Family Gathering 2024',
      type: 'Event',
      views: 2847,
      engagement: '94%'
    },
    {
      title: 'Professional Networking Tips',
      type: 'Blog Post',
      views: 1923,
      engagement: '87%'
    },
    {
      title: 'Cultural Heritage Guide',
      type: 'Resource',
      views: 1654,
      engagement: '91%'
    },
    {
      title: 'Parenting Discussion Forum',
      type: 'Forum',
      views: 1432,
      engagement: '89%'
    }
  ];

  const recentActivity = [
    {
      action: 'New member registration',
      user: 'Priya Sharma',
      time: '2 minutes ago',
      type: 'user'
    },
    {
      action: 'Event registration',
      user: 'Rajesh Patil',
      time: '5 minutes ago',
      type: 'event'
    },
    {
      action: 'Forum post created',
      user: 'Sunita Desai',
      time: '12 minutes ago',
      type: 'forum'
    },
    {
      action: 'Resource downloaded',
      user: 'Amit Joshi',
      time: '18 minutes ago',
      type: 'resource'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <TrendingUp className="h-4 w-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Key Metrics */}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Content */}
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-orange-500" />
              Top Performing Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topContent.map((content, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{content.title}</h4>
                    <p className="text-sm text-gray-600">{content.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{content.views} views</div>
                    <div className="text-sm text-green-600">{content.engagement} engagement</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-500" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'user' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'event' ? 'bg-green-100 text-green-600' :
                    activity.type === 'forum' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {activity.type === 'user' && <Users className="h-4 w-4" />}
                    {activity.type === 'event' && <Calendar className="h-4 w-4" />}
                    {activity.type === 'forum' && <MessageSquare className="h-4 w-4" />}
                    {activity.type === 'resource' && <Download className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">by {activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Sources */}
      <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">65%</div>
              <div className="text-gray-600">Direct Traffic</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
              <div className="text-gray-600">Social Media</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10%</div>
              <div className="text-gray-600">Search Engines</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Engagement */}
      <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
        <CardHeader>
          <CardTitle>User Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.2</div>
              <div className="text-gray-600 text-sm">Avg. Session Duration (min)</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">78%</div>
              <div className="text-gray-600 text-sm">Return Visitor Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <div className="text-gray-600 text-sm">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3.8</div>
              <div className="text-gray-600 text-sm">Avg. Posts per User</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}