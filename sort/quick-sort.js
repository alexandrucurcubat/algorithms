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

function quickSort(array, start = 0, stop = array.length - 1) {
  if (start >= stop) {
    return;
  }

  const pivotIndex = partition(array, start, stop);

  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, stop);

  return array;
}
