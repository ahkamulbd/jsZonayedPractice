// call() Method: 

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log('My name is ' + this.name);
        }
    }
}
//myCustomObj.anotherObj.value();
//myCustomObj.anotherObj.value.call(myCustomObj);  // by using call()


// Another call function used:

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log('My name is ' + this.name);
        }//.call(myCustomObj)
    }
}

// Another example of using call() with 2 object:

var abdulKarim = {
    name: 'Abdul Karim',
    dob: 1996,
    age: function (currentYear) {
        //console.log(this.name + ' is ' + (currentYear - this.dob + ' years old!'))
    }
}
//abdulKarim.age(2018);
//abdulKarim.age(2023);

var abdulRahim = {
    name: 'Abudl Rahim',
    dob: 1986
}

//abdulKarim.age.call(abdulRahim, 2023);


// Uses of apply method:

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log('My name is ' + this.name);
        }
    }
}
//myCustomObj.anotherObj.value.apply(myCustomObj);

var abdulKarim = {
    name: 'Abdul Karim',
    dob: 1996,
    age: function (currentYear, msg) {
        //console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old !');
    }
}

var abdulRahim = {
    name: 'Abdul Rahim',
    dob: 1986
}

//abdulKarim.age(2023, 'Hello World !!!!!!  ');
//abdulKarim.age.apply(abdulRahim, [2023, 'Hello World !!!!!!'])


// call() Method: 

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log('My name is ' + this.name);
        }
    }
}
//myCustomObj.anotherObj.value();
//myCustomObj.anotherObj.value.call(myCustomObj);  // by using call()


// Another call function used:

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log('My name is ' + this.name);
        }//.call(myCustomObj)
    }
}

// Another example of using call() with 2 object:

var abdulKarim = {
    name: 'Abdul Karim',
    dob: 1996,
    age: function (currentYear) {
        //console.log(this.name + ' is ' + (currentYear - this.dob + ' years old!'))
    }
}
//abdulKarim.age(2018);
//abdulKarim.age(2023);

var abdulRahim = {
    name: 'Abudl Rahim',
    dob: 1986
}

//abdulKarim.age.call(abdulRahim, 2023);


// Uses of apply method:

var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    anotherObj: {
        name: 'Ahmed Zonayed',
        value: function () {
            //console.log('My name is ' + this.name);
        }
    }
}
//myCustomObj.anotherObj.value.apply(myCustomObj);

var abdulKarim = {
    name: 'Abdul Karim',
    dob: 1996,
    age: function (currentYear, msg) {
        //console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old !');
    }
}

var abdulRahim = {
    name: 'Abdul Rahim',
    dob: 1986
}

//abdulKarim.age(2023, 'Hello World !!!!!!  ');
//abdulKarim.age.apply(abdulRahim, [2023, 'Hello World !!!!!!'])


