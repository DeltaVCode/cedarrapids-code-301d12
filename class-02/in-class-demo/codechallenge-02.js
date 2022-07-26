//Array.prototype.map

/*
let newArray = arr.map(callback(currentValue[, index[, array]]){
//return element for newArray, after executing something
});

identical in its structure to forEach
iterates over every element
it puts items in a new array as it iterates, one for every element no matter what an array of 5 things as the input will always have 5 things as the output. It's a forEach that makes arrays. 

The callback function takes whatever you return and puts it in the new array

map() is a built in method to all arrays. 

 */

const nums = [10, 30, 35, 50, 88];

//one line function the value is implicit. 
const output = nums.map(() => 'I was returned!');

console.log('output: ',output);
console.log('nums: ', nums);



//A Tenet of functional programming is that we dont change the original thing. 
nums.map((value, index, array) => {
  console.log('V-I-A',value, index, array);
  return value * 7;
});


nums.map(number => number * number);



//we can pass in a named callback
function callback(value, index){
  // return value * value;
  //for below
  return value * index;
}

nums.map(callback);

//Here is the long way to do a map.....
function fakeMap(array, callback){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

fakeMap(nums, callback);

//map() is great to pass info into our constructors, map will work with our labs, one of the goals for today is to use it this week. 