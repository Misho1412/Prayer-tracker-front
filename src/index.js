import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import PrayerTrackerApp from './PrayerTrackerApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <PrayerTrackerApp />
    </ThemeProvider>
  </React.StrictMode>
);
