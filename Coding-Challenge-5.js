//Coding Challenge 5


//super class for parks and streets coming under town
class town {
	constructor ( name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

//class for parks
class Park extends town {

	constructor(name, buildYear, numberOfTrees, area) {
		super(name, buildYear);
		this.numberOfTrees = numberOfTrees;
		this.area = area;
	}
	
	calDensity() {
		console.log(`The density of ${this.name} park is ${this.numberOfTrees/this.area}`);
	}
	
}


//class for street
class Street extends town{
	
	constructor(name, buildYear, lengthOfStreet, type = 'normal') {
		super(name, buildYear);
		this.lengthOfStreet = lengthOfStreet;
		this.type = type;
			
	}
	
	calAverage() {
		console.log(`The street ${this.name} has ${this.lengthOfStreet} and is ${this.type} street.`);
	}
	
}

let park = [new Park('Green', 2001, 995, 1000), new Park('oak', 2005, 1295, 1100), new Park('national', 2011, 1400, 1500)];

let streets = [new Street('Willington Lane', 2002, 100, 'small'), new Street('Deerfield', 2007, 2000, 'big'), new Street('Albama State', 1989, 500, 'huge'), new Street('Washington Lane', 1900, 50)];
/*
park[0] = new Park('Green', 2001, 995, 1000),
park[1] = new Park('oak', 2005, 1295, 1100);
park[2] = new Park('national', 2011, 1400, 1500);
*//*
park[0].calDensity();
park[1].calDensity();
park[2].calDensity();
*/

//Generic function to calculate total and average age 
function calc(arr) {
	const sum = arr.reduce( (prev, cur, index) =>  prev + cur , 0);
	return [sum, sum/arr.length];
}	

//report for parks
function reportParks(park){
	
		console.log("-------------------------------------------PARKS---------------------------------------------");
		//show density
		park.forEach( (cur)  => cur.calDensity());

	
		//calculating average and total ages of parks
		const ages = park.map ( (cur) =>	 new Date().getFullYear() - cur.buildYear);
		const [total, average] = calc(ages);
		console.log(`Total age of trees are ${total} and average age is ${average}.`);

		
		//parks having more than 1000 trees
		for (let cur of park) {
			if (cur.numberOfTrees >= 1000) {
				console.log(`The ${cur.name} park has more than 1000 trees.`);
			}
		}
}


reportParks(park);


//report for streets
function reportStreets(streets) {
	console.log("-----------------------------------STREET---------------------------------------------------------");
	//total and average lenngth of street
	const lengths = streets.map( (cur) => cur.lengthOfStreet);
	const [total, average] = calc(lengths);
	console.log(`The total length of streets in town is ${total} and average legth of streets are ${average}`);
	
	//classify street
	
	for (let cur of streets) {
		console.log(`The size of ${cur.name} street is ${cur.type}`);
	}
}

reportStreets(streets);

console.log('Reached end of file');