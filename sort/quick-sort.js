function partition(array, start, stop) {
  const pivot = array[stop];
  let index = start - 1;

  for (let i = start; i < stop; i++) {
    if (array[i] <= pivot) {
      index++;
      const tmp = array[i];
      array[i] = array[index];
      array[index] = tmp;
    }
  }

  index++;
  array[stop] = array[index];
  array[index] = pivot;

  return index;
}

function qs(array, start, stop) {
  if (start >= stop) {
    return;
  }

  const pivotIndex = partition(array, start, stop);

  qs(array, start, pivotIndex - 1);
  qs(array, pivotIndex + 1, stop);
}

function quickSort(array) {
  qs(array, 0, array.length - 1);

  return array;
}
