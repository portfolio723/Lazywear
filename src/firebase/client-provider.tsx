
'use client';

import React, { ReactNode } from 'react';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirebaseConfig } from './config';
import { FirebaseProvider } from './provider';

let firebaseApp: FirebaseApp;

if (typeof window !== 'undefined' && !getApps().length) {
  const firebaseConfig = getFirebaseConfig();
  firebaseApp = initializeApp(firebaseConfig);
} else if (getApps().length) {
  firebaseApp = getApps()[0];
}

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export const FirebaseClientProvider: React.FC<FirebaseClientProviderProps> = ({ children }) => {
  // This is a client component, so we can safely assume firebaseApp is initialized.
  // The null check is a safeguard.
  if (!firebaseApp) {
    // This case should ideally not be hit on the client.
    // Re-initializing here might be an option but could lead to unexpected behavior.
    // For now, we render nothing or an error/loading state.
    return null; 
  }
  return <FirebaseProvider app={firebaseApp}>{children}</FirebaseProvider>;
};
