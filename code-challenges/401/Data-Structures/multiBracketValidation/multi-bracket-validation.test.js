'use strict';

const bracket = require('./multi-bracket-validation');

describe('testing the multi bracket validation function', () => {
  it('should return true for matching brackets', () => {
    const test = bracket('{}');

    expect(test).toBeTruthy();
  });

  it('should return true for matching brackets', () => {
    const test = bracket('{}(){}');

    expect(test).toBeTruthy();
  });

  it('should return true for matching brackets', () => {
    const test = bracket('()[[Extra Characters]]');

    expect(test).toBeTruthy();
  });

  it('should return true for matching brackets', () => {
    const test = bracket('(){}[[]]');

    expect(test).toBeTruthy();
  });

  it('should return true for matching brackets', () => {
    const test = bracket('{}{Code}[Fellows](())');

    expect(test).toBeTruthy();
  });

  it('should return false for mismatched brackets', () => {
    const test = bracket('[({}]');

    expect(test).toBeFalsy();
  });

  it('should return false for mismatched brackets', () => {
    const test = bracket('(](');

    expect(test).toBeFalsy();
  });

  it('should return false for mismatched brackets', () => {
    const test = bracket('{(})');

    expect(test).toBeFalsy();
  });

});