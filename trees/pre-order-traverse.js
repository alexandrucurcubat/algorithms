function walk(curr, path) {
  if (!curr) {
    return path;
  }

  path.push(curr.value);
  walk(curr.left, path);
  walk(curr.right, path);

  return path;
}

module.exports = function preOrderTraverse(head) {
  return walk(head, []);
};
