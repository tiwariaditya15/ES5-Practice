console.log ('From serpent.js');
/*
// ES5
console.log("Application has started...");
var box5 = {
	
	position : 1,
	color : 'green',
	clickMe : function () {
		var self  = this;
		document.querySelector('.green').addEventListener("click", function() {
			var str = "This is " + self.position + " box and it's color is " + self.color + " .";
			alert(str);
		});
	},
};

box5.clickMe();


// ES6

const box6 = {
	color : 'green',
	position : 1,
	clickMe : function () {
		document.querySelector('.green').addEventListener('click', () => {
			const str = `The box position is ${this.position} and it's color is ${this.color}`;
			alert(str);
		});
	},
};
*/

//Another example of use of this lexical approach
/*
var Person = function (name) {
	this.name = name;
};

Person.prototype.myFriends = function(friends){
	const arr = friends.map ( (el) => {
		return `The ${this.name} is friend with ${el}`;
	}) ;
	
	console.log (arr);
}; 

const frn = [ 'kiran', 'pratik', 'akshay'];
new Person('Aditya').myFriends(frn);
*/

//Destruturing in ES5

/*
var gInfo = ['aditya', 1999];
var gInfoName = gInfo[0];
var gInfoYear = gInfo[1];

//console.log (gInfoName + " " + gInfoYear);

//Destructuring in ES6 in more powerfull way

const [ name, year] = ['aditya', 1999];

console.log (`My name is ${name} and year of birth is ${year}`);

const obj = {
	firstName : 'aditya',
	lastName : 'tiwari',
};


const {firstName, lastName} = obj;

console.log (`My name is ${firstName} ${lastName}.`);

const {firstName:a, lastName:b} = obj;

console.log (`My name is ${a} ${b}.`);
*/

//More Practical way of using destructuring 

/*
function calcAgeRetirement (year) {
	const now = new Date().getFullYear();
	return [ now - year, 65 - (now - year)];
}; 


var [age, retiremment] = calcAgeRetirement(1990);

console.log (`The age is ${age} and retiremment duration is ${retiremment}`);
*/


//Operation difference between arrays in ES5 and ES6 

//First selecting all boxes over html page
/*
var boxes = document.querySelectorAll('.box');

//Now this querySelectorAll method return "NodeList" so we cant access each element using forEach
//To convert boxes nodelist in array using ES5 way

var boxesArray5 = Array.prototype.slice.call(boxes);

boxesArray5.forEach(function(cur) {

	cur.style.backgroundColor = 'aqua';
});


//now to do same operation done in ES5 would go like this ES6

const boxesArray6 = Array.from(boxes);

//using an for of loop with array

for (const curEl of boxesArray6) {
	if ( curEl.className === 'box blue') {
		continue;
	}
	curEl.style.backgroundColor = 'grey';
	curEl.textContent = 'I\'m changed..';
}
*/

//Using spread operator of ES6

//first problem with ES5
/*
function calAge(a, b, c, d) {
	return a + b + c + d;
};

var sum1 = calAge(28, 23, 19, 31);
console.log (sum1);

var ages = [28, 23, 19, 31];
var sum2 = calAge.apply(null, ages);
console.log(sum2);

//Doing that same stuff in ES6
const ages6 = [ 1, 28, 23,19, 31];

//the spread operator sybolically known as "..." divides all components of array in singleton form
const sum3 = calAge(...ages6);
console.log (sum3);

//another use of this spread operator is to join two different array's

const collegeNm = ['kiran', 'aditya', 'chetan'];
const collegeBhavans = ['akshay', 'phill', 'jack'];
const collegeBsc = [...collegeNm, ...collegeBhavans];
console.log(`${collegeBsc} and length of this array is ${collegeBsc.indexOf('jack')}.`);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];


Array.from(all).forEach( (cur) => {
	cur.style.color = 'yellow';
});
*/

/////////////////////////////////////////////////////////////////////////////////////////////

//using rest parameter

//technically spread and rest they both are same operators but the difference just lies where are they used 
//in above example we used spread operator in while calling function ie. it converted an array into it's component
//while rest is used in function declaration when we do not know the exact number of parametrs that are coming


//in ES5

/*
function isFullAge () {
	var arr = Array.prototype.slice.call(arguments);
	arr.forEach(function(cur){
		console.log(( 2018 - cur) >= 18 );
	});
};

//isFullAge(1989, 2002, 2006, 1999, 1949);

//In ES6 more conenient way using rest operator

function fullAge6( ...years) {
	years.forEach( cur => console.log((2018 - cur) >= 18));
};

fullAge6(1989, 2002, 2006, 1999, 1949);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////

//default parameters

//In ES6

/*
var SmithPerson = function ( firstName, yearOfBirth, lastName = "Smith", nationality = "american") {
			this.firstName = firstName;
			this.lastName = lastName;
			this.yearOfBirth = yearOfBirth;
			this.nationality = nationality;
};


var jhon = new SmithPerson('jhon', 1990);
console.log(jhon);

var emily = new SmithPerson('emily', 1983, 'Diaz', 'spanish');
console.log(emily);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

//maps in ES6
//maps were introduced in ES6 as key-value data structure

const profession = new Map();

profession.set(1, 'programmer');
profession.set(2, 'blogger');

profession.set('pankaj','programmer');
profession.set('ragini', 'teacher');
profession.set('aditya', 'student');
profession.set('priya', 'housewife');
profession.set('qustion', 'What do pankaj do?');


//profession.forEach((curVal, associatedKey) => {console.log(`The key is ${associatedKey} and it's value is ${curVal}`);});

for (let [key, value] of profession.entries()) {
	if (key === 'qustion'){
		console.log(value);
	} 
	
	if (typeof(key) === 'number'){
		console.log(value);
	}
	
}

const ans = parseInt(prompt("What is your choice from 1 and 2?"));


	for (let [key, value] of profession.entries()) {
			if (key === 'pankaj') {
				if ( profession.get(ans) === value){
					console.log('Hurrayhh , answer is right..');
				}else {
					console.log('Please try again:-(');
				}
			}	
	}
