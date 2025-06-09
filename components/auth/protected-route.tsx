'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Lock, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
  requireAdmin?: boolean;
  fallbackPath?: string;
}

export default function ProtectedRoute({ 
  children, 
  requireSubscription = true, 
  requireAdmin = false,
  fallbackPath = '/login' 
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading, isAdmin, checkAdmin } = useAuth();
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push(fallbackPath);
        return;
      }

      if (requireAdmin && !checkAdmin()) {
        router.push('/');
        return;
      }

      if (requireSubscription && !user?.hasSubscription) {
        setShowContent(false);
        return;
      }

      setShowContent(true);
    }
  }, [isAuthenticated, user, isLoading, requireSubscription, requireAdmin, router, fallbackPath, checkAdmin]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  if (requireAdmin && !checkAdmin()) {
    return null; // Will redirect
  }

  if (requireSubscription && !user?.hasSubscription) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30 p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Subscription Required
            </CardTitle>
            <p className="text-gray-600">
              You need an active subscription to access this content
            </p>
          </CardHeader>
          
          <CardContent className="text-center">
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Premium Content</span>
              </div>
              <p className="text-orange-700 text-sm">
                Get lifetime access for just ₹500 - No recurring fees!
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/membership" className="flex items-center justify-center">
                  Get Subscription
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>

            <p className="text-xs text-gray-500">
              ✨ Join 500+ Solapur families in Kolhapur
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return showContent ? <>{children}</> : null;
}