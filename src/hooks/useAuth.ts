import React, { useState, useEffect } from 'react';
import type { User } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    let active = true;

    // Dynamically load Firebase auth
    const initAuth = async () => {
      try {
        const { auth } = await import('../firebase');
        if (!active) return;
        
        const { onAuthStateChanged } = await import('firebase/auth');
        if (!active) return;

        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (active) {
            setUser(currentUser);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error initializing auth lazily:', error);
        if (active) {
          setLoading(false);
        }
      }
    };

    initAuth();

    return () => {
      active = false;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const login = async () => {
    const { signIn } = await import('../firebase');
    return signIn();
  };

  const logout = async () => {
    const { signOut } = await import('../firebase');
    return signOut();
  };

  return { 
    user, 
    loading,
    login,
    logout
  };
};
