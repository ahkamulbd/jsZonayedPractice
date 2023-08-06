// Swapping value:

var a = 10, b = 20;
//console.log(`Before swap: Value of a: ${a} and value of b: ${b}`);

function swapValue(a, b) {
    //console.log(`Before Swap inside function: Value of a: ${a} and Value of b: ${b}`);
    var temp = a;
    a = b;
    b = temp;
    //console.log(`After Swap inside function: Value of a: ${a} and Value of b: ${b}`);
}
swapValue(a, b);
//console.log(`After swap: Value of a: ${a} and Value of b: ${b}`);


// Swapping Value with object :

var obj = {
    a: 10, b: 20
}
console.log(`Before swap: Value of a: ${obj.a} and Value of b: ${obj.b}`);

function swap(x) {
    console.log(`Before Swap inside function: Value of a: ${x.a} and Value of b: ${x.b}`);

    var temp = x.a;
    x.a = x.b;
    x.b = temp;
    console.log(`After Swap inside function: Value of a: ${x.a} and Value of b: ${x.b}`);
}
swap(obj);
console.log(`After swap: Value of a: ${obj.a} and Value of b: ${obj.b}`);
