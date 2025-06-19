
document.addEventListener('DOMContentLoaded', () => {
  fetch("https://jaydeeparts-backend.onrender.com/api/artworks")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('artwork-list');
      data.forEach(art => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
          <img src="${art.image}" alt="${art.title}"/>
          <h3>${art.title}</h3>
          <p>${art.description}</p>
          <p><strong>Price:</strong> ₹${art.price}</p>
        `;
        list.appendChild(card);
      });
    })
    .catch(err => console.error('Error loading artworks:', err));
});
