

let sortMe = [9, 8, 7, 3, 5, -1, 200, -78, 4, 3];

function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    let changes = false;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i +1]) {
        changes = true;
        let newarr = arr.slice();
        newarr[i] = arr[i + 1];
        newarr[i + 1] = arr[i];
        arr = newarr;
      };
      sorted = !changes;
    }
  }
  return arr;
}

console.log(bubbleSort(sortMe));



