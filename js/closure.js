function closureFunc() {
    let x = 10;
    function anotherFunc() {
        let y = 20;
        console.log(`Sum = ${x + y}`);
    }
    return anotherFunc;
}
let returnedFunc = closureFunc();
// returnedFunc();

// function aParentFunction(a) {
//     return function (b) {
//         console.log(`Sum = ${a + b}`);
//     }
// }

// Above codes with arrow function:
const aParentFunction = (a) => {
    return function (b) {
        console.log(`Sum = $ {a + b}`);
    }
}

aParentFunction(6)(4);