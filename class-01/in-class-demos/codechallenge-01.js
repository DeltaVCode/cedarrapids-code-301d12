
// - Array.forEach allows you to iterate through an array.
// - Where a normal `for` loop is "iterative";
// - forEach is more declarative or functional in nature.
// - It is implemented as a method on your array instance.
// - let myArray = ['a', 'b', 'c'];
// - myArray.forEach( ... );
// 1. forEach takes a callback as a parameter.
// 2. which in turn receives the value and the iterator, and runs it on every element.


  let myArray = ['a','b','c'];
  myArray.forEach( function(value, index) {
    console.log('index',index);       // 0, 1, 2
    console.log('array values',value);   // a, b, c
  });

// ## Caveats and Notes
// - Applies the callback to each element
// - You cannot "Return" a value
// - You cannot "break" or "continue" as you can with a for loop
// - By default, forEach does not mutate the array
// - If you mutate it in process, you will have interesting issues

 

//Code Fellows in class Demo of For each.

let array = [2,5,6,78,3,9];
let newArray = [];

//we can declare inline anonymously
array.forEach((number) => {
  // newArray.push(number++) does this work? can not alter number in place.
  // it does not work with arrow functions. Quarks... we can not change.
  newArray.push(number + 1);
});
console.log('newArray: ',newArray);


//In 201 
for(let i = 0; i < array.length; i++){
  newArray.push(arr[i] + 1);
}






//for loop examples 

let people = ['John','Cathy','Allie','Zach'];

// For loops let us "break" away given a condition
for (let i = 0; i <= people.length-1; i++) {
  if (i === 2) {
    break;
  }
  console.log(people[i]);
}

// For loops let us "continue" (skip over an iteration) given a condition
for (let i = 0; i <= people.length-1; i++) {
  if (i === 2) {
    continue;
  }
  console.log(people[i]);
}

// In a function, you can return from a for loop...
function findIt(arr, pos = 0) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i === pos) {
      return arr[i];
    }
  }
  return null;
}
console.log( findIt(people,3) );


// Array.forEach is a method on an array that processes every element in the array
// with a callback.
// The callback is always given the current element's value and index
// in the array as args.
// IMPORTANT - It cannot "break", "continue" or "return"

people.forEach( function(item, index) {
  console.log('our item and ',item, index);
});


  
// ... or as an arrow function ...

people.forEach( (item,index) => {
  console.log('arrow function',item);
  console.log('arrow function',index);
});

// ... or as a named function 

let processor = (item, index) => { console.log('named function', item, index);};

people.forEach(processor);



// ### Arrow functions and syntax for interpolated strings
    // These are expression bodied functions 
    //(in here) are list of arguments  

 let f1 = () => 'hi';
 console.log('f1',f1);


 let f2 = (name) => 'Hi, $`{name}`';


 let e2 = function(name){
     return `hi ${name}`;
 } 




 let a = 10;
 let b = 10;

 let add = (a,b) => a + b;
 console.log('add arrow function: ', add(a,b));

//if there is only one parameter you do not need ()
// one single expression when called with the function
let abs = a => Math.abs(a);
console.log('absolute arrow function:  ', abs(a));

//multi line requires return statement
let abs2 = a => {
    let results = Math.abs(a);
    return results;
}
console.log('absolute2 arrow function:  ', abs2(a));


// - More than one line then you can use the {}.
// - This syntax is cleaner than the standard function set up.
// - Same thing happening, sometimes folks forget to add return.
// - So keep in mind that you may be missing a return in a normal function body.
// - Use the arrow function as a way to get practice.


// [1,2,3].map(n => n *2);


// let carCustomer ={
//     name: 'bob',
//     cars: ['Datsun 210','76 Cutlass Supreme'],
//     listCars: function(){
//        // this = carCustomer = bob 
//        // Last example.  with this. 
//        // you can set to another work around.
//         var that = this;
//         //and then in the function use the 'that' variable
//         //devs are like f 'this' but I dont know what this is there is a
//         // binding challenge.
//         //call bind and apply are ways to change this in a function but arrow 
//        //function will ignore those as well. 

//         //this.cars.forEach(function (car){
//         this.cars.forEach((car) => {
//             //OR 2 pass the this in here. above. in making an arrow function. 
//             //this should still be bob, but it is bound to another : the global object.
//             //two ways around 
//             //consol.log(that);
//             console.log(this);//global object...
//             console.log(`${this.name}'s car: `)
//             console.log(car);
//             //1 pass this into the forEach...
//             //this is a workaround  
//          })
//         // }, this)
//     }
// }


// carCustomer.listCars();













