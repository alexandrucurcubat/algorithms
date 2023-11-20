function walk(curr, path) {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  walk(curr.right, path);
  path.push(curr.value);

  return path;
}

module.exports = function postOrderTraverse(head) {
  return walk(head, []);
};
