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