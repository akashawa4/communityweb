'use client';

import { 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Image, 
  BookOpen, 
  Users, 
  BarChart3,
  Settings,
  HelpCircle
} from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function AdminSidebar({ activeSection, setActiveSection }: AdminSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'events', label: 'Events & Activities', icon: Calendar },
    { id: 'forums', label: 'Discussion Forums', icon: MessageSquare },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'gallery', label: 'Photo/Video Gallery', icon: Image },
    { id: 'blog', label: 'Blog & News', icon: BookOpen },
    { id: 'resources', label: 'Resources & Learning', icon: BookOpen },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}