import React, { useState, useEffect } from 'react';
import { Calendar, Check, Lock, Users, LogOut, Trophy } from 'lucide-react';

// API Configuration
const API_URL = 'https://prayer-tracker-api.onrender.com'; // Replace with your Render URL

const PrayerTrackerApp = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user') || 'null')
  );
  const [view, setView] = useState('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // API Helper
  const api = async (endpoint, options = {}) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(authToken && { Authorization: `Bearer ${authToken}` }),
          ...options.headers
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }
      
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password) => {
    const data = await api('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    
    setAuthToken(data.token);
    setCurrentUser(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setView('dashboard');
    setSuccess('Login successful!');
  };

  const handleRegister = async (username, password, displayName) => {
    await api('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, displayName })
    });
    
    setSuccess('Registration successful! Please login.');
    setView('login');
  };

  const handleLogout = () => {
    setAuthToken(null);
    setCurrentUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setView('login');
  };

  // Login/Register forms and main UI here
  // (Copy from previous artifact or simplify)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {!authToken ? (
          <LoginRegisterForm 
            onLogin={handleLogin}
            onRegister={handleRegister}
            error={error}
            success={success}
            loading={loading}
          />
        ) : (
          <MainApp
            user={currentUser}
            api={api}
            onLogout={handleLogout}
            error={error}
            success={success}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default PrayerTrackerApp;