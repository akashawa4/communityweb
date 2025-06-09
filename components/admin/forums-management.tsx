'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, MessageSquare, Users, Pin, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ForumsManagement() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeTab, setActiveTab] = useState('categories');

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Health Education',
      description: 'Discussions about health, wellness, and medical advice',
      topics: 45,
      posts: 234,
      moderators: ['Dr. Priya Sharma'],
      isPrivate: false
    },
    {
      id: 2,
      name: 'Business & Entrepreneurship',
      description: 'Business opportunities, networking, and entrepreneurial advice',
      topics: 67,
      posts: 412,
      moderators: ['Rajesh Patil', 'Amit Joshi'],
      isPrivate: false
    },
    {
      id: 3,
      name: 'Entertainment & Culture',
      description: 'Movies, music, cultural events, and entertainment discussions',
      topics: 89,
      posts: 567,
      moderators: ['Sunita Desai'],
      isPrivate: false
    },
    {
      id: 4,
      name: 'Legal Assistance',
      description: 'Legal advice, documentation help, and legal resources',
      topics: 23,
      posts: 156,
      moderators: ['Adv. Meera Kulkarni'],
      isPrivate: true
    },
    {
      id: 5,
      name: 'Parenting Tips',
      description: 'Advice and tips for raising children and family life',
      topics: 78,
      posts: 445,
      moderators: ['Kavita Bhosale'],
      isPrivate: false
    }
  ]);

  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: 'Best schools in Kolhapur for children',
      category: 'Parenting Tips',
      author: 'Priya Sharma',
      replies: 23,
      views: 156,
      lastActivity: '2 hours ago',
      isPinned: true,
      isLocked: false
    },
    {
      id: 2,
      title: 'Starting a small business in Maharashtra',
      category: 'Business & Entrepreneurship',
      author: 'Rajesh Patil',
      replies: 45,
      views: 289,
      lastActivity: '4 hours ago',
      isPinned: false,
      isLocked: false
    },
    {
      id: 3,
      title: 'Traditional Maharashtrian recipes',
      category: 'Entertainment & Culture',
      author: 'Sunita Desai',
      replies: 67,
      views: 234,
      lastActivity: '6 hours ago',
      isPinned: false,
      isLocked: false
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPrivate: false,
    moderators: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory = {
      id: categories.length + 1,
      ...formData,
      topics: 0,
      posts: 0,
      moderators: formData.moderators.split(',').map(m => m.trim()).filter(m => m)
    };
    setCategories([...categories, newCategory]);
    setFormData({ name: '', description: '', isPrivate: false, moderators: '' });
    setShowCreateForm(false);
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const togglePin = (id: number) => {
    setDiscussions(discussions.map(d => 
      d.id === id ? { ...d, isPinned: !d.isPinned } : d
    ));
  };

  const toggleLock = (id: number) => {
    setDiscussions(discussions.map(d => 
      d.id === id ? { ...d, isLocked: !d.isLocked } : d
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Discussion Forums Management</h2>
        <Button 
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Category
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'categories'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveTab('discussions')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'discussions'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Recent Discussions
        </button>
        <button
          onClick={() => setActiveTab('moderation')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'moderation'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Moderation
        </button>
      </div>

      {showCreateForm && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Create New Forum Category</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Category Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>
              <div>
                <Label htmlFor="moderators">Moderators (comma-separated)</Label>
                <Input
                  id="moderators"
                  name="moderators"
                  value={formData.moderators}
                  onChange={handleInputChange}
                  placeholder="John Doe, Jane Smith"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isPrivate"
                  name="isPrivate"
                  checked={formData.isPrivate}
                  onChange={handleInputChange}
                  className="rounded border-gray-300"
                />
                <Label htmlFor="isPrivate">Private Category (Members only)</Label>
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Create Category
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {activeTab === 'categories' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-orange-500" />
                    {category.name}
                    {category.isPrivate && <Lock className="h-4 w-4 text-gray-500" />}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">{category.topics}</span>
                      <span className="text-gray-600"> topics</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{category.posts}</span>
                      <span className="text-gray-600"> posts</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Moderators:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.moderators.map((mod, index) => (
                        <span key={index} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => deleteCategory(category.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'discussions' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Recent Discussions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {discussion.isPinned && <Pin className="h-4 w-4 text-orange-500" />}
                      {discussion.isLocked && <Lock className="h-4 w-4 text-gray-500" />}
                      <h4 className="font-medium text-gray-900">{discussion.title}</h4>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>by {discussion.author}</span>
                      <span>in {discussion.category}</span>
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => togglePin(discussion.id)}
                      className={discussion.isPinned ? 'text-orange-600' : ''}
                    >
                      <Pin className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleLock(discussion.id)}
                      className={discussion.isLocked ? 'text-red-600' : ''}
                    >
                      <Lock className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'moderation' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Moderation Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No items pending moderation</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}