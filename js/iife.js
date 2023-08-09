// IIFE = Immediately Invoked Function Expression: 

(function sumFunction(a, b) {
    let sum = a + b;
    //console.log(sum);
})(10, 20);

function callMyName(name, callback) {
    let myAge = 20;
    callback(myAge);
    console.log(`Is it interesting? Yes, it is Ms. ${name}`);
}
function hello(age) {
    console.log(`I am passed through argument and my age is ${age}`);
}
//callMyName('Amima Hoque', hello);

// Returning function from a function:

function welcomeMessage(name) {
    console.log(`Welcome Mr. ${name}`);

    return function options(menu) {
        console.log(`Do you like ${menu}, Mr. ${name} ?`);
    }
}
welcomeMessage('Zarif Abdullah')('Tea');

