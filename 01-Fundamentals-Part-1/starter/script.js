// Javascript Fundamentels Part 1 Assignment 1 "Values & Variables" 
let country = 'Netherlands';
let continent = 'Europe';
let population = 19000000;

console.log(country);
console.log(continent);
console.log(population);

// Javascript Fundamentels Part 1 Assignment 2 "Data Types"
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Javascript Fundamentels Part 1 Assignment 3 "Let, Const & Var"
language = 'Dutch';
// const country = "Netherlands";
// const continent = "Europe";
isIsland = true;

// Javascript Fundamentels Part 1 Assignment 4 "Basic Operators"
console.log(population / 2);
population += 1;
console.log(population);
let finland = 6000000;
console.log(population > finland);
let averagePopulation = 33000000;
console.log(averagePopulation > population);
const description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
console.log(description);

// Javascript Fundamentels Part 1 Assignment 5 "Operator Precedence"

// Javascript Fundamentels Part 1 Assignment 6 "Strings and Template Literals"
const description2 = `${country} is in ${continent} and it's ${population} people speak ${language}`;
console.log(description2);

// Javascript Fundamentels Part 1 Assignment 7 "Taking Decisions If / Else Statements"












// Javascript Fundamentels Part 1 Coding Challenge #1 

// const markWeight = 78;
// const markHeight = 1.69;

// const JohnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;

const JohnWeight = 85;
const johnHeight = 1.76;

const BMIMark = markWeight / markHeight ** 2;
const BMIJohn = JohnWeight / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// Javascript Fundamentels Part 1 Coding Challenge #2 
if (markHigherBMI) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's! ${BMIJohn}`)
} else {
    console.log(`John's BMI${BMIJohn} is higher than Mark's! ${BMIMark}`)
}