function binarySearch (array , key){
    let startIndex = 0;
    let endIndex = array.length - 1;
    while (startIndex <= endIndex){

        let middleIndex = Math.floor((startIndex + endIndex)/2);

        if (array[middleIndex] === key){
        return middleIndex;
      } else if (array[middleIndex] < key){

        startIndex = middleIndex + 1;

      } else {
        endIndex = middleIndex - 1;
      }
    }
    return -1;
  }
  
  module.exports = binarySearch;
 