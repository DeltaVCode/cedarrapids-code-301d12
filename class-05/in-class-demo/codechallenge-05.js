//Array.prototype.Reduce
//arr.reduce(callback (accumulator, currentValie, [, index[, array]] )[,initialValue])

// The salad chopper of js
//takes an array and turns it into 1 new thing
//take an array and reduces it into just one number : sum, average, count, total of all the string lengths. 
//take an array and reduce it into another array: do filter or map or anything like that
//take in an array and reduce it into a concatenated string : a bunch of names into a stringwith all of them. 
//Take a bunch of charactersinto one string. An array of objects of pizzas places into a string of pizza places who are similiar. 
//take an array and put every value into one new object. 
// is a bit different that map and forEach 



// reduce call back  

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

//accumulator is the salad we are trying to make 

const nums = [5, 10,15,20,25,30];


nums.reduce((accumulator, value, index, array) => {
  console.log('accumulator', accumulator);
  console.log(' ');
  console.log('value', value);
  console.log('index', index);
  console.log('array', array);
});

//our index starts at zero
//our value starts at one. 

//on the first pass accumulatoris set to arr[0]
//we start with current value at arr[1]
//our next accumulator is the result of acc 5 and value 10 

nums.reduce((accumulator, value, index, array) => {

console.log('acc', accumulator, 'val', value, 'index', index, 'array', array);
return accumulator + value;
//next acc is the result of the first function. 
});


const characters = ['a', 'c', 'c', 'u', 'm', 'u', 'l', 'a', 't', 'o', 'r'];

characters.reduce((accumulator, value) => {
  console.log(accumulator, value);
  return accumulator + value;
});
//can be used to build things. 


//reduce allows us to provide an optional second argument to reduce with a starting value. 

nums.reduce((acc, value) => {
  console.log(acc, value);
  return acc + value;
});

nums.reduce((acc, value) => {
  console.log(acc, value);
  return acc + value;
}, 10000);

//can start at specified number
//if I provide a starting value it will start at the first iteration at zero instead. 

//reduce handles the work and is more difficult to read when writing in 

nums.reduce(makeABigNum, 1000000000);

// a call back or a call back with a starting value. 
function makeABigNum(acc, value){
  console.log(acc, value);
  return acc + value;
}

nums.reduce(makeABigNum);



//reduce takes in a call back function. 


// with an array of [3,6,9,12].reduce(callback);

// the callback(3,6) =>  9 then 
// the callback(9,9) => 18 then 
// the callback(18, 12) => 30 



// another option we can call instead with a call back with a number say a 100 

// - the end result instead of starting at 0 and 1 . 
// - it will pass in the second argument.

// the callback(100,3) =>  103 then 
// the callback(103,6) =>  109 then 
// the callback(109, 9) => 118 then 
// the callback(118, 12) => 130 is the final return.


// To do for array
//lets do something like a map()
//take in the numbers and multiply times 2

nums.reduce(putItInArrayTimesTwo, []);


                              //  []          5   
function putItInArrayTimesTwo(accArray, valueNumber){
  console.log(accArray, valueNumber);
  //starts as an array and then becomes undefined. 
  // what is the acc for the next function call 
accArray.push(valueNumber * 2);

//so add the return 
return accArray;
}

nums.reduce((acc, val) => {
  return acc + `this is a num ${val} `;
}, '');




///////////////
const students = ['Bart', 'Encinoman', 'Spicoli', 'BudAndDoyle'];



function makeGradeObject(accObj, valuePerson){
  accObj[valuePerson] = '100%';
  return accObj;
}
students.reduce(makeGradeObject, {});
///////////////

const students2 = [{name: 'Bart'}, {name:'Encinoman'}, {name:'Spicoli'}, {name:'BudAndDoyle'}];


function makeGradeObject2(accObj, valuePerson){
  accObj[valuePerson.name] = valuePerson.name.length * 700 /100;
  return accObj;
}
students2.reduce(makeGradeObject2, {});

// write code easier while its easy to read, everything that can be done with a reduce can be done with fro loop