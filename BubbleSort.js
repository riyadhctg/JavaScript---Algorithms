//Sort an array of integer with Bubble Sort algorithm

var bubbleSort = function (arr) {

  var arrayLength = arr.length;
  var counter = 0;

  for (var i = 0; i < arrayLength - 1; i++) {
    if (arr[i] > arr[i+1]) {
      var temp = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      counter++;
    }
    if (i === (arrayLength - 2) && counter != 0){
      counter = 0; i=0;
    }
  }

  return arr;
}

var arr1 = [3,1,4,5,2];

console.log(bubbleSort(arr1));
