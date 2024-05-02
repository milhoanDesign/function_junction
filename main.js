document.addEventListener("DOMContentLoaded", function() {
    const placeOrderButton = document.getElementById('placeOrder');
    const addBerriesButton = document.getElementById('addBerries');
    const clearListButton = document.getElementById('clearList');
    const orderList = document.getElementById('orderList');

    let berriesAdded = false;

    placeOrderButton.addEventListener('click', function() {
        const customerName = document.getElementById('customerName').value;
        const pancakes = parseInt(document.getElementById('pancakes').value);
        const eggs = parseInt(document.getElementById('eggs').value);

        if (customerName.trim() === '' || isNaN(pancakes) || isNaN(eggs)) {
            alert('Please enter valid input for all fields.');
            return;
        }

        let berriesStatus = berriesAdded ? 'Add Berries' : 'No Berries';
        const orderText = `${customerName} will have ${pancakes} pancake${pancakes !== 1 ? 's' : ''} and ${eggs} egg${eggs !== 1 ? 's' : ''}.`;

        const listItem = document.createElement('li');
        listItem.textContent = orderText;
        orderList.appendChild(listItem);

        // Clear input fields
        document.getElementById('customerName').value = '';
        document.getElementById('pancakes').value = '';
        document.getElementById('eggs').value = '';


        // Focus on customer name input field
        document.getElementById('customerName').focus();
    });


    clearListButton.addEventListener('click', function() {
        orderList.innerHTML = ''; // Clear the list
    });
});
