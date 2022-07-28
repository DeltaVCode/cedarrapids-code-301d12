
//arr.sort([comparisonFunction]);
// Question: What does the sort method take in?
// Answer: it takes in a function
// Question : in MDN what does the [] mean?
// Answer: it means that optional arugment, it optional the sort works all on its own. 

const arr = [9,6,7,8,5];

console.log(arr.sort()); 
//numbers are now sorted. 

// sort is a destructive function
// sorts the elements in the original array. doesnt create a new array, on its own it sort alphabetically


const words = ['cat','dog','Elephant','Anteater','pig','shark'];

console.log(words.sort());

//Capitals come first for alphabetical order because javascript doesnt know what the alphabet is. it knows the unicode value of the letter. 
words.sort((left, right ) => {
  if(left.toLowerCase() > right.toLowerCase()){
    // leave it alone
  return 100;
  }else if(left.toLowerCase() < right.toLowerCase()){
  return -100;
  }else{
    //these must be equal
  return 0;
  }  
});










const bigNums = [9, 90, 99, 10, 1, 129, 20, 30, 50, 60, 6, 7,8];


console.log(bigNums.sort());


//this is a common approach you will find online. 
bigNums.sort((first, second) => first - second);

//call back function has one job. to return a number greater than zero, less than zero or equal to zero, 
//this will decide to swap, leave alone, or skip ahead in the sort

// bigNums.sort((first, second) => {
//   if(true) {
//      return 1;
//   } else if(false){
//       return -1;
//   } else {
//    return 0;
//   }
// });

//lets write a comparison as we work through 
// bigNums.sort((first, second)=>{
// if(second > first){
//   // leave it alone
// return 1;
// }else if(first > second){
// return -1;
// }else{
//   //these must be equal
// return 0;
// }

//flip the signs 
bigNums.sort((first, second)=>{
if(second < first){
  // leave it alone
return 1;
}else if(first < second){
return -1;
}else{
  //these must be equal
return 0;
}
});




// const people = [
//   {name: 'Zarry', power: 5},
//   {name: 'Craig' , power: 70},
//   {name: 'Garry', power: 9000},
//   {name: 'Dog Dog',power: 65}
// // ];
const people = [
  {name: 'Zarry', power: 3},
  {name: 'Craig' , power: 20},
  {name: 'Garry', power: 900},
  {name: 'Dog Dog',power: 6},
  {name: 'Zarry', power: 5},
  {name: 'Craig' , power: 70},
  {name: 'Garry', power: 9000},
  {name: 'Dog Dog',power: 65}
];
people.sort((first, second) => {

    if(first.power > second.power) {
       return 5;
    }else if(first.power < second.power){
      return -70;
    }else{
    return 0;
    }
});
// console.log(people);
// people.sort((first, second) => {

//     if(first.name > second.name) {
//        return 5;
//     }else if(first.name < second.name){
//       return -70;
//     }else{
//     return 0;
//     }
// });
// people.sort((first, second) => {

//     if(first.name > second.name) {
//        return 1;
//     }else if(first.name < second.name){
//       return -1;
//     }else{
//     return 0;
//     }
// });
