// Imagine you've got two crystals.
// You drop the crystals from the roof and they land on the specific floors.
// You need to find the exact floor at which the crystals break in the most efficient way.
// Example
// We could use linear search or binary search, but there is a more optimal solution:
// O(√n)

function findFloor(floors) {
  const jumpAmount = Math.floor(Math.sqrt(floors.length));
  let i = jumpAmount;

  for (; i < floors.length; i += jumpAmount) {
    if (floors[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = i; j < i + jumpAmount && i < floors.length; j++, i++) {
    if (floors[i]) {
      return i;
    }
  }

  return -1;
}
