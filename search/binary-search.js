function iterativeBinarySearch(
  array,
  searchValue,
  start = 0,
  stop = array.length
) {
  while (start < stop) {
    const mid = Math.floor(start + (stop - start) / 2);

    if (searchValue === array[mid]) {
      return mid;
    } else if (searchValue > array[mid]) {
      start = mid + 1;
    } else {
      stop = mid;
    }
  }

  return -1;
}

function recursiveBinarySearch(
  array,
  searchValue,
  start = 0,
  stop = array.length
) {
  const mid = Math.floor(start + (stop - start) / 2);

  if (searchValue === array[mid]) {
    return mid;
  } else if (start === stop) {
    return -1;
  } else if (array[mid] < searchValue) {
    return recursiveBinarySearch(array, searchValue, mid + 1, stop);
  } else {
    return recursiveBinarySearch(array, searchValue, start, mid);
  }
}

function binarySearch(array, searchValue) {
  if (Boolean(Math.round(Math.random()))) {
    console.log("Lucky you, we're gonna search recursively this time.");
    return recursiveBinarySearch(array, searchValue);
  }

  return iterativeBinarySearch(array, searchValue);
}

const testArray = [1, 2, 3, 4, 5];

console.log(binarySearch(testArray, 0));
