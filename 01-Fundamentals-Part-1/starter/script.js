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
if (population > 33000000) {
    console.log(`${country} 's is above average`)
} else {
    console.log(`${country} 's population is ${averagePopulation - population} million below average`)
}

// Javascript Fundamentels Part 1 Assignment 8 "Type Conversion And Coercion"
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Javascript Fundamentels Part 1 Assignment 9 "Truthy & Falsy"

// Javascript Fundamentels Part 1 Assignment 10 "Equality Operators: == vs ==="
/* const numNeighbours = prompt('How many neighbour countries does your country have?');

const numNeigbours = Number(prompt('How many neighbour countries does your country have?'));

if (Number(numNeigbours) === 1) {
    console.log('Only 1 border!');
} else if (numNeigbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */

// Javascript Fundamentels Part 1 Assignment 11 "Logical Operators"
if (language === 'english' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

// Javascript Fundamentels Part 1 Assignment 12 "Swtich"
switch (language) {
    case 'chinese':
    case 'manderin':
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('Number 4')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D')
}

// Javascript Fundamentels Part 1 Assignment 13 "The Conditional (Ternary) Operator"
console.log(`${country} is ${population > 33000000 ? 'above' : 'below'} average.`)


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


// Javascript Fundamentels Part 1 Coding Challenge #3

/* const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy!');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy!');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!');
// } */

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy!');
}


// Javascript Fundamentels Part 1 Coding Challenge #4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);