'use client';

import { useAuth } from '@/hooks/use-auth';
import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import AboutPreview from '@/components/sections/about-preview';
import EventsPreview from '@/components/sections/events-preview';
import DirectoryTeaser from '@/components/sections/directory-teaser';
import CommunityHighlights from '@/components/sections/community-highlights';
import BlogPreview from '@/components/sections/blog-preview';
import CTASection from '@/components/sections/cta-section';
import Footer from '@/components/layout/footer';
import HomeDashboard from '@/components/sections/home-dashboard';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {isAuthenticated ? (
          <HomeDashboard />
        ) : (
          <>
            <Hero />
            <AboutPreview />
            <EventsPreview />
            <DirectoryTeaser />
            <CommunityHighlights />
            <BlogPreview />
            <CTASection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}