'use strict';

const hash = require('../hashtable/hashtable.js');


function repeatedWord(string) {
  //create new hash table
  const table = new hash.HashTable(1024);
  //find matches
  const words = string.match(/\w+/g);
  // console.log(words);
  
  for(let i = 0; i < words.length; i++){
    let key = words[i].toLowerCase();
    
    if (table.contains(key)){
      return table.get(key);
    }
    table.add(key, key);
  }
  
}
module.exports = repeatedWord;