'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Users, ChevronDown, LogOut, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAuthenticated, user, logout, hasAccess, isAdmin } = useAuth();

  const publicNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Community', href: '/community' },
    { name: 'Blog', href: '/blog' },
    { name: 'Family Support', href: '/familysupport' },
  ];

  const protectedNavigation = [
    { name: 'Family Directory', href: '/directory' },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Learning Center', href: '/resources' },
        { name: 'Downloads', href: '/resources/downloads' },
      ],
    },
  ];

  const navigation = [...publicNavigation, ...(hasAccess() ? protectedNavigation : [])];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 whitespace-nowrap">
                Karvirvasi Solapurkar
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-3 items-center ml-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center space-x-1">
                    <Link href={item.href} className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 whitespace-nowrap">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="text-gray-700 hover:text-orange-600"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-2 ml-auto">
            {isAuthenticated ? (
              <Link href="/my-profile" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 whitespace-nowrap">
                My Profile
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm" className="whitespace-nowrap flex-shrink-0">
                  <Link href="/login">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 whitespace-nowrap"
                >
                  <Link href="/register">Join Community</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden mt-2 space-y-1 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.href}
                        className="block text-gray-700 font-medium py-2 hover:text-orange-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button onClick={() => handleDropdownToggle(item.name)}>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    {activeDropdown === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-gray-600 text-sm hover:text-orange-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-700 font-medium py-2 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <Button onClick={handleLogout} variant="ghost" className="w-full">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <div className="space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/login">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-full hover:from-orange-600 hover:to-red-600"
                  >
                    <Link href="/register">Join Community</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}