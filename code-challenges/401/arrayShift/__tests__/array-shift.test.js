'use strict';

const arrayShift = require('../array-shift.js');

describe('testing the array shift module', () => {
  it('should return an array with inserted value in the middle index', () => {
    const shiftedArray = arrayShift([2,4,6,8], 5);
    const shiftedArrayTwo = arrayShift([4,8,15,23,42], 16);

    expect(shiftedArray).toEqual([2,4,5,6,8]);
    expect(shiftedArrayTwo).toEqual([4,8,15,16,23,42]);
  });
});