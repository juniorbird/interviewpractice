// Numbers to Sort
var unsortedArr = [3, 6, 7, 9, 8, 2, 1, 4, 5];
var unsortedArr2 = [3, 6, 7, 9, 8, 2, 1, 4, 5];
var almostSortedArr = [2, 1, 3, 4, 5, 6, 7, 8, 8];

function bubbleSortR(arr) {
  'use strict';

  function sort(wholeArray, index, sortedState) {
    // Set our base case
    //  If we're at the end of the array
    //    And have done no sorts
    //      Then return the array
    if (index === wholeArray.length) {
      if (sortedState === false) {
        return wholeArray;
      } else {
        // Or start over!
        return sort(wholeArray, 0, false);
      }
    } else {
      console.log('array:', wholeArray, 'index:', index, 'did we sort?', sortedState);
      if (wholeArray[index] > wholeArray[index + 1]) {
        // If the next item is smaller than the current item
        //  Save it, delete it, insert it
        let temp = wholeArray[index + 1];
        wholeArray[index+1] = wholeArray[index];
        wholeArray[index] = temp;
        return sort(wholeArray, index + 1, true);
      } else {
        return sort(wholeArray, index + 1, sortedState);
      }
    }
  }

return sort(arr, 0, false);
}



function bubbleSortW(arr) {
  // Trying with a while loop, since Chrome is highly-optimized for that

  'use strict';

  let len = arr.length;
  let i = 0;
  let tempVar;
  let sortedYet = false;
  let loopSorted = false;

  while (sortedYet === false) {
    while (i < len) {
      loopSorted = false;
      for (let n = 0; n < len; n++) {
        if (n === len - 1) {
          if (loopSorted === false) sortedYet = true;
        } else {
          if (arr[n] > arr[n + 1]) {
            tempVar = arr[n + 1];
            arr[n + 1] = arr[n];
            arr[n] = tempVar;
            loopSorted = true;
            console.log('Warray', arr, 'index', n, 'did we sort?', loopSorted);
          }

        }
      }
      i++;
    }
  }
  return arr;
}


function selectionSort(arr) {
  'use strict';

  function loopAndMoveLowestToFront(arrToSort, start) {
    let lowestIndex = start;
    let len = arrToSort.length;
    for (var i = start; i < len; i++) {
      if (arrToSort[i] < arrToSort[lowestIndex]) {
        lowestIndex = i;
      }

      if (i === len - 1) {
        // Remove the lowest Number + insert at beginning
        let temp = arrToSort[lowestIndex]
        arrToSort[lowestIndex] = arrToSort[start];
        arrToSort[start] = temp;

        console.log('array', arrToSort);
      }
    }
  }

  arr.forEach( (element, index, array) => {
    loopAndMoveLowestToFront(array, index);
  });

  return arr;
}

function insertionSort(arr) {
  'use strict';

  let sortedArr = [];

  function insertIntoArray(num, destArr, idx) {
    if (!destArr[idx] || destArr[idx] > num) {
      if (!destArr[idx]) {
        destArr[idx] = num;
      } else {
        destArr[idx + 1] = destArr[idx];
        destArr[idx] = num;
      }
    } else {
      insertIntoArray(num, destArr, idx + 1);
    }
  }

  arr.forEach( (element, index) => {
    insertIntoArray(element, sortedArr, 0);
    console.log(sortedArr);
  });


  return sortedArr;
}

function insertionSortL(arr) {
  'use strict';

  let sortedArr = [];

  arr.forEach((ael) => {
    if (sortedArr.length === 0) {
      sortedArr[0] = ael
    } else {
      for (var i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] > ael) {
          sortedArr.splice(i, 0, ael);
          break;
        } else if (i === sortedArr.length -1) {
          sortedArr.push(ael);
          break;
        }
      }
    }
    console.log(sortedArr);
  });


  return sortedArr;
}


function mergeSort(arr) {
  'use strict';

  function splitArr(wholeArray) {
    let len = wholeArray.length

    if (len < 2) {
      return wholeArray;
    } else {
      let mid = Math.floor(len/2);
      let leftArray = wholeArray.slice(0, mid);
      let rightArray = wholeArray.splice(mid, len);
      return mergeVals(splitArr(leftArray), splitArr(rightArray));
    }
  }

  function mergeVals(leftVal, rightVal) {
    // We can assume each val is either a single number, or sorted
    //  Pull the first off each one and compare.
    //    Push the lower one into the output array
    //      Repeat
    //        If one array has no length, and the other has length, just concat
    //          Because of the sorted thing
    let outputArr = [];

    while (leftVal.length && rightVal.length) {
      if (leftVal[0] <= rightVal[0]) {
        outputArr.push(leftVal.shift());
      } else {
        outputArr.push(rightVal.shift());
      }
    }

    outputArr = outputArr.concat(leftVal).concat(rightVal);

    return outputArr;
  }

  return splitArr(arr);
}

console.log(mergeSort(unsortedArr));
