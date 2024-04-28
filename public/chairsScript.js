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
    const chairsContainer1 = document.getElementById('chairs-container1');
    const chairsContainer2 = document.getElementById('chairs-container2');
    const chairsContainer3 = document.getElementById('chairs-container3');

    chairsContainer1.innerHTML = '';
    chairsContainer2.innerHTML = '';
    chairsContainer3.innerHTML = '';


    var chairCounter = 0;

    // Loop through chairData and create chair elements
    /**Object.values(chairData).forEach(value => {
        const chair = document.createElement('img');
        chair.className = 'chair';
        chair.src = value === false ? 'resources/armchair-red.png' : 'resources/armchair-green.png';
        chair.id = String(chairCounter);
        chairCounter++;

        // Append the chair to the container
        chairsContainer1.appendChild(chair);
    });

    chairsContainer2.appendChild(chairsContainer1.getElementById(2));
    chairsContainer3.appendChild(chairsContainer1.getElementById(3));

    chairsContainer1.removeChild(chairsContainer1.getElementById(3));
    chairsContainer1.removeChild(chairsContainer1.getElementById(2));
        **/

    const values = Object.values(chairData);

// Using a for loop to iterate over the array of values
    var i = 0;
    for (; i < 2; i++) {
        const value = values[i];
        const chair = document.createElement('img');
        chair.className = 'chair';
        chair.src = value === false ? 'resources/armchair-red.png' : 'resources/armchair-green.png';
        chair.id = String(chairCounter);
        chairCounter++;

        // Append the chair to the container
        chairsContainer1.appendChild(chair);
    }
    if (i == 2) {
        const value = values[i];
        const chair = document.createElement('img');
        chair.className = 'chair';
        chair.src = value === false ? 'resources/armchair-red.png' : 'resources/armchair-green.png';
        chair.id = String(chairCounter);
        chairCounter++;

        // Append the chair to the container
        chairsContainer2.appendChild(chair);
        i++;
    }
    if (i==3) {
        const value = values[i];
        const chair = document.createElement('img');
        chair.className = 'chair';
        chair.src = value === false ? 'resources/armchair-red.png' : 'resources/armchair-green.png';
        chair.id = String(chairCounter);
        chairCounter++;

        // Append the chair to the container
        chairsContainer3.appendChild(chair);
        i++;
    }

}

// Call fetchChairData function when the page loads
window.onload = fetchChairData;