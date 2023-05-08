// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let no = true;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         no = false;
//       }
//     }
//     if (no) break;
//   }
//   console.log(arr);
// }
// bubbleSort([81, 2, 3, 4, 5, 8, 7, 6]);

// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = curr;
//   }
//   console.log(arr);
// }
// insertion([81, 2, 3, 4, 5, 8, 7, 6]);
// function merge(arr1, arr2) {
//   let ans = [];
//   let i = 0,
//     j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       ans.push(arr1[i]);
//       i++;
//     } else {
//       ans.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     ans.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     ans.push(arr2[j]);
//     j++;
//   }
//   return ans;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
// console.log(mergeSort([81, 2, 3, 4, 5, 8, 7, 6]));

// function pivot(arr, s = 0, e = arr.length + 1) {
//   function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   let pivot = arr[0];
//   let swapInd = s;

//   for (let i = s + 1; i <= e; i++) {
//     if (pivot > arr[i]) {
//       swapInd++;
//       swap(arr, swapInd, i);
//     }
//   }
//   swap(arr, s, swapInd);
//   // console.log(arr);
//   return swapInd;
// }
// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotInd = pivot(arr, left, right);
//     quickSort(arr, left, pivotInd - 1);
//     quickSort(arr, pivotInd + 1, right);
//   }
//   return arr;
// }
// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

function digit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  let str = '' + num;
  return str.length;
}
function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}
function radixSort(nums) {
  let maxCount = mostDigits(nums);
  for (let i = 0; i < maxCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      digitBuckets[digit(nums[j], i)].push(nums[j]);
      // console.log(digitBuckets);
    }
    nums = [].concat(...digitBuckets);
    // console.log(nums);
  }
  return nums;
  // console.log(maxCount);
}
console.log(radixSort([65, 789, 4, 3, 5, 1234, 8765, 9845]));
