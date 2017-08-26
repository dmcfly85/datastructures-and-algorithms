const util = require('util')


var Node = function (data) {
  this.data = data;
  this.next = null;
};

var linkedList = function () {
  this.listLength = 0;
  this.head = null;
};

linkedList.prototype.append = function (value) {
  var node = new Node(value)
  currentNode = this.head

  // 1st case-use: an empty list
  if (!currentNode) {
    this.head = node;
    this.listLength++;
    return node;
  }

  // 2nd case-use: a non-empty list
  while (currentNode.next) {
    var currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.listLength++;
  return node;

};

linkedList.prototype.search = function (value) {
  var currentNode = this.head;
  var go = true;
  while (go) {
    if (currentNode.data == value) return currentNode;
    if (currentNode.next === null) go = false;
    currentNode = currentNode.next;
  }
  return 'error not found';
};

linkedList.prototype.remove = function (value) {
  var currentNode = this.head;
  var doomedNodesParent = null;

  //removing if node to remove is head
  if (currentNode.data == value) {
    this.head = currentNode.next
    return this
  }

  doomedNodesParent = currentNode
  currentNode = currentNode.next
  var go = true

  while (go) {
    if (currentNode.data == value) {
      doomedNodesParent.next = currentNode.next
      return this
    } else {
      console.log("CN",currentNode);
      doomedNodesParent = currentNode
      currentNode = currentNode.next
      console.log("CN",(currentNode.next == null));
      if (currentNode.next == null) go = false;
    }

  }
  return "not found"
};


//a = { data: 'A', next: { data: 'B', next: { data: 'C', next: { data: 'D', next: null } } }

var list = new linkedList();
list.append('A');
list.append('B');
list.append('C');
list.append('D');

//console.log(list);

//return console.log('search', list.search('B'));
console.log('remove', list.remove("D"));
//console.log("list",list);
console.log(util.inspect(list, false, null))
