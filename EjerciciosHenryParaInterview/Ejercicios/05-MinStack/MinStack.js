class Node {
  // Your code here:
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class MinStack {
  // Your code here:
  constructor(value) {
    this.top = null
  }

  push(val) {
    if(!this.top) this.top = new Node(val);
    else {
        const newTop = new Node(val);      
        newTop.next = this.top;
        this.top = newTop;    
        }
  }
  pop(val) {
    const oldTop = this.top;
    this.top = oldTop && oldTop.next;
    return oldTop && oldTop.value;
  }
  min() {
    return this.pop()
  }
  peek() {
    return this.top && this.top.value  
  }

}

module.exports = {
  Node,
  MinStack
}