//Provde an example of pre, post, and in order traversals of a binary tree (to print all the nodes)

// Pre Order
var preOrder = function (tree) {
  if(!tree){
    return "";
  }
  else {
    return (tree.value + preOrder(tree.left) + preOrder(tree.right));
  }
}

// Post Order
var postOrder = function (tree) {
  if(!tree){
    return "";
  }
  else {
    return (postOrder(tree.left) + postOrder(tree.right) + tree.value);
  }
}

// In Order
var inOrder = function (tree) {
  if(!tree){
    return "";
  }
  else {
    return (inOrder(tree.left) + tree.value + inOrder(tree.right));
  }
}


//Leaf Counter
var count = 0;
var countTreeLeaf = function (tree) {
  if(!tree){
    return "";
  }
  else {
    count++;
    countTreeLeaf(tree.left) + countTreeLeaf(tree.right);
  }

  return count-1;
}

var binTree = {
  value: "a",
    left: {
    value: "c",
      left: {
      value: "g"
      },
      right: {
      value: "h"
      }
    },
  right: {
  value: "d",
    left: {
    value: "i"
    }
  }
};

console.log("Pre Order: " + preOrder(binTree) + "\n");
console.log("Post Order: " + postOrder(binTree) + "\n");
console.log("In Order: " + inOrder(binTree) + "\n");
console.log("BFT: " + bft(binTree) + "\n");
console.log("Number of Leafs: " + countTreeLeaf(binTree) + "\n");
