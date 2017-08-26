var spiralize = function(size) {
  let results = [];


  for(let i = 0; i < size; i++){
    results.push(new Array(size).fill(0));
  }


  function flatInsert (currentRow, partialRow, start, end) {
    let left = currentRow.slice(0, start);
    let right = currentRow.slice(end, currentRow.length);
    return left.concat(partialRow).concat(right);
  }

  function drawSpiral(spiralSize) {
    let results = [];

    // top/bottom row one
    let topAndBottom = new Array(spiralSize).fill(1);
    results[0] = topAndBottom;
    results[spiralSize - 1] = topAndBottom;

    // row two
    let rowTwo = new Array(spiralSize).fill(0);
    rowTwo[spiralSize - 1] = 1;
    results[1] = rowTwo;


    // otherRows
    let otherRows = new Array(spiralSize).fill(0);
    otherRows[0] = 1;
    otherRows[spiralSize - 1] = 1;

    for(let i = 2; i < spiralSize - 1; i++) {
      results[i] = otherRows;
    }

    for(let i = 0; i < results.length; i++){
      console.log(results[i]);
    }
  }

  for(i = size; i > 0; i--) {
  
    j = i === size ? i : i - 2

    drawSpiral(i)
    
  }
 
  

};


