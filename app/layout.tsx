import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solapur Community in Kolhapur | Connect & Grow Together',
  description: 'Join Kolhapur\'s premier community for Solapur families. Connect with like-minded families, attend exclusive events, and build lasting relationships in our vibrant network.',
  keywords: 'Karvirvasi Solapurkar, Solapur community Kolhapur, family networking, Solapur events Kolhapur, family directory',
  authors: [{ name: 'Solapur Community Kolhapur' }],
  creator: 'Solapur Community Kolhapur',
  publisher: 'Solapur Community Kolhapur',
  openGraph: {
    title: 'Solapur Community in Kolhapur',
    description: 'Connect with Solapur families living in Kolhapur. Join our thriving community today.',
    url: 'https://solapur-kolhapur-community.com',
    siteName: 'Solapur Community Kolhapur',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
        width: 1200,
        height: 630,
        alt: 'Solapur Community in Kolhapur',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solapur Community in Kolhapur',
    description: 'Connect with Solapur families living in Kolhapur',
    images: ['https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://solapur-kolhapur-community.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Solapur Community in Kolhapur',
              description: 'A premier community connecting Solapur families living in Kolhapur',
              url: 'https://solapur-kolhapur-community.com',
              logo: 'https://solapur-kolhapur-community.com/logo.png',
              sameAs: [
                'https://www.facebook.com/solapur-kolhapur-community',
                'https://www.linkedin.com/company/solapur-kolhapur-community',
                'https://twitter.com/solapur_kolhapur',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kolhapur',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-community-background text-community-text antialiased`}>
        {children}
      </body>
    </html>
  );
}