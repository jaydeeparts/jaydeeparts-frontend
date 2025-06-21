import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [artworks, setArtworks] = useState([]);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const res = await axios.get('https://jaydeeparts-backend.onrender.com/api/artworks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setArtworks(res.data);
    } catch (err) {
      setError('Failed to fetch artworks');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jaydeeparts-backend.onrender.com/api/artworks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setArtworks(artworks.filter(art => art._id !== id));
    } catch (err) {
      setError('Delete failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {artworks.map((art) => (
          <li key={art._id}>
            <strong>{art.title}</strong> - ₹{art.price}
            <br />
            <img src={art.image} alt={art.title} width="100" />
            <br />
            <button onClick={() => handleDelete(art._id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
