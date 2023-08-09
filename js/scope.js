function globalFunction() {
    console.log(`This is global function.`);

    function localFunction() {
        console.log(`This is local function.`);
    }
    localFunction();
}
//globalFunction();

// Lexical Scoping

function parentFunction() {
    let a = 6;
    function childFunction() {
        let b = 8;
        let sum = a + b;
        return sum;
    }
    const result = childFunction();
    console.log(result);
}
parentFunction();