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

function calcAgeRetirement (year) {
	const now = new Date().getFullYear();
	return [ now - year, 65 - (now - year)];
}; 


var [age, retiremment] = calcAgeRetirement(1990);

console.log (`The age is ${age} and retiremment duration is ${retiremment}`);
