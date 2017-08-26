

let sortMe = [9, 8, 7, 3, 5, -1, 200, -78, 4, 3];

function bubbleSort(arr) {

  for(let i = 0; i <= arr.length - 2; i++) {
    for(let j = 0; j <= arr.length - 2 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort(sortMe));


