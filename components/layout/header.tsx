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

  // Public navigation (available to all users)
  const publicNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' }
  ];

  // Protected navigation (requires subscription)
  const protectedNavigation = [
    { name: 'Family Directory', href: '/directory' },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Learning Center', href: '/resources' },
        { name: 'Downloads', href: '/resources/downloads' }
      ]
    }
  ];

  // Combine navigation based on user access
  const navigation = [
    ...publicNavigation,
    ...(hasAccess() ? protectedNavigation : [])
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                  Karvirvasi Solapurkar
                </span>
                <div className="text-xs text-orange-600 font-medium">
                  Professional Family Network
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div>
                      <div className="flex">
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-orange-600 px-2 py-2 rounded-l-lg text-sm font-medium transition-all duration-200 hover:bg-orange-50 whitespace-nowrap"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                        
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          className="text-gray-700 hover:text-orange-600 px-1 py-2 rounded-r-lg text-sm font-medium transition-all duration-200 hover:bg-orange-50"
                        >
                          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-gray-700 hover:text-orange-600 px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 group hover:bg-orange-50 whitespace-nowrap"
                    >
                      {item.name}
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-6 group-hover:-translate-x-1/2 transition-all duration-300"></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="text-sm">
                  <div className="font-medium text-gray-900 flex items-center gap-2">
                    Welcome, {user?.name}
                    {isAdmin() && (
                      <Link href="/admin" className="text-orange-600 hover:text-orange-700">
                        <Shield className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  {!user?.hasSubscription && (
                    <div className="text-orange-600 text-xs">No subscription</div>
                  )}
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline">
                  <Link href="/login">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 text-sm rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <Link href="/register">
                    Join Community
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-sm rounded-2xl mt-2 border border-gray-200 shadow-2xl max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className="flex-1 text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="p-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-lg text-sm transition-all duration-200"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth */}
              <div className="pt-4 px-3 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900 flex items-center gap-2">
                        Welcome, {user?.name}
                        {isAdmin() && (
                          <Link href="/admin" className="text-orange-600 hover:text-orange-700">
                            <Shield className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                      {!user?.hasSubscription && (
                        <div className="text-orange-600 text-xs">No subscription</div>
                      )}
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/login">
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href="/register">
                        Join Community
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}