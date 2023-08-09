let name = 'Amima';

function firstFunc() {
    let welcome = 'First';
    secondFunc();
    console.log(`${welcome} ${name}`);
}
function secondFunc() {
    let welcome2 = 'Second';
    thirdFunc();
    console.log(`${welcome2} ${name}`);
}
function thirdFunc() {
    let welcome3 = 'Third';
    console.log(`${welcome3} ${name}`);
}
firstFunc();