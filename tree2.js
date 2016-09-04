var Node = function (data) {
  this.data = data;
  this.parent = null;
  this.children = [];
};

var Tree = function (data) {
  var node = new Node(data);
  this.root = node;
};

var tree = new Tree('A');

tree.root.children.push(new Node('B'));
tree.root.children[0].parent = tree;

tree.root.children.push(new Node('C'));
tree.root.children[1].parent = tree;

tree.root.children[0].children.push(new Node('D'));
tree.root.children[0].children[0].parent = tree.root.children[0]


//console.log(tree);



Tree.prototype.traverseDF = function (cb) {
  (function recurse(currentNode) {
    for (var i=0; i < currentNode.children.length; i++ ){
      recurse(currentNode.children[i]);
    }
    cb(currentNode);
  })(this.root);
};


tree.traverseDF(function(node){
  console.log(node);
  console.log("--------------------------");
});
