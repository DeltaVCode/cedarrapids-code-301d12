//array.prototype.filter shares the call back of map and forEach 
//it takes in value, index, and array
//if the call back returns true, it keeps the thing in the array
//if it returns false it skips it
//it makes a new array with these rules

const names = ['Lister','Holly','SmegHead','Kyrton','Rimmer', 'Toasty','Cat'];

names.filter((value, index, arr) => {
  return true;
});


names.filter((value, index, arr) => {
  return false;
});

names.filter((value, index, arr) => {
  if(index % 2){
    return true;
  } else {
    return false;
  }
});

names.filter((value, index, arr) => {
  if(value.length < 6){
    return true;
  } else {
    return false;
  }
});

names.filter((value, index, arr) => {
  if(value.match(/a/)){
    return true;
  } else {
    return false;
  }
});

//return true or return false, and filter will build out the array. 