var isTall = false;
var isLongSighted = false;

// A. LOGICAL OPERATORS
// AND => && => evaluate to true only if both is true
// OR => || => evaluate to true if either is true
// NOT => ! => negates the boolean
console.log(`Sharon is either tall or sighted: ${isTall || isLongSighted}`)
console.log(`Sharon is NOT tall: ${!isTall}`)

// B. ARRAYS => an ordered collection of items of the same type
// syntax => identifier name = [value1, value2, value3, .., valueN]
const scores = [90, 88, 98, 70, 5, 100];
console.log(`Student Scores: ${scores}`)
const secondPerson = scores[5];
console.log(`Second person scored: ${secondPerson}%`)
// change 3 person value
scores[2] = 99
console.log(scores)
// add index 6
scores[6] = 100
console.log(scores)
// length/size of array
let numItems = scores.length;
console.log(`Size of array: ${numItems}`);

// add non-contiguous index e.g 20
scores[20] = 85
console.log(scores)
console.log(`Empty slot contains ${scores[20]}`)

// length/size of array
numItems = scores.length;
console.log(`Size of array: ${numItems}`);

// ARRAY METHODS => functionalities provided by JavaScript to facilitate operations on arrays

const artists = ['ngesh', 'khaligraph', 'beiber', 'kithungo'];
console.log(artists)

// push -> adds an item to the end of list
artists.push("rose muhando", "don moen");
console.log(artists)

// unshift -> adds an item to the beginning of list
artists.unshift("maima", "derulo", "leeland", "drake")
console.log(artists)

// pop -> removes last item from list
artists.pop()
console.log(artists)

// shift -> removes very first item from list
artists.shift()
console.log(artists)

// destructive Array Methods => act on the same array
// non-destructive Array Methods => create a new one

// concat -> join multiple arrays {into a new one}
const mix = scores.concat(artists)
console.log(mix)

const arrX = [0,2,4,6,8,10]
const arrY = [1,3,5,7,9,11]
const arrZ = [2,3,5,7,11,13]

const completeMix = arrX.concat(arrY, arrZ, mix)
console.log(completeMix)


// find index of a value in an array
// indexOf -> get index of value or -1 if absent
const drake = artists.indexOf("DRake");
console.log(`Drake's index is ${drake}`)

// change array into string (.join())
const joined = artists.join()
console.log(joined)

// C. OBJECTS => a set of key-value pairs

// indentifier name = {
//     key: value,
//     key2: value2,
//     ...
// }

const musician = {
    name: 'Arya Starr',
    age: 24,
    hitSong: 'Rush',
    views: [20, 12, 8, 900, 20],
    isFemale: true,
    bio: {
        height: 150,
        weight: 60,
        temp: 27
    }
}
console.log(musician);

// find item in object
// C1. using dot(.) operator
const nameOfMusician = musician.name
console.log(nameOfMusician)
musician.name = 'wakadinali'
console.log(musician)
// C2. using (indexing / straight / square) brackets []
const age = musician["age"]
console.log(age)
musician["age"] = 26
console.log(musician)

// delete property => delete
delete musician["hitSong"]
console.log(musician)

// get nested object
console.log(musician.bio.weight)

const houses = {
    0: 'Kevin',
    1: 'Janice',
    2: 'Eric',
    20: 'Joan',
    'X_!w': 'Patrick',
    '1ian105': 'sadasda'
}
houses["1ian105"]
// valid variable name =>
// 1. must start with an alphabet char or _
// 2. cannot contain any special character that is not underscore (_)


// D. CONDITIONALS AND LOOPS
const h = 156
let minH = 155

if(h >= minH){
    console.log("You are allowed to ride this rollercoaster")
} else if(h >= 130 && h < minH){
    console.log("You are short but you can swim in the pool")
} else if(h >= 100 && h < 130) {
    console.log("You are too short to ride this rollercoaster. Please go home!!")
} else {
    console.log("You seem to be a child")
}

// TODO: switch - case statement

// loops - structure that allows for repetitive operations
// while-loop
// for-loop

// syntax: while(boolean_expression){ code to execute }
let i = 1;
while(i <= 10){
    console.log(`hello ${i}`)
    i = i + 1;
}







