// utils/auth.js
'use client';

// Google OAuth handler
export const handleGoogleLogin = async () => {
  try {
    // Using Google Identity Services (replace with your Google OAuth implementation)
    // You can use @google-cloud/auth-library or next-auth
    
    // Example with Google Identity Services
    const googleResponse = await new Promise((resolve, reject) => {
      if (typeof window !== 'undefined' && window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: (response) => {
            // Decode the JWT token to get user info
            const payload = JSON.parse(atob(response.credential.split('.')[1]));
            resolve({
              id: payload.sub,
              email: payload.email,
              name: payload.name,
              picture: payload.picture,
            });
          },
        });
        
        window.google.accounts.id.prompt();
      } else {
        reject(new Error('Google SDK not loaded'));
      }
    });
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: googleResponse.email,
        provider: 'google',
        providerId: googleResponse.id,
        name: googleResponse.name,
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      if (data.redirectTo) {
        // Redirect to profile completion page
        window.location.href = data.redirectTo;
      } else {
        // Profile is complete, redirect to dashboard or home
        window.location.href = '/dashboard';
      }
    } else {
      throw new Error(data.message || 'Google login failed');
    }
  } catch (error) {
    console.error('Google login error:', error);
    alert('Google login failed. Please try again.');
  }
};

// GitHub OAuth handler
export const handleGitHubLogin = async () => {
  try {
    // Redirect to GitHub OAuth
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = `${window.location.origin}/api/auth/github/callback`;
    const scope = 'user:email';
    
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
    
    window.location.href = githubAuthUrl;
  } catch (error) {
    console.error('GitHub login error:', error);
    alert('GitHub login failed. Please try again.');
  }
};

// Regular login handler
export const handleRegularLogin = async (email, password) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      if (data.redirectTo) {
        // Redirect to profile completion page
        window.location.href = data.redirectTo;
      } else {
        // Profile is complete, redirect to dashboard or home
        window.location.href = '/dashboard';
      }
    } else {
      throw new Error(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert(error.message || 'Login failed. Please try again.');
  }
};

// Complete profile handler
export const handleCompleteProfile = async (email, phone, password) => {
  try {
    const response = await fetch('/api/auth/complete-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, phone, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      // Profile completed successfully, redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      throw new Error(data.error || 'Profile completion failed');
    }
  } catch (error) {
    console.error('Complete profile error:', error);
    alert(error.message || 'Profile completion failed. Please try again.');
  }
};