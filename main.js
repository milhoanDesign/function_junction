// Create a function that prints the users name
function sayHi(name){
    return `Hello, ${name}!`
};

// Function to calc the sum of 2 numbers
function calculate(a, b){
    return(a + b);
};

// Function to return the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1){
        return 1; 
    } else {
        return n * factorial(n - 1);
    }
}; 

// Define variables for the numbers
const num1 = 2;
const num2 = 5;
const num3 = 15;

// Call the functions with the variables and display the results
document.getElementById('output').innerHTML =
    sayHi('Billy Smith') + '<br>' +
    `The sum of ${num1} and ${num2} is: ${calculate(num1, num2)}.` + '<br>' +
    `The factorial of ${num3} is ${factorial(num3)}`;


const pancakes = 0; 
const eggs = 0; 

function pancackesAndEggs (pancakes, eggs) {
    return pancakes + eggs;
}

document.getElementById('output').innerHTML = 
    
; 