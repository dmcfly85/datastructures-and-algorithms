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
    if (currentNode.data == value) return currentNode.data;
    if (currentNode.next === null) go = false;
    currentNode = currentNode.next;
  }
  return 'error not found';
};



var list = new linkedList();
list.append('A');
list.append('B');
list.append('C');
list.append('D');

console.log('search', list.search('D'));
