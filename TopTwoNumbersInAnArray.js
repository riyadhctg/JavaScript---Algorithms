var topTwoNumbers = function(arr) {
  var max1 = Number.MIN_VALUE;
  var max2 = Number.MIN_VALUE;
  for (var i = 0; i < arr.length ; i++) {
    if (arr[i] > max1){
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2){
      max2 = arr[i];
    }
  }
  return [max1, max2];
};

var arr1 = [2,4,6,12,89];

console.log(topTwoNumbers(arr1));

