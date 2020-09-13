//Write a program to reverse a string

var reversedString = function (str) {
  var newString = "";

  for (var i = str.length-1; i>=0; i--) {
    newString += str.charAt(i);
  }
  return newString;
}

var str1 = "Hello World";

console.log(reversedString(str1));
