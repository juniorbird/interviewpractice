// Numbers to Sort
var unsortedArr = [3, 6, 7, 9, 8, 2, 1, 4, 5];
var unsortedArr2 = [3, 6, 7, 9, 8, 2, 1, 4, 5];

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


console.log(unsortedArr);
console.log(bubbleSortR(unsortedArr));
console.log(bubbleSortW(unsortedArr2));
