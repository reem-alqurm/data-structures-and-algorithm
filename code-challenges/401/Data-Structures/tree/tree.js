class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
  
    preOrder() {
        let results = [];
        let traverse = (node) => {
            results.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
   
    inOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            results.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }

    postOrder() {
        let results = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            results.push(node.value);
        }
        traverse(this.root);
        return results;
    }
    findMaximumValue() {
      
      let max = 0;
      const results = [];
      const trav = (node) => {
          if (node.left) 
          {trav(node.left);}
          if (node.right)
          {trav(node.right);} 
          
          results.push(node.value);
      };
      trav(this.root);
      for (let i = 0; i < results.length; i++) {
          if (max < results[i]) {
              max = results[i];
          }
      }
      return max;
  
}
}
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(value) {
      let newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while(current){
        if(value === current.value){
          return undefined;
        }
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(current.right === null){
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    contains(value) {
      console.log('this is root', this.root);
      if(this.root === null) {
        return 'no nodes in tree';
      }
      let current = this.root;
      let found = false;
      while(current && !found){
        if(value < current.value){
          current = current.left;
        } else if (value > current.value){
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }

  }
  
//   const binaryTree = new BinarySearchTree();
  
//   binaryTree.root = new Node(5);
//   binaryTree.root.left = new Node(3);
//   binaryTree.root.right = new Node(15);
  
//   const tree = new BinaryTree();
  
//   tree.root = new Node(5);
//   tree.root.left = new Node(10);
//   tree.root.left.left = new Node(0);
//   tree.root.left.right = new Node(20);
//   tree.root.right = new Node(15);
//   tree.root.right.right = new Node(25);

  
module.exports = {
    node: Node,
    BinaryTree: BinaryTree,
    BinarySearchTree: BinarySearchTree,
  };