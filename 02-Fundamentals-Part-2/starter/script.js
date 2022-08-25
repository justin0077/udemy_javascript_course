'use strict';

// Javascript Fundamentels Part 2 Assignment 1 "Functions"
function describeCountry(country, population, capitalCity) {
    const countryInformation = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return countryInformation;
}

const netherlandsInfo = describeCountry('Netherlands', '19', 'Amsterdam')
console.log(netherlandsInfo);

const germanyInfo = describeCountry('Germany', '33', 'Berlin')
console.log(germanyInfo);

const ItalyInfo = describeCountry('Italy', '25', 'Rome')
console.log(ItalyInfo);


// Javascript Fundamentels Part 2 Assignment 2 "Function Declarations vs. Expressions"

/* Declaration */
function percentageOfWorld1(population) {
    return `${(population / 8000) * 100}%`;
}

const populationNetherlands = percentageOfWorld1(190),
    populationGermany = percentageOfWorld1(330),
    populationItaly = percentageOfWorld1(250);

console.log(populationNetherlands, populationGermany, populationItaly);

/* Expression */
const percentageOfWorld2 = function (population) {
    return `${(population / 8000) * 100}%`;
}

const populationNetherlands2 = percentageOfWorld1(190),
    populationGermany2 = percentageOfWorld1(330),
    populationItaly2 = percentageOfWorld1(250);

console.log(populationNetherlands2, populationGermany2, populationItaly2);


// Javascript Fundamentels Part 2 Assignment 3 "Arrow Functions"
const percentageOfWorld3 = population => (population / 8000) * 100;

const populationNetherlands3 = percentageOfWorld3(190);
console.log(populationNetherlands3);


// Javascript Fundamentels Part 2 Assignment 4 "Functions Calling Other Functions"
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('Netherlands', 190);
describePopulation('Germany', 330);
describePopulation('Italy', 250);


// Javascript Fundamentels Part 2 Assignment 5 "Introduction To Arrays"
const population = new Array(250, 309, 660, 194);
console.log(population.length === 4);

const percentages = new Array(
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
)
console.log(percentages);


// Javascript Fundamentels Part 2 Assignment 6 "Basic Array Operations (Methods)"
const neighbours = new Array('Germany', 'Belgium', 'England');
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Luxembourg')) {
    console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('Belgium'));
neighbours[1] = 'France';
console.log(neighbours);


// Javascript Fundamentels Part 2 Assignment 7 "Introduction To Objects"
const myCountry = {
    country: 'Netherlands',
    capital: 'Amsterdam',
    language: 'Dutch',
    population: 190,
    neighbours: new Array('Germany', 'Belgium', 'England')
}


// Javascript Fundamentels Part 2 Assignment 8 "Dot vs. Bracket Notation"
console.log(
    `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);


// Javascript Fundamentels Part 2 Assignment 9 "Object Methods"
const myCountry2 = {
    country: 'Netherlands',
    capital: 'Amsterdam',
    language: 'Dutch',
    population: 190,
    neighbours: new Array('Germany', 'Belgium', 'England'),

    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        )
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);


// Javascript Fundamentels Part 2 Assignment 10 "The For Loop"
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter Number ${voter} is currently voting`);
}


// Javascript Fundamentels Part 2 Assignment 11 "The For Loop"
const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);


// Javascript Fundamentels Part 2 Assignment 12 "Looping backwards and Loops in Loops"
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}


// Javascript Fundamentels Part 2 Assignment 12 "The While Loop"
const percentage3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentage3.push(perc);
    i++;
}
console.log(percentage3);


// Javascript Fundamentels Part 2 Coding Challenge #1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins...')
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111)

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);


// Javascript Fundamentels Part 2 Coding Challenge #2
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = new Array(125, 555, 44);
const tips = new Array(
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
);

const totals = new Array(
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
);

console.log(bills, tips, totals);


// Javascript Fundamentels Part 2 Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}


// Javascript Fundamentels Part 2 Coding Challenge #4
const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip2(bills2[i]);
    tips2.push(tip);
    totals2.push(tip + bills2[i]);
}

console.log(bills2, tips2, totals2);

const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage2[2, 3, 7]);
console.log(calcAverage2(totals2));
console.log(tips2);




