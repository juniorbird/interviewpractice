// Numbers to Sort
var unsortedArr = [3, 6, 7, 9, 8, 2, 1, 4, 5];

function bubbleSort(arr) {
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
        wholeArray.splice(index + 1, 1);
        wholeArray.splice(index, 0, temp);
        return sort(wholeArray, index + 1, true);
      } else {
        return sort(wholeArray, index + 1, sortedState);
      }
    }
  }

return sort(arr, 0, false);
}

console.log(unsortedArr);
console.log(bubbleSort(unsortedArr));
