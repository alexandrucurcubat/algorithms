function walk(curr, path) {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
}

module.exports = function inOrderTraverse(head) {
  return walk(head, []);
};
