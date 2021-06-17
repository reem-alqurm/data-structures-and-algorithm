'use strict';

const hash = require('./hashtable.js');

describe('testing hash tables', () => {
  let test = new hash.HashTable(1024);

  it('should successfully add a key/value to the hashtable', () => {
    test.add('reem', 'ali');
    test.add('bahaa', 'raed');
    test.add('mouneer', 'mouneera');

    expect(test.contains('reem')).toEqual(true);
  });

  it('retrieving based on a key returns the value stored', () => {
    test.add('reem', 'ali');
    test.add('bahaa', 'raed');
    test.add('mouneer', 'mouneera');

    expect(test.get('reem')).toEqual('ali');
  });

  it('successfully returns false for a key that does not exist in the hashtable', () => {
    test.add('reem', 'ali');
    test.add('bahaa', 'raed');
    test.add('mouneer', 'mouneera');

    expect(test.contains('suhib')).toEqual(false);
  });

  it('successfully handles a collision within the hash table', () => {
    test.add('reem', 'ali');
    test.add('bahaa', 'raed');
    test.add('mouneer', 'mouneera');

    expect(test.add('reem', 'bahaa')).toEqual(undefined);
  });

  it('successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    test.add('reem', 'ali');
    test.add('bahaa', 'raed');
    test.add('mouneer', 'mouneera');

    expect(test.get('reem')).toEqual('ali');
  });

  it('Successfully hash a key to an in-range value', () => {
    const hash = test.hash('ishaq');

    expect(hash).toBeLessThanOrEqual(1024);
  });
});