'use strict';

const binarySearch = require('../array-binary-search.js');
describe('testing the array binary search', () => {

  it(' return the index of the key provided', () => {
    const arrayBinarySearch = binarySearch([4, 8, 15, 16, 23, 42], 15);

    expect(arrayBinarySearch).toEqual(2);
  });

  it(' return -1 if the provided key is not found in the array', () => {
    const arrayBinarySearchTwo = binarySearch([11, 22, 33, 44, 55, 66, 77], 90);
    const arrayBinarySearchThree = binarySearch([1, 2, 3, 5, 6, 7], 4);
    
    expect(arrayBinarySearchTwo).toEqual(-1);
    expect(arrayBinarySearchThree).toEqual(-1);
  });
});