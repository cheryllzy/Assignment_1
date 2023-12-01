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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }