document.addEventListener('DOMContentLoaded', function () {
  // Retrieve favorites from local storage
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  // Display favorites
  const favouritesContainer = document.getElementById('favourites-container');

  if (favourites.length === 0) {
      favouritesContainer.innerHTML = '<p>No favourites selected.</p>';
  } else {
      favourites.forEach(id => {
          const favouriteItem = document.createElement('div');
          favouriteItem.className = 'favourite-item';
          favouriteItem.innerHTML = `
              <button onclick="removeFromFavourites(${id})">Remove from Favourites</button>
              <img class="pic" src="Pictures/item${id}.jpg" alt="Item ${id}" />
              <ul class="info">
                  <li class="listing__details">Item ${id}</li>
                  <!-- Add more details as needed -->
              </ul>
          `;
          favouritesContainer.appendChild(favouriteItem);
      });
  }
});

// Function to remove item from favorites
function removeFromFavourites(id) {
  // Retrieve favorites from local storage
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  // Remove the item from favorites
  const index = favourites.indexOf(id);
  if (index !== -1) {
      favourites.splice(index, 1);

      // Save the updated favorites to local storage
      localStorage.setItem('favourites', JSON.stringify(favourites));

      // Reload the page to reflect changes
      location.reload();
  }
}
