
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import { AppProviders } from "@/components/app-providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lazywear.store"),
  title: 'Lazywear: Shop Comfortable & Affordable Loungewear Online in India',
  description: 'Your comfortable clothing store for casual wear online. Buy the best lazy wear, oversized cotton t-shirts, and affordable loungewear for work from home, with home delivery in India.',
  keywords: ['lazy wear', 'loungewear India', 'comfortable clothing', 'casual wear online', 'oversized t-shirts'],
  authors: [{ name: 'Lazywear' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lazywear: Shop Comfortable & Affordable Loungewear Online in India',
    description: 'Your comfortable clothing store for casual wear online.',
    url: 'https://lazywear.store',
    siteName: 'Lazywear',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://lazywear.store/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lazywear Loungewear'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lazywear: Shop Comfortable & Affordable Loungewear',
    description: 'Your comfortable clothing store for casual wear online.',
    images: ['https://lazywear.store/twitter-image.jpg'],
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
    google: '19k4CJm7-_l9_LklzaXDyylIn8Gi3k_lmidtRPfD_Fk',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Asset 9.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lazy Wear",
            "url": "https://lazywear.store",
            "logo": "https://lazywear.store/logo.png",
            "sameAs": [
              "https://www.instagram.com/lazywear",
              "https://www.facebook.com/lazywear"
            ]
          }) }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1RKSBRP2M"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Q1RKSBRP2M');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
