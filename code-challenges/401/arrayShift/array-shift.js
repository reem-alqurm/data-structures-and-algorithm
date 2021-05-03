'use strict';

function insertShiftArray(arr, value) {
  let result = [];
  let middle = arr.length / 2;
  let middleIndex = Math.ceil(middle);

  for (let i = 0; i < middleIndex; i++){
    result[result.length] = arr[i];
  }
  result[middleIndex] = value;

  for (let j = middleIndex; j < arr.length; j++){
    result[result.length] = arr[j];
  }

  return result;
}

module.exports = insertShiftArray;