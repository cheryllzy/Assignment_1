// filter function
document.addEventListener('DOMContentLoaded', function () {
  const filterFtCheckbox = document.getElementById('filterFt');
  const filterPtCheckbox = document.getElementById('filterPt');

  filterFtCheckbox.addEventListener('change', updateFilters);
  filterPtCheckbox.addEventListener('change', updateFilters);

  function updateFilters() {
    const showFt = filterFtCheckbox.checked;
    const showPt = filterPtCheckbox.checked;

    document.querySelectorAll('.property').forEach(property => {
      const propertyType = property.getAttribute('data-type');
      const shouldBeVisible = (showFt && propertyType === 'full') || (showPt && propertyType === 'part');

      property.style.display = shouldBeVisible ? 'block' : 'none';
    });
  }
});

// search function
function search() {
  let input = document.getElementById('searchbar__input').value.toLowerCase();
  let properties = document.getElementsByClassName('property');

  for (let i = 0; i < properties.length; i++) {
    let property = properties[i];
    let details = property.getElementsByClassName('listing__details')[2].innerText.toLowerCase();

    if (!details.includes(input)) {
      property.style.display = "none";
    } else {
      property.style.display = "block";
    }
  }
}

// add to favourites function
document.addEventListener('DOMContentLoaded', function () {
  // add event listeners to the "favourite" buttons
  document.getElementById('addFavourite1').addEventListener('click', function () {
      addToFavourites(1);
  });
  document.getElementById('addFavourite2').addEventListener('click', function () {
      addToFavourites(2);
  });
  document.getElementById('addFavourite3').addEventListener('click', function () {
      addToFavourites(3);
  });
  document.getElementById('addFavourite4').addEventListener('click', function () {
      addToFavourites(4);
  });

  // add event listeners to the "remove from favorites" buttons
  document.getElementById('removeFavourite1').addEventListener('click', function () {
      removeFromFavourites(1);
  });
  document.getElementById('removeFavourite2').addEventListener('click', function () {
      removeFromFavourites(2);
  });
  document.getElementById('removeFavourite3').addEventListener('click', function () {
      removeFromFavourites(3);
  });
  document.getElementById('removeFavourite4').addEventListener('click', function () {
      removeFromFavourites(4);
  });
});

// function to add item to favorites
function addToFavourites(id) {
  // get favourites from local storage or empty array if no favourites
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  // check if item is in favourites
  if (!favourites.includes(id)) {
      // add to favourites
      favourites.push(id);

      // save updated to local storage
      localStorage.setItem('favourites', JSON.stringify(favourites));
      alert('Item added to favorites!');
  } else {
      alert('Item is already in favorites!');
  }
}

// function to remove items from favourites
function removeFromFavourites(id) {
  // Retrieve favorites from local storage
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  // remove listing
  const index = favourites.indexOf(id);
  if (index !== -1) {
      favourites.splice(index, 1);

      // save updated favourite listings to local storage
      localStorage.setItem('favourites', JSON.stringify(favourites));

      // update page changes
      location.reload();
  }
}