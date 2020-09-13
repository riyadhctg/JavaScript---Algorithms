//Write a program to reverse an array or string

var reversedArray = function (arr) {
  var length = arr.length;
  var start = 0
  var end = length-1;
  var temp;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

var arr1 = [1,2,3,4,5];
var arr2 = ["mon", "tue", "wed", "thu", "fri"];

console.log(reversedArray(arr1));
console.log(reversedArray(arr2));
