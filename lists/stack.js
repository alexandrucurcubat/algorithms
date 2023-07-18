class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  #head;

  constructor() {
    this.#head = undefined;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    this.length++;

    if (!this.#head) {
      this.#head = node;

      return;
    }

    node.prev = this.#head;
    this.#head = node;
  }

  pop() {
    this.length = Math.max(0, this.length - 1);

    if (this.length === 0) {
      const head = this.#head;
      this.#head = undefined;

      return head?.value;
    }

    const head = this.#head;
    this.#head = head.prev;

    return head.value;
  }

  peek() {
    return this.#head?.value;
  }
}
