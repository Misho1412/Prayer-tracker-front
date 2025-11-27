import React from 'react';
import ReactDOM from 'react-dom/client';
import PrayerTrackerApp from './PrayerTrackerApp';
import './index.css'; // لو عندك CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrayerTrackerApp />
  </React.StrictMode>
);
