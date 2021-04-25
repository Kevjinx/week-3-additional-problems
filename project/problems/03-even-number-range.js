/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2) {
  let arr = [];
  if (num1 > num2) {
    return arr;
  }
  for (let i = num1; i <= num2; i++) {
    if (i%2 === 0) {
      arr.push(i)
    }
  }
  return arr;
}

const evenNumberRangeRecursive = (num1, num2, arr = []) => {

  if (num1 > num2) {
    return arr;
  } else {
    if (num1%2 === 0) {
      arr.push(num1)
    }
    num1++
    return evenNumberRangeRecursive(num1, num2, arr)
  }
}

console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
console.log(evenNumberRange(22, 25)); // prints [22, 24]
console.log(evenNumberRange(2, 0)); // prints []
console.log(evenNumberRangeRecursive(-3, 2)); // prints [-2, 0, 2]
console.log(evenNumberRangeRecursive(22, 25)); // prints [22, 24]
console.log(evenNumberRangeRecursive(2, 0)); // prints []


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}