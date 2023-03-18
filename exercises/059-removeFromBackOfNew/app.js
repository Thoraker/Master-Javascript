function removeFromBackOfNew(arr) {
  // your code here
  var newArray = arr.filter((e, index) => index !== arr.length -1);
  return newArray
}