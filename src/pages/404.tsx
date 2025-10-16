
"use client";

import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { AppProviders } from '@/components/app-providers';

export default function Custom404() {
  return (
    <AppProviders>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold mt-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mt-2 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">
              Go Back Home
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    </AppProviders>
  );
}
