var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array1, element1){
  var array2 = [...array1]
  array2.unshift(element1)
  return array2
}

function destructivelyAddElementToBeginningOfArray(array1, element1){
  array1 = [element1, ...array1]
  return array1
}
