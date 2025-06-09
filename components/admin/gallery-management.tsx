'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Image, Video, Upload, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function GalleryManagement() {
  const [activeTab, setActiveTab] = useState('photos');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const [photos, setPhotos] = useState([
    {
      id: 1,
      title: 'Annual Family Gathering 2024',
      url: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      category: 'Events',
      uploadDate: '2024-01-15',
      views: 1250,
      likes: 89,
      approved: true
    },
    {
      id: 2,
      title: 'Cultural Festival Celebration',
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      category: 'Culture',
      uploadDate: '2024-01-10',
      views: 980,
      likes: 67,
      approved: true
    },
    {
      id: 3,
      title: 'Professional Networking Event',
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      category: 'Business',
      uploadDate: '2024-01-08',
      views: 1100,
      likes: 78,
      approved: false
    }
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Community Welcome Message',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      duration: '2:30',
      category: 'Announcements',
      uploadDate: '2024-01-12',
      views: 567,
      approved: true
    },
    {
      id: 2,
      title: 'Event Highlights Reel',
      thumbnail: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      duration: '5:45',
      category: 'Events',
      uploadDate: '2024-01-05',
      views: 892,
      approved: true
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Events',
    description: '',
    tags: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle file upload logic here
    setFormData({ title: '', category: 'Events', description: '', tags: '' });
    setShowUploadForm(false);
  };

  const toggleApproval = (id: number, type: 'photo' | 'video') => {
    if (type === 'photo') {
      setPhotos(photos.map(p => 
        p.id === id ? { ...p, approved: !p.approved } : p
      ));
    } else {
      setVideos(videos.map(v => 
        v.id === id ? { ...v, approved: !v.approved } : v
      ));
    }
  };

  const deleteItem = (id: number, type: 'photo' | 'video') => {
    if (type === 'photo') {
      setPhotos(photos.filter(p => p.id !== id));
    } else {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Photo/Video Gallery Management</h2>
        <Button 
          onClick={() => setShowUploadForm(true)}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('photos')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'photos'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Photos
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'videos'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === 'pending'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Pending Approval
        </button>
      </div>

      {showUploadForm && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Upload Media</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
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
                    <option value="Events">Events</option>
                    <option value="Culture">Culture</option>
                    <option value="Business">Business</option>
                    <option value="Education">Education</option>
                    <option value="Family">Family</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="file">Select Files</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="family, celebration, community"
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Upload Media
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowUploadForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {activeTab === 'photos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.filter(p => p.approved).map((photo) => (
            <Card key={photo.id} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {photo.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{photo.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>{photo.views} views</span>
                  <span>{photo.likes} likes</span>
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
                    onClick={() => deleteItem(photo.id, 'photo')}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.filter(v => v.approved).map((video) => (
            <Card key={video.id} className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>{video.views} views</span>
                  <span>{video.uploadDate}</span>
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
                    onClick={() => deleteItem(video.id, 'video')}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'pending' && (
        <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg">
          <CardHeader>
            <CardTitle>Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {photos.filter(p => !p.approved).map((photo) => (
                <div key={photo.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{photo.title}</h4>
                    <p className="text-sm text-gray-600">{photo.category} • {photo.uploadDate}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      onClick={() => toggleApproval(photo.id, 'photo')}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Approve
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => deleteItem(photo.id, 'photo')}
                      className="text-red-600 hover:text-red-700"
                    >
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
              {photos.filter(p => !p.approved).length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No items pending approval</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}