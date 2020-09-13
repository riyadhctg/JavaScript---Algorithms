//How to find largest and smallest number in unsorted array

var findLargestAndSmallest = function (arr) {

  var smallest = Number.MAX_VALUE;
  var largest = Number.MIN_VALUE;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] > largest) largest = arr[i];
    if (arr[i] < smallest) smallest = arr[i];
  }

  return [smallest, largest];

}

var arr1 = [1, 67, 56, 5 , 6, 0];

console.log(findLargestAndSmallest(arr1));

