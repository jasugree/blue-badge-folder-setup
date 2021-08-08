/*
- SPREAD OPERATO
    --The spread operator pulls out all elements in an arrya and gives them back to you as a standalone list of elements.
    --It takes an iterable object and/or object and expands it into individual elements. The spread operator is typically uised to make copies of an array/obect.
    --Denoted by the ellipsis(...)
*/

let students = ["Jake Greene", "Stephanie Falls"];
//wrong syntax
// ...students

let copiedStudents = [...students]; //The spread operator is good at making a new copy of that array
// let copiedStudents = [students]; //NOT THE SAME AS SPREAD OPERATOR!!!
console.log(copiedStudents, "Line 14");
students.push("Leslie Phillips");
console.log(students, "Line 16");

// console.log(students, copiedStudents);

const persons = [
	{ name: "Taylor", age: 300 },
	{ name: "Nick", age: 25 },
];

const copiedPersons = [...persons];

persons.push({ name: "Quinn, age: 24" });
console.log(persons, copiedPersons);

//MATH
console.log(Math.min(1, 5, -3));

let prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); //NaN = Not a Number
console.log(Math.min(...prices)); // Standalone elements

//CONCATENATE ARRAYS
let sent1 = [1, 2, 3, 4, 5];
let sent2 = [5, 6, 7, 8, 9];

let concat = [...sent1, ...sent2];
console.log(concat);

//PASS ARGUEMENTS
let sentence = ["Oh Hi Mark", false, 2];

function sent(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

sent(...sentence);

//COPY AN OBJECT
let obj = { a: 1, b: 2, c: 3 };
copyObj = { ...obj };
// copyObj = {obj} ====> This will not work, it will become an object within an object
console.log(copyObj);

//MERGE OBJECTS
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4, e: 5, f: 6 };

let concatObj = { ...obj1, ...obj2 };
console.log(concatObj);

let obj3 = { a: "Hello", b: "Mark", c: "!" };
let obj4 = { a: "Goodbye!" };
let merge = { ...obj3, ...obj4 };

console.log(merge); //Similar Keys that are latter defined will take precidence and be placed first

let obj5 = { a: 1, b: 2, c: 3 };
let copyObj5 = [...obj5]; //This is going to throw an error.

console.log(copyObj);

let sum;
function sumAll(a, b) {
	for (let i = a; i < b; i++) {
		sum += i;
		console.log(sum);
	}
	return sum;
}

console.log(sumAll(1, 4));
