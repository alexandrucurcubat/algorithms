const testArray = [10, 4, 2, 3, 7, 1, 5, 6, 9, 8];

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

console.log(bubbleSort(testArray));
