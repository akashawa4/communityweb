'use client';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { Button } from '@/components/ui/button';
import { 
  LogOut, 
  Edit3, 
  Calendar, 
  MessageCircle, 
  Users, 
  Shield, 
  Camera,
  Settings,
  FileText,
  Upload,
  CreditCard,
  HelpCircle,
  Clock,
  Eye,
  Lock,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

export default function MyProfilePage() {
  const [securityExpanded, setSecurityExpanded] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here - could be API call, localStorage clear, etc.
    console.log('User  logged out');
    // Optional: Redirect to home page or login page after logout
  };

  // Mock data - replace with actual user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    familyId: "KVR-2024-1234",
    role: "Member",
    profileImage: null, // URL to profile image or null for placeholder
    stats: {
      eventsAttended: 12,
      forumPosts: 8,
      referralsInvited: 3,
      membershipValid: "Dec 2025"
    },
    currentPlan: "Premium",
    renewalDate: "December 15, 2025",
    recentActivity: [
      { id: 1, title: "You attended Solapur Families Meet 2025", timestamp: "2 days ago", type: "event" },
      { id: 2, title: "You replied to Topic: Karvirvasi Wedding Traditions", timestamp: "1 week ago", type: "forum" },
      { id: 3, title: "You uploaded 5 family photos", timestamp: "2 weeks ago", type: "photo" }
    ],
    emailVerified: true,
    twoFactorEnabled: false
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50"> {/* Existing profile content wrapper */}
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl"> {/* Existing profile content container */}
          
          {/* Banner Section - Profile Summary */}
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Left Column - Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {userData.profileImage ? (
                    <img src={userData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-4xl font-bold text-gray-400">
                      {userData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Right Column - Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{userData.name}</h1>
                <p className="text-lg text-gray-600 mb-3">ID: {userData.familyId}</p>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-200">
                    {userData.role}
                  </span>
                  <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <Calendar className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{userData.stats.eventsAttended}</div>
              <div className="text-sm text-gray-600">Events Attended</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                <MessageCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{userData.stats.forumPosts}</div>
              <div className="text-sm text-gray-600">Forum Posts</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{userData.stats.referralsInvited}</div>
              <div className="text-sm text-gray-600">Referrals Invited</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{userData.stats.membershipValid}</div>
              <div className="text-sm text-gray-600">Membership Valid</div>
            </div>
          </div>

          {/* Quick Access Navigation Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Edit3, label: "Edit My Info", color: "bg-blue-50 text-blue-600" },
              { icon: Calendar, label: "My Events", color: "bg-green-50 text-green-600" },
              { icon: MessageCircle, label: "My Forum Posts", color: "bg-purple-50 text-purple-600" },
              { icon: Upload, label: "Upload Family Photos", color: "bg-orange-50 text-orange-600" },
              { icon: CreditCard, label: "My Subscriptions", color: "bg-indigo-50 text-indigo-600" },
              { icon: HelpCircle, label: "Support Requests", color: "bg-red-50 text-red-600" }
            ].map((item, index) => (
              <button 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-red-500 border border-transparent group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity Feed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {userData.recentActivity.map((activity) => (
                    <article key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          {activity.type === 'event' && <Calendar className="w-4 h-4 text-red-600" />}
                          {activity.type === 'forum' && <MessageCircle className="w-4 h-4 text-red-600" />}
                          {activity.type === 'photo' && <Upload className="w-4 h-4 text-red-600" />}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 font-medium">{activity.title}</p>
                        <time className="text-sm text-gray-500">{activity.timestamp}</time>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Subscription Plan Status */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Current Plan</div>
                    <div className="text-xl font-bold text-gray-900">{userData.currentPlan}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Renewal Date</div>
                    <div className="font-medium text-gray-900">{userData.renewalDate}</div>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Manage Plan
                  </Button>
                </div>
              </div>

              {/* Security & Settings */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <button 
                  onClick={() => setSecurityExpanded(!securityExpanded)}
                  className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 mb-4"
                >
                  Security & Settings
                  {securityExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                
                {securityExpanded && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Email Verification</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        userData.emailVerified ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {userData.emailVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Two-Factor Auth</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        userData.twoFactorEnabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {userData.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <Lock className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="text-center mt-12">
            <Button
              onClick={handleLogout}
              variant="outline"
              size="lg"
              className="border-2 border-red-500 text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
