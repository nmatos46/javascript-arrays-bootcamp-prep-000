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
  array1.unshift(element1)
  return array1
}

function addElementToEndOfArray(array, element){
  var array2 = [...array]
  array2.push(element)
  return array2
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}
