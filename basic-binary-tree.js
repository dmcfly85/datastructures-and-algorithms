// binary tree constructor
var bTree = function (data) {
  var node = new bNode(data);
  this.root = node;
};

// binary node constructor
var bNode = function (data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.parent = null;
};

var anode = new bNode('A');
anode.left = new bNode('B');
anode.right = new bNode('C');

console.log(anode);

var inOrderTraversal = function (node) {
  if (node != null) {
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
  }
};

console.log('inOrder');
inOrderTraversal(anode);

var preOrderTraversal = function (node) {
  if (node != null) {
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
};

console.log('preOrder');
preOrderTraversal(anode);

var postOrderTraversal = function (node) {
  if (node != null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
  }
};

console.log('postOrder');
postOrderTraversal(anode);
