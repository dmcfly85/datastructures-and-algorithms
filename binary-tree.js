class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor (head) {
    this.head = new Node(head);
  }

  get preOrderTraversal () {
    let results = [];

    function traverse (node) {
      if (node) {
        results.push(node.data);
        traverse(node.left);
        traverse(node.right);
      };
    };

    traverse(this.head);
    return results;
  }
  get inOrderTraversal () {
    let results = [];

    function traverse (node) {
      if (node) {
        traverse(node.left);
        results.push(node.data);
        traverse(node.right);
      };
    };

    traverse(this.head);
    return results;
  }

  get height () {

    function findHeight (node) {
      if (!node) {
        return 0;
      }
      return Math.max(findHeight(node.left), findHeight(node.right) + 1);
    }
    return findHeight(this.head);
  }
}



let myTree = new Tree('10');
let b = myTree.head.left = new Node('20');
myTree.head.right = new Node('30');
b.left = new Node('40');
b.right = new Node('50');

//         10
//       /    \
//      20    30
//     /  \
//    40  50
//


console.log("In order:", myTree.preOrderTraversal);
console.log("In order:", myTree.inOrderTraversal);
console.log(JSON.stringify(myTree, null, 4));
console.log('Height', myTree.height);
