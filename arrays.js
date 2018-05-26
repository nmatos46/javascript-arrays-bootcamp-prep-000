var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array1, element1){
  var array2 = array1
  return array2.unshift(element1)
}

function destructivelyAddElementToBeginningOfArray(array1, element1){
  return array1.unshift(element1)
}
