// Function to greet the user
function greetUser(name) {
    return "Hello, " + name + "!";
  }
  
  // Function to calculate the sum of two numbers
  function sum(a, b) {
    return a + b;
  }
  
  // Function to calculate the factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Call the functions and display the results
  document.getElementById('output').innerHTML = 
    greetUser('John') + '<br>' +
    'The sum of 5 and 3 is: ' + sum(5, 3) + '<br>' +
    'The factorial of 4 is: ' + factorial(4);
  