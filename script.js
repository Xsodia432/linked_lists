class linkedList {
  constructor() {
    this.headValue = null;
    this.tailValue = null;
    this.listSize = 0;
  }
  append(value) {
    const valueNode = new node(value);
    if (!this.headValue) {
      this.headValue = valueNode;
      return;
    }
    let currentNode = this.headValue;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = valueNode;
    this.tailValue = currentNode.next;
  }
  prepend(value) {
    const valueNode = new node(value);
    valueNode.next = this.headValue;
    this.headValue = valueNode;
  }
  size() {
    let listSize = 0;
    let currentNode = this.headValue;
    while (currentNode) {
      currentNode = currentNode.next;
      listSize += 1;
    }
    return listSize;
  }
  head() {
    return this.headValue ? this.headValue.value : "Lists is empty";
  }
  tail() {
    if (this.tailValue === null) return this.headValue.value;
    return this.tailValue.value;
  }
  at(index) {
    let counter = 0;
    let currentNode = this.headValue;
    while (currentNode && counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode ? currentNode.value : "No value in that node";
  }
  pop() {
    let currentNode = this.headValue;
    if (currentNode.next) {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      return;
    }
    this.headValue = null;
  }
  contains(value) {
    let currentNode = this.headValue;
    while (currentNode && value !== currentNode.value)
      currentNode = currentNode.next;
    return currentNode ? true : false;
  }
  find(value) {
    let counter = 0;
    let currentNode = this.headValue;
    while (currentNode) {
      if (currentNode.value === value) break;
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode ? counter : null;
  }
  toString() {
    if (!this.headValue) return "List is Empty";
    let linkedString = `( ${this.head()} ) -> `;
    let currentNode = this.headValue;
    while (currentNode.next) {
      currentNode = currentNode.next;
      linkedString += `( ${currentNode.value} ) -> `;
    }
    return linkedString + " null";
  }
  insertAt(value, index) {
    const valueNode = new node(value);
    let counter = 0;
    let currentNode = this.headValue;
    while (currentNode && counter !== index - 1) {
      currentNode = currentNode.next;
      counter += 1;
    }
    valueNode.next = currentNode.next;
    currentNode.next = valueNode;
  }
  removeAt(index) {
    let counter = 0;
    let currentNode = this.headValue;
    if (index === 0) {
      this.headValue = currentNode.next;
      return;
    }
    while (currentNode && counter !== index - 1) {
      currentNode = currentNode.next;
      counter += 1;
    }
    currentNode.next = currentNode.next.next;
  }
}

class node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}
const list = new linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
