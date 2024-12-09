// Get the form and table body elements
const form = document.getElementById('transaction-form');
const transactionList = document.querySelector('table tbody');

// Listen for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const coin = document.getElementById('coin').value;
    const amount = document.getElementById('amount').value;
    const total = document.getElementById('total').value;
    const status = document.getElementById('status').value;

    // Get the current date in human-readable format
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Determine the icon class based on the coin type
    let iconClass;
    switch (coin) {
        case 'currency_exchange Ethereum Purchased':
            iconClass = 'ethereum';
            break;
        case 'currency_bitcoin Bitcoin Purchased':
            iconClass = 'bitcoin';
            break;
        case 'currency_troy Troy Purchased':
            iconClass = 'troy';
            break;
        case 'currency_litecoin Litecoin Purchased':
            iconClass = 'litecoin';
            break;
        default:
            iconClass = 'default';
    }

    // Create a new row for the table
    const newRow = document.createElement('tr');

    // Set the new row's HTML content
    newRow.innerHTML = `
        <td>
            <div class="transaction">
                <span class="material-icons icon ${iconClass}">${iconClass === 'ethereum' ? 'currency_exchange' : 'currency_bitcoin'}</span>
                <span>${coin.split(' ')[1]} Purchased</span>
            </div>
        </td>
        <td>${amount}</td>
        <td>USD $${total}</td>
        <td><span class="status ${status.toLowerCase()}">${status}</span></td>
        <td>${formattedDate}</td>
    `;

    // Append the new row to the table body
    transactionList.appendChild(newRow);

    // Clear the form after submission
    form.reset();


     // Close the popup overlay after form submission
     popupOverlay.style.display = 'none';
});

 