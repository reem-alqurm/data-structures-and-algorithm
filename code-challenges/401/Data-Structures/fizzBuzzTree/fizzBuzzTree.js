'use strict';
class Node {
    constructor(value) {
        this.value = value;
    }
}
class kayTree {
    constructor() {
        this.root = null;
        this.children = []; // to push the added node.
    }
    addNode(value) {
       const node = new Node(value);
        if(this.root === null) {
          this.root = node;
        } else {
          this.children.push(node);
        }
        return node;
      }
}

function FizzBuzzTree(tree) {
    if (tree.root == null)  // Checking the Root node if it is null or empty
    {
        return "K-ary tree is null/empty"
    };
   
    
    for (let i = 0; i < tree.children.length; i++) {
        if (tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0) {
            tree.children[i].value = 'FizzBuzz';
        } else if (tree.children[i].value % 3 === 0) {
            tree.children[i].value = 'Fizz';
        } else if (tree.children[i].value % 5 === 0) {
            tree.children[i].value = 'Buzz';
        } else {
            tree.children[i].value = tree.children[i].value.toString();
        }
        
    }
    return tree;
}

module.exports = {
    Node: Node,
    kayTree: kayTree,
    FizzBuzzTree: FizzBuzzTree,
}