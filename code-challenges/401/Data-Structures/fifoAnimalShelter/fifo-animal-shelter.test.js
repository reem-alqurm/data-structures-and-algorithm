'use strict';

const Animals = require('./fifo-animal-shelter');
const animal = new Animals();


describe('test animals in the shelter', () => {
  it('it should add an animal to the shelter', () => {
    const newShelterAnimal = {type: 'dog', name: 'Olive', age: 'Puppy'}
    animal.enqueue(newShelterAnimal);
    expect(animal.dog.stackOne.storage).toEqual([{type: 'dog', name: 'Olive', age: 'Puppy'}]);
  })
  it('it should get your new pet', () => {
    animal.enqueue({type: 'cat', name: 'Boots', age: 'Kitten'});
    animal.enqueue({type: 'dog', name: 'Tanya', age: 'Adult'});
    animal.dequeue('dog');
    expect(animal.dequeue('dog')).toEqual({type: 'dog', name: 'Tanya', age: 'Adult'}) 
  });

});