// Function to submit data to the server
function submitData() {
    const itemInput = document.getElementById('item');
    const dispensedInput = document.getElementById('dispensed');
    const consumed1Input = document.getElementById('consumed1');
    const consumed2Input = document.getElementById('consumed2');
    const consumed3Input = document.getElementById('consumed3');
    const consumed4Input = document.getElementById('consumed4');

    const data = {
        item: itemInput.value,
        dispensed: parseInt(dispensedInput.value) || 0,
        consumed1: parseInt(consumed1Input.value) || 0,
        consumed2: parseInt(consumed2Input.value) || 0,
        consumed3: parseInt(consumed3Input.value) || 0,
        consumed4: parseInt(consumed4Input.value) || 0,
    };

    // Send the data to the server
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result); // You can handle the response as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Event listener for the "Submit" button
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitData);







// Function to calculate and populate the table with data
function calculateAndPopulateTable() {
    const itemInput = document.getElementById('item');
    const dispensedInput = document.getElementById('dispensed');
    const consumed1Input = document.getElementById('consumed1');
    const consumed2Input = document.getElementById('consumed2');
    const consumed3Input = document.getElementById('consumed3');
    const consumed4Input = document.getElementById('consumed4');
    const tableBody = document.querySelector('tbody');

    const item = itemInput.value;
    const dispensed = parseInt(dispensedInput.value) || 0;
    const consumed1 = parseInt(consumed1Input.value) || 0;
    const consumed2 = parseInt(consumed2Input.value) || 0;
    const consumed3 = parseInt(consumed3Input.value) || 0;
    const consumed4 = parseInt(consumed4Input.value) || 0;

    const totalConsumed = consumed1 + consumed2 + consumed3 + consumed4;
    const balance = dispensed - totalConsumed;

    const row = `
        <tr>
            <td>${item}</td>
            <td>${dispensed}</td>
            <td>${consumed1}</td>
            <td>${consumed2}</td>
            <td>${consumed3}</td>
            <td>${consumed4}</td>
            <td>${totalConsumed}</td>
            <td class="${balance >= 0 ? 'balance-positive' : 'balance-negative'}">${balance}</td>
        </tr>
    `;

    tableBody.innerHTML += row;

    // Clear input fields after calculation
    itemInput.value = '';
    dispensedInput.value = '';
    consumed1Input.value = '';
    consumed2Input.value = '';
    consumed3Input.value = '';
    consumed4Input.value = '';
}

// Function to clear input fields
function clearInputFields() {
    const itemInput = document.getElementById('item');
    const dispensedInput = document.getElementById('dispensed');
    const consumed1Input = document.getElementById('consumed1');
    const consumed2Input = document.getElementById('consumed2');
    const consumed3Input = document.getElementById('consumed3');
    const consumed4Input = document.getElementById('consumed4');

    itemInput.value = '';
    dispensedInput.value = '';
    consumed1Input.value = '';
    consumed2Input.value = '';
    consumed3Input.value = '';
    consumed4Input.value = '';
}

// Event listeners for the buttons
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculateAndPopulateTable);




// Function to clear the last row from the table
function clearLastEntry() {
    const tableBody = document.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');
    if (rows.length > 0) {
        tableBody.removeChild(rows[rows.length - 1]);
    }
}

// Event listener for the "Clear" button
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearLastEntry);
