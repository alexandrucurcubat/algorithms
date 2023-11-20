module.exports = function compareBinaryTrees(a, b) {
  if (a === null && b === null) {
    return true;
  }

  if (a?.value !== b?.value) {
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
};
