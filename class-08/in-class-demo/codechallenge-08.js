//Regex or regular expressions is a simplified string searching language. It can be used to perform complex searches of string with just a few characters. 

//not a js thing, its regex thing, it is loaded into almost every language
//a bunch of if statements in short format


// const person = 'bobby';
// const regexExample = /bobby/;   //true

// const person = 'bobby';
// const regexExample = /bobby boy/; //true

// const person = 'boy band bobby boy ';
// const regexExample = /bobby boy/; //true
// by default it happens on the first true, but we can tell it to go forever with a g after the last / and is called a flag, flags and functionality to the search, /g is global
// const person = 'boy bobby boy band bobby boy ';
// const regexExample = /bobby boy/g;

//we can use another flag for upper or lower case 
const person = 'boy bobby boy band bobby boy ';
// const regexExample = /bobby boy/i;
const regexExample = /bobby boy/ig;




// simple to complex and we are going simple, 

// two important methods to know
// the first is a string.prototype.match(regex)
// that takes in a regex 
// this will find all matches.
console.log(person.match(regexExample));

// regex.prototype.text and it takes in a string. 
// this is testing for exsistence with returning a true or false
console.log(regexExample.test(person));









const numString = 'there were 5 people on the 6th and 1000000 went to the ball game with 9 innings';

// const numRegex = /5/g;
//  const numRegex = /\d\d/g;
//  const numRegex = /\d\d\d\d/g;
// so lets add the digit char.  /\d/g
 const numRegex = /\d+/g;

// so lets do a variable number. 
// go to regular expressions101.com
//quantifiers - how many?
// * : 0 or more 
// + : 1 or more
// ? : 0 or 1
console.log(numString.match(numRegex));



// .test(/^([a-zA-Z0-9\+_\-]+)(\.[a-zA-Z0-9\+_\-]+)*@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,6}$/)) 

let regex = /o/;
let string = 'Fox jumps over the lazy land';

let hasPattern = regex.test(string);
console.log('has pattern',hasPattern);

let reg = /\w*o\w*/gm;

let matches = string.match(reg) || [];
console.log('matches',matches);