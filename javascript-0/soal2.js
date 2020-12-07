
function reverseArray(arr) {

  let obj = arr.split(" ")

  console.log(obj)

  if (obj instanceof Array) {
    var newArray = []
    for (var i = obj.length - 1; i >= 0; i--) {
      newArray.push(obj[i])
    }
    return newArray.join(" ")
  } else {
    console.log("Not Array")
  }
}

console.log(reverseArray("I Love Javascript"))  