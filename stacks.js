var Stack = function () {
  this.data = []
  this.looktest = function () {
    console.log(this.data);
  }
}

Stack.prototype.push = function (value) {
  this.data[this.data.length] = value
}

//pop
Stack.prototype.pop = function () {
  return this.data.pop()
}

//peek
Stack.prototype.peek = function () {
  return this.data[this.data.length - 1]
}


//is empty

Stack.prototype.isEmpty = function () {
  if (this.data.length == 0) return true
  return false
}

var mystack = new Stack()
var emptystack = new Stack()

mystack.push("A")
mystack.push("B")
mystack.push("C")
mystack.push("D")
console.log('pop',mystack.pop())
console.log('peek', mystack.peek());
console.log('mystack', mystack.isEmpty());
console.log('empty stack', emptystack.isEmpty());

mystack.looktest()
