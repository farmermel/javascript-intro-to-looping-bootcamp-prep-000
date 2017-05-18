var myArray = []

var forLoop = function(myArray) { 
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      myArray = [...myArray,`I am 1 strange loop.`]
    } else {
      myArray = [...myArray, `I am ${i} strange loops.` ]
    }
  }
  return myArray;
}

var whileLoop = function(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

var maybeTrue = function maybeTrue() {
  return Math.random() >= 0.5
}

var doWhileLoop = function(array) {
    do { array.pop()
    } while (array.length > 0 && maybeTrue())
  return array;
}

