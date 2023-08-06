function sumMachine(a, b) {
    let sum = a + b;
    return sum;
}
//console.log(sumMachine(2, 3));

function callMyName(name, callback) {
    let myAge = 20;
    callback(myAge);
    //console.log(`Is it interesting? Yes it is Ms. ${name}`);
}
function hello(age) {
    //console.log(`I am passed through argument and my age is : ${age}`);
}

callMyName('Amima Hoque', hello);

function welcomeMsg(name) {
    //console.log(`Welcome Mr. ${name}.`);

    return function options(menu) {
        //console.log(`Do you like ${menu}, Mr. ${name} ?`);
    }
}
welcomeMsg('Hasan')('Tea');

function changeValue(a) {
    console.log(`Value of a inside function before changing: ${a}`);

    a = 10;
    console.log(`Value of a inside function after changing: ${a}`)

    return a;
}
let a = 100;
console.log(`Value of a before changing function is applied: ${a}`);
changeValue(a);
console.log(`Value of a after changing function is applied: ${a}`);