'use client';

export interface User {
  id: string;
  email: string;
  name: string;
  hasSubscription: boolean;
  subscriptionType?: 'lifetime' | 'monthly';
  memberSince: string;
  role?: 'admin' | 'user';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Mock user data for demonstration
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'password123',
    name: 'Demo User',
    hasSubscription: true,
    subscriptionType: 'lifetime' as const,
    memberSince: '2023-01-15',
    role: 'user' as const
  },
  {
    id: 'admin1',
    email: 'admin@karvirvasi.com',
    password: 'admin123',
    name: 'Admin User',
    hasSubscription: true,
    subscriptionType: 'lifetime' as const,
    memberSince: '2019-01-01',
    role: 'admin' as const
  }
];

export class AuthService {
  private static instance: AuthService;
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false
  };
  private listeners: ((state: AuthState) => void)[] = [];

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  constructor() {
    // Check for existing session on initialization
    this.checkExistingSession();
  }

  private checkExistingSession() {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const user = JSON.parse(userData);
          this.authState = {
            user,
            isAuthenticated: true,
            isLoading: false
          };
          this.notifyListeners();
        } catch (error) {
          localStorage.removeItem('user');
        }
      }
    }
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener);
    // Immediately call with current state
    listener(this.authState);
    
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.authState));
  }

  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    this.authState.isLoading = true;
    this.notifyListeners();

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!user) {
      this.authState.isLoading = false;
      this.notifyListeners();
      return { success: false, error: 'Invalid email or password' };
    }

    const { password: _, ...userWithoutPassword } = user;
    this.authState = {
      user: userWithoutPassword,
      isAuthenticated: true,
      isLoading: false
    };

    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    }

    this.notifyListeners();
    return { success: true };
  }

  async register(userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    profession: string;
  }): Promise<{ success: boolean; error?: string }> {
    this.authState.isLoading = true;
    this.notifyListeners();

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === userData.email);
    if (existingUser) {
      this.authState.isLoading = false;
      this.notifyListeners();
      return { success: false, error: 'User with this email already exists' };
    }

    // Create new user (without subscription initially)
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      hasSubscription: false,
      memberSince: new Date().toISOString().split('T')[0],
      role: 'user'
    };

    this.authState = {
      user: newUser,
      isAuthenticated: true,
      isLoading: false
    };

    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(newUser));
    }

    this.notifyListeners();
    return { success: true };
  }

  async purchaseSubscription(): Promise<{ success: boolean; error?: string }> {
    if (!this.authState.user) {
      return { success: false, error: 'User not authenticated' };
    }

    this.authState.isLoading = true;
    this.notifyListeners();

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const updatedUser = {
      ...this.authState.user,
      hasSubscription: true,
      subscriptionType: 'lifetime' as const
    };

    this.authState = {
      ...this.authState,
      user: updatedUser,
      isLoading: false
    };

    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }

    this.notifyListeners();
    return { success: true };
  }

  logout() {
    this.authState = {
      user: null,
      isAuthenticated: false,
      isLoading: false
    };

    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }

    this.notifyListeners();
  }

  getAuthState(): AuthState {
    return this.authState;
  }

  hasAccess(): boolean {
    return this.authState.isAuthenticated && this.authState.user?.hasSubscription === true;
  }

  isAdmin(): boolean {
    return this.authState.isAuthenticated && this.authState.user?.role === 'admin';
  }
}

export const authService = AuthService.getInstance();