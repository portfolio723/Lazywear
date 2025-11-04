
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

interface FirebaseContextType {
  app: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

interface FirebaseProviderProps {
  children: ReactNode;
  app: FirebaseApp;
}

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children, app }) => {
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return (
    <FirebaseContext.Provider value={{ app, auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const useFirebaseApp = () => {
  const { app } = useFirebase();
  if (!app) {
    throw new Error('Firebase App not available.');
  }
  return app;
}

export const useAuth = () => {
  const { auth } = useFirebase();
  if (!auth) {
    throw new Error('Firebase Auth not available.');
  }
  return auth;
};

export const useFirestore = () => {
  const { firestore } = useFirebase();
  if (!firestore) {
    throw new Error('Firebase Firestore not available.');
  }
  return firestore;
};
