class Node {
  constructor(value) {
    this.value = value;
  }
}

class DoublyLinkedList {
  #head;
  #tail;

  constructor() {
    this.length = 0;
  }

  prepend(item) {
    const node = new Node(item);

    if (!this.#head) {
      this.#head = this.#tail = node;
      this.length++;

      return;
    }

    node.next = this.#head;
    this.#head.prev = node;
    this.#head = node;
    this.length++;
  }

  append(item) {
    const node = new Node(item);

    if (!this.#head) {
      this.#head = this.#tail = node;
      this.length++;

      return;
    }

    node.prev = this.#tail;
    this.#tail.next = node;
    this.#tail = node;
    this.length++;
  }

  insertAt(item, index) {
    if (index === this.length) {
      this.append(item);
      this.length++;

      return;
    } else if (index === 0) {
      this.prepend(item);
      this.length++;

      return;
    }

    const current = this.#getAt(index);

    const node = new Node(item);
    node.next = current;
    node.prev = current.prev;
    current.prev.next = node;
    current.prev = node;
    this.length++;
  }

  get(index) {
    return this.#getAt(index)?.value;
  }

  removeAt(index) {
    const node = this.#getAt(index);

    return this.#removeNode(node);
  }

  remove(item) {
    let node = this.#head;

    for (let i = 0; i < this.length; i++) {
      if (node.value === item) {
        break;
      }

      node = node.next;
    }

    return this.#removeNode(node);
  }

  #getAt(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let node = this.#head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  #removeNode(node) {
    if (!node) {
      return undefined;
    }

    this.length--;

    if (this.length === 0) {
      this.#head = this.#tail = undefined;

      return node.value;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.#head) {
      this.#head = node.next;
    }

    if (node === this.#tail) {
      this.#tail = node.prev;
    }

    node.prev = node.next = undefined;

    return node.value;
  }

  getHead() {
    return this.#head;
  }

  getTail() {
    return this.#tail;
  }
}

const list = new DoublyLinkedList();
list.append('item2');
list.prepend('item0');
list.insertAt('item1', 1);

console.log('head', list.getHead());
console.log('tail', list.getTail());
