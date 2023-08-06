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
//var anotherFunction = myCustomObj.anotherObj.value.bind(myCustomObj);
//anotherFunction();


// Another Example:

var abdulKarim = {
    name: 'Abdul Karim',
    dob: 1996,
    age: function (currentYear, msg) {
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old');
    }
}

var abdulRahim = {
    name: 'Abdul Rahim',
    dob: 1986
}

var abdulRahimAge = abdulKarim.age.bind(abdulRahim, 2023);
abdulRahimAge('Hello World !!!!!');

var abdulRahimAgeCalculate = abdulKarim.age.bind(abdulRahim);

abdulRahimAgeCalculate(2023, 'Hello Fellow !!!!!');