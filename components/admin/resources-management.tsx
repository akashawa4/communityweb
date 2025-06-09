'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, BookOpen, Download, Upload, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ResourcesManagement() {
  const [activeTab, setActiveTab] = useState('resources');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Maharashtra Cultural Heritage Guide',
      description: 'Comprehensive guide to Maharashtra\'s rich cultural traditions',
      type: 'PDF',
      category: 'Culture',
      size: '2.5 MB',
      downloads: 1250,
      uploadDate: '2024-01-15',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Traditional Recipes Collection',
      description: 'Authentic Maharashtra recipes passed down through generations',
      type: 'PDF',
      category: 'Culture',
      size: '1.8 MB',
      downloads: 890,
      uploadDate: '2024-01-10',
      status: 'Published'
    },
    {
      id: 3,
      title: 'Business Networking Guide',
      description: 'Professional networking strategies for community members',
      type: 'PDF',
      category: 'Business',
      size: '1.2 MB',
      downloads: 567,
      uploadDate: '2024-01-08',
      status: 'Draft'
    }
  ]);

  const [workshops, setWorkshops] = useState([
    {
      id: 1,
      title: 'Financial Literacy for Families',
      instructor: 'CA Rajesh Sharma',
      date: '2024-02-15',
      duration: '2 hours',
      maxParticipants: 100,
      registered: 45,
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Digital Parenting Workshop',
      instructor: 'Dr. Priya Kulkarni',
      date: '2024-02-22',
      duration: '1.5 hours',
      maxParticipants: 50,
      registered: 32,
      status: 'Upcoming'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Culture',
    type: 'PDF',
    tags: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newResource = {
      id: resources.length + 1,
      ...formData,
      size: '1.0 MB',
      downloads: 0,
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'Draft'
    };
    setResources([...resources, newResource]);
    setFormData({ title: '', description: '', category: 'Culture', type: 'PDF', tags: '' });
    setShowCreateForm(false);
  };

  const deleteResource = (id: number) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Resources & Learning Management</h2>
        <Button 
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Resource
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('resources')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'resources'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Resources
        </button>
        <button
          onClick={() => setActiveTab('workshops')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'workshops'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Workshops
        </button>
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
      </div>

      {showCreateForm && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Add New Resource</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Resource Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Culture">Culture</option>
                    <option value="Business">Business</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Legal">Legal</option>
                    <option value="Technology">Technology</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="type">File Type</Label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="PDF">PDF</option>
                    <option value="DOC">DOC</option>
                    <option value="PPT">PPT</option>
                    <option value="VIDEO">Video</option>
                    <option value="AUDIO">Audio</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="file">Upload File</Label>
                  <Input
                    id="file"
                    name="file"
                    type="file"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="culture, tradition, guide"
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Add Resource
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {activeTab === 'resources' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.id} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    resource.status === 'Published' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {resource.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {resource.type}
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                      {resource.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Uploaded: {resource.uploadDate}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => deleteResource(resource.id)}
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

      {activeTab === 'workshops' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Learning Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{workshop.title}</h4>
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      {workshop.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                    <span>Instructor: {workshop.instructor}</span>
                    <span>Date: {workshop.date}</span>
                    <span>Duration: {workshop.duration}</span>
                    <span>Registered: {workshop.registered}/{workshop.maxParticipants}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'categories' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Resource Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Category management coming soon</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}