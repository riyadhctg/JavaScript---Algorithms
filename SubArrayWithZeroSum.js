//Find if there is a subarray with 0 sum

var newMap = new Map();
var sum = 0;

var doesSubArrayExists = function(arr){
  for (var i=0; i<arr.length; i++){
    sum += arr[i];

    //return true only if:
    //arr[i] is 0, or
    //sum is 0, or
    //sum already exists in the map

    if (arr[i] === 0 || sum === 0 || newMap.get(sum) != null)
    {
      return true;
    }

    newMap.set(sum, i);

  }
  return false;
}

var arr1 = [89, 98, 76, -3, -1, 4];

consoke.log(doesSubArrayExists(arr1));
