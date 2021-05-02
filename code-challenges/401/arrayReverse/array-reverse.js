'use strict';

function reverseArray(array) {
 
  const newArray = [];
  for(let i = array.length -1; i >= 0; i--){
    newArray[newArray.length] = array[i];
  }
  return newArray;
}
//modularity 
module.exports = reverseArray;
//will use it when we test it 