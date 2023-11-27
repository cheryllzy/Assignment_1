document.addEventListener('DOMContentLoaded', function () {
    const filterRentCheckbox = document.getElementById('filterRent');
    const filterSaleCheckbox = document.getElementById('filterSale');

    filterRentCheckbox.addEventListener('change', updateFilters);
    filterSaleCheckbox.addEventListener('change', updateFilters);

    function updateFilters() {
        const showRent = filterRentCheckbox.checked;
        const showSale = filterSaleCheckbox.checked;

        document.querySelectorAll('.property').forEach(property => {
            const propertyType = property.getAttribute('data-type');
            const shouldBeVisible = (showRent && propertyType === 'rent') || (showSale && propertyType === 'sale') || (showRent && showSale);

            property.style.display = shouldBeVisible ? 'block' : 'none';
        });
    }
});

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
