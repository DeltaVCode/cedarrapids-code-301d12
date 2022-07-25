'use strict';

//Hoisting
//vanilla Js function declaration
//whats the difference between the two when it comes to hoisting?


//will this work
console.log(add(4,7)); //works because of hoisting.
console.log(myAdd(4,7)); // can not call before defining it.

// answer:
function add(a, b){
  return a + b;
}

//answer: 
//vanilla JS function expression
let myAdd = function(a,b){
  return a + b;
};


//arrow functions 
// multi line needs curly braces. 
let arrowAdd = (a,b) => {
  //'this' is refering to things outside the function. Can be useful with classes. Scope is on the class object. we will talk about that more later. 
  return a + b;
};

// or we can write it this way
//no return needed no {needed}
let arrowAdd2 = (a,b) => a + b;

console.log(arrowAdd2(5, 7));  



//Lets talk about classes. 
//Lets create a constructor

function Musician(artist, style){
  this.artist = artist;
  this.style = style;
  this.isAmazing = true;
}

let beyonce = new Musician('Beyonce', 'RB soul');

console.log('our new object',beyonce);



//class constructor

class MusicianClass {
  constructor(artist, style){
    this.artist = artist;
    this.style = style;
    this.isAmazing = true;
  }
  //then demo ()
  awesome = () => {
    console.log('I\'m a rock star!');
  }
}

let classBeyonce = new MusicianClass('Beyonce', 'RB soul');
console.log('our new class object', classBeyonce);


//whats nice about classes is that our class constructors can be extended. 
//parent child classes where children can inherit there parents attributes. 

class MusicGroup extends MusicianClass{
  constructor(artist, style, members){
    super(artist, style, members);
      this.members = members;
     
  }
  //then demo ()
  wow = () => {
    console.log('We will Rock you!')
  }
}

let beatles = new MusicGroup('Beatles', 'Rock and Roll', ['john', 'paul', 'george', 'ringo']);

console.log('what did we inherit from MusicClass?',beatles);

beatles.awesome();// works because its extended

beyonce.wow();// will not work, beyonce only has access to their class 