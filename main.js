// JavaScript file (script.js)
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('displayMessageButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function () {
        // This is the outer function
        function showMessage() {
            // This is the nested function
            function generateGreeting() {
                return "Hello! You've clicked the button.";
            }
            message.textContent = generateGreeting();
        }

        showMessage();
    });
});
