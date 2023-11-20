function search(curr, needle) {
  if (!curr) {
    return false;
  }

  if (curr.value === needle) {
    return true;
  }

  if (curr.value < needle) {
    return search(curr.right, needle);
  }

  return search(curr.left, needle);
}

module.exports = function deapthFirstSearch(head, needle) {
  return search(head, needle);
};
