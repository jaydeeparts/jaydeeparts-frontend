// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to JayDeep Arts</h1>
      <p style={{ fontSize: '1.2rem' }}>Explore and purchase beautiful artworks.</p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/login" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Admin Login
        </Link>
        <Link to="/admin" style={{ padding: '0.5rem 1rem', backgroundColor: '#444', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
}
