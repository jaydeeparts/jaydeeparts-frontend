
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('https://jaydeeparts-backend.onrender.com/api/artworks')
      .then(response => {
        setArtworks(response.data);
      })
      .catch(error => {
        console.error('Error fetching artworks:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to JayDeep Arts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {artworks.map(art => (
          <div key={art._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={art.imageUrl} alt={art.title} style={{ width: '200px', height: 'auto' }} />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
