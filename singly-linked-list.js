
class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.count = 0;
  }

  addToEnd(data) {
    let node = new Node(data);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.count++;
      return node;
    };

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.count++;
    return node;
  }

  addToStart(data) {
    let node = new Node(data);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.count++;
      return node;
    }

    node.next = currentNode;
    this.head = node;
    this.count++;
  }

  search (searchNodeData) {
    let currentNode = this.head;
    let previousNode;

    for(let i = 0; i < this.count; i++) {

      if(currentNode.data === searchNodeData) {
        return {
          currentNode,
          previousNode
        };
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

  }

  insertAfter(searchNodeData, newNodeData) {
    let newNode = new Node(newNodeData);
    let foundNode = this.search(searchNodeData);

    if (foundNode) {
      newNode.next = foundNode.currentNode.next;
      foundNode.currentNode.next = newNode;
      this.count++;
    }
  }

  insertBefore(searchNodeData, newNodeData) {
    let newNode = new Node(newNodeData);
    let foundNode = this.search(searchNodeData);

    if (foundNode) {
      foundNode.previousNode.next = newNode;
      newNode.next = foundNode.currentNode;
      this.count++;
    }
  }

  delete(nodeToDelete) {
    let foundNode = this.search(nodeToDelete);

    if (foundNode) {
      foundNode.previousNode.next = foundNode.currentNode.next;
      this.count--;
    }
  }

}


let myList = new SinglyLinkedList();

myList.addToEnd('B');
myList.addToEnd('C');
myList.addToEnd('D');
myList.addToStart('A');
myList.insertAfter('B', 'B2');
myList.insertBefore('B', 'B0');
myList.insertAfter('C', 'delMe');
myList.delete('delMe');

console.log(JSON.stringify(myList, null, 4));


