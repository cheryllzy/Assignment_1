const listingsDetails = {
  1: {
    company: "Coalition Technologies",
    job: "Administrative Assistant",
  },
  2: {
    company: "Beacon Hill Associates",
    job: "Receptionist",
  },
  3: {
    company: "Pinnacle Restaurant Services",
    job: "Customer Services & Purchasing",
  },
  4: {
    company: "Dogwood Tutoring and Test Prep",
    job: "Office Administrator",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // get favourites from local storage
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  // display favourites
  const favouritesContainer = document.getElementById("favourites-container");

  if (favourites.length === 0) {
    favouritesContainer.innerHTML = "<p>No listings added.</p>";
  } else {
    favourites.forEach((id) => {
      const favouriteItem = document.createElement("div");
      favouriteItem.className = "favourite-item";

      // get details from specific id
      const details = listingsDetails[id];

      favouriteItem.innerHTML = `
          <p>Company: ${details.company}</p>
          <p>Job: ${details.job}</p>
          <a href="listingdetails.html?id=${id}" class="view_listing_button">View Listing</a>
          <button onclick="removeFromFavourites(${id})">Remove from Favourites</button>
          `;
      favouritesContainer.appendChild(favouriteItem);
    });
  }
});

// remove listing from favourites function
function removeFromFavourites(id) {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  // remove listing from favourites
  const index = favourites.indexOf(id);
  if (index !== -1) {
    favourites.splice(index, 1);
    // save to local storage
    localStorage.setItem("favourites", JSON.stringify(favourites));
    location.reload();
  }
}
