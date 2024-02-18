// script.js

const addRestaurantForm = document.getElementById('addRestaurantForm');

addRestaurantForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cuisine = document.getElementById('cuisine').value;
    const address = document.getElementById('address').value;
    const openingHours = document.getElementById('openingHours').value;
    const rating = document.getElementById('rating').value;

    // Perform backend service request here
    // ...

    // Clear the form
    addRestaurantForm.reset();
});
