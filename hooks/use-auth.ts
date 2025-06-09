'use client';

import { useState, useEffect } from 'react';
import { authService, AuthState } from '@/lib/auth';

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    const unsubscribe = authService.subscribe(setAuthState);
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    return await authService.login(email, password);
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    profession: string;
  }) => {
    return await authService.register(userData);
  };

  const purchaseSubscription = async () => {
    return await authService.purchaseSubscription();
  };

  const logout = () => {
    authService.logout();
  };

  const hasAccess = () => {
    return authService.hasAccess();
  };

  const isAdmin = () => {
    return authService.isAdmin();
  };

  return {
    ...authState,
    login,
    register,
    purchaseSubscription,
    logout,
    hasAccess,
    isAdmin
  };
}