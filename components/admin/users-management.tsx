'use client';

import { useState } from 'react';
import { Users, Search, Filter, Edit, Trash2, Eye, Mail, Phone, MapPin, Calendar, Crown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function UsersManagement() {
  const [activeTab, setActiveTab] = useState('members');
  const [searchQuery, setSearchQuery] = useState('');

  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      city: 'Mumbai',
      profession: 'Software Engineer',
      memberSince: '2019-03-15',
      status: 'Active',
      subscription: 'Lifetime',
      lastLogin: '2024-01-20'
    },
    {
      id: 2,
      name: 'Rajesh Patil',
      email: 'rajesh.patil@email.com',
      phone: '+91 98765 43211',
      city: 'Pune',
      profession: 'Business Owner',
      memberSince: '2020-06-22',
      status: 'Active',
      subscription: 'Lifetime',
      lastLogin: '2024-01-19'
    },
    {
      id: 3,
      name: 'Sunita Desai',
      email: 'sunita.desai@email.com',
      phone: '+91 98765 43212',
      city: 'Nashik',
      profession: 'Doctor',
      memberSince: '2021-01-10',
      status: 'Inactive',
      subscription: 'None',
      lastLogin: '2024-01-10'
    }
  ]);

  const [moderators, setModerators] = useState([
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@community.com',
      role: 'Super Admin',
      permissions: ['All'],
      lastActive: '2024-01-20'
    },
    {
      id: 2,
      name: 'Dr. Meera Kulkarni',
      email: 'meera.kulkarni@email.com',
      role: 'Forum Moderator',
      permissions: ['Forums', 'Content'],
      lastActive: '2024-01-19'
    }
  ]);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteMember = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const toggleMemberStatus = (id: number) => {
    setMembers(members.map(member =>
      member.id === id
        ? { ...member, status: member.status === 'Active' ? 'Inactive' : 'Active' }
        : member
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Members</p>
                <p className="text-3xl font-bold text-gray-900">{members.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Members</p>
                <p className="text-3xl font-bold text-gray-900">
                  {members.filter(m => m.status === 'Active').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Subscribed</p>
                <p className="text-3xl font-bold text-gray-900">
                  {members.filter(m => m.subscription === 'Lifetime').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New This Month</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('members')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'members'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Members
        </button>
        <button
          onClick={() => setActiveTab('moderators')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'moderators'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Moderators
        </button>
        <button
          onClick={() => setActiveTab('permissions')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'permissions'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Permissions
        </button>
      </div>

      {activeTab === 'members' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Community Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {member.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {member.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {member.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{member.profession}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">Member since {member.memberSince}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          member.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {member.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          member.subscription === 'Lifetime' 
                            ? 'bg-orange-100 text-orange-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {member.subscription}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Last login: {member.lastLogin}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toggleMemberStatus(member.id)}
                        className={member.status === 'Active' ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
                      >
                        {member.status === 'Active' ? 'Suspend' : 'Activate'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteMember(member.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'moderators' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Moderators & Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {moderators.map((moderator) => (
                <div key={moderator.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {moderator.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{moderator.name}</h4>
                      <p className="text-sm text-gray-600">{moderator.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                          {moderator.role}
                        </span>
                        <span className="text-xs text-gray-500">
                          Last active: {moderator.lastActive}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Permissions:</div>
                      <div className="flex gap-1 mt-1">
                        {moderator.permissions.map((permission, index) => (
                          <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                            {permission}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'permissions' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <Shield className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Permission management coming soon</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}