// Object to store chair data
const chairData = {
    // Chairs will be stored here dynamically
};


// Function to fetch data from the REST API and update chairData
function fetchChairData() {
    fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            // Update chairData with the received data
            data.forEach((value, index) => {
                chairData[index] = value;
            });

            // Call function to generate chairs
            generateChairs();
        })
        .catch(error => {
            console.error('Error fetching chair data:', error);
        });
}

// Function to generate chairs based on chairData
function generateChairs() {
    const chairsContainer = document.getElementById('chairs-container');
    chairsContainer.innerHTML = '';

    // Loop through chairData and create chair elements
    Object.values(chairData).forEach(value => {
        const chair = document.createElement('img');
        chair.className = 'chair';
        chair.src = value === false ? 'resources/armchair-red.png' : 'resources/armchair-green.png';

        // Append the chair to the container
        chairsContainer.appendChild(chair);
    });
}

// Call fetchChairData function when the page loads
window.onload = fetchChairData;