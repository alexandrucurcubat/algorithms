const preOrderTraverse = require('./pre-order-traverse');
const inOrderTraverse = require('./in-order-traverse');
const postOrderTraverse = require('./post-order-traverse');

class BinaryNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const left = new BinaryNode(1);
const right = new BinaryNode(2);
const head = new BinaryNode(0, left, right);

console.log('pre', preOrderTraverse(head));
console.log('in', inOrderTraverse(head));
console.log('post', postOrderTraverse(head));
