class Node {
  constructor(value) {
    this.value = value;
  }
}

class Queue {
  #head;
  #tail;

  constructor() {
    this.#head = this.#tail = undefined;
    this.length = 0;
  }

  enqueue(item) {
    const node = new Node(item);
    this.length++;

    if (!this.#tail) {
      this.#tail = this.#head = node;

      return;
    }

    this.#tail.next = node;
    this.#tail = node;
  }

  deque() {
    if (!this.#head) {
      return undefined;
    }

    const head = this.#head;
    this.#head = this.#head.next;
    this.length--;

    if (this.length === 0) {
      this.#tail = undefined;
    }

    return head.value;
  }

  peek() {
    return this.#head?.value;
  }
}

const queue = new Queue();

queue.enqueue('item1');
queue.enqueue('item2');
queue.enqueue('item3');
queue.enqueue('item4');
queue.enqueue('item5');
queue.deque();
queue.deque();
queue.deque();
queue.deque();

console.log(queue);
