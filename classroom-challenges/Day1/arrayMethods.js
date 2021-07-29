// DAY 1 Code-along --ARRAY METHODS--

//Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

// Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

// Array methods allow us to manipulate elements in an arry. 
// They allow us to combine, remove, add,  update, and reverse.

//JOIN Method
/*
    the join method allows use to concatentate all of the elements in an array. It creates and then returns a string using a sperator. 
    NOTE: a seperator can be anything!
*/

let naruto = ["Naruto", "Sasuke","Sakura"]
console.log(naruto.join("*"));

let naruto = ["Naruto", "Sasuke","Sakura"]
console.log(naruto.join(" and "));



//REVERSE Method
/*
the reverse method reverses the order of the elements in an array. It sorts it in descending otder.
*/

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.reverse());

let naruto = ["Naruto", "Sasuke","Sakura"]
console.log(naruto.reverse());



//SPLIT Method
/*
Splits an element into multiple elements and returns an array. 
NOTE: It does not change the original array.
*/

let str = "I'm really tired this evening."
let strWords = str.split(" ");
console.log(strWords);


let strChar = str.split("");
console.log(strChar[8]);



//Replace Method
/*
    Used to search a cerain string and replace it with another.
*/

let wrong = "Who's monitor is this?";

let correct = wrong.replace("Who's","Whose");
console.log(correct);

let str2 = "I have experience with HTML, C#, and javascript. javascript is the one I love the most.";
let strNew = str2.replace(/javascript/gi, "JavaScript");
console.log(strNew);

//g stands for global and i stands for case sensitive 

//Splice METHOD
/*
We use the splice method when we want to delete a ceratin element and/or replace them with other elements that we create
*/

let friends = ['Logan','Jordan','Dillon','Chris','Andrew','Kevin'];
let rmoved = friends.splice(2,1);
console.log(friends)


//Map Method 

/*
Used to update all the elements in an array based on a function that you create.
NOTE: This method does NOT create a new array.
*/

let wheelOfTime = [
    {firstName: "Rand", lastName: "al'Thor"},
    {firstName: "Egwene", lastName: "al'Vere"},
    {firstName: "Nynaeve", lastName: "al'Meara"},
];

let charsName = wheelOfTime.map(function(name) {
    return [name.firstName, name.lastName].join(" ");
});
console.log(charsName)
console.log(wheelOfTime);


//IndexOf Method

/*
    Used to dtermine wher an element is in an arry.
*/

let alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

let alphaB = alphabet.split(" ").indexOf("b");
 alphaB += 1;
 console.log(alphaB);



//Filter Method

/*
    Used to filter out certain elements. Returns a value of true or false.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(function(item){
    if(item % 2 === 0) {
        return true;
    } else{
        return false;
    }
});

console.log(even);


//Every Method

/*
    Use this method if  you want to check if every element in the arrway passes a condition.
*/

let ages = [34, 27, 19, 43, 22, 66];
let over18 = ages.every(function(element){
    return element > 18;
});
console.log(over18);