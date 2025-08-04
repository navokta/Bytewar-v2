// components/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!document.cookie.includes('token=')) {
      router.push(`/login?from=${encodeURIComponent(router.asPath)}`);
    }
  }, []);

  return children;
}