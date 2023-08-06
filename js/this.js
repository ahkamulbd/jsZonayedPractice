function helloThis() {
    'use strict';
    //console.log(this);
}
helloThis();

/* It's another practice */

function unNamed() {
    this.name = 'Zonayed Ahmed';
}
unNamed();
//console.log(name);

/* It's another practice */
var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'student',
    // msg: function () {
    //     console.log(this);
    // }
    anotherObj: {
        name: 'Ahmed Zonayed',
        msg: function () {
            //console.log('My name is ' + this.name);
        }
    }
}
myCustomObj.anotherObj.msg();

/* It's another practice */

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log(this);
        }
    }
}
myCustomObj.anotherObj.value();

// This is another practice

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    msg: function () {
        //console.log(this);
    }
}
myCustomObj.msg();

// Another practice:

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log(this);
        }
    }
}
//myCustomObj.anotherObj.value.call(myCustomObj);
//myCustomObj.anotherObj.value.call(anotherObj);

