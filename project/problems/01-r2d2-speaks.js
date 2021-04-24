/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms

    There are no mocha tests for this code.
    Run the following two lines beneath the function
    to see if your code demonstrates the expected behavior.

*/

function r2d2Speaks(code) {
  let delay = 0;
  code.forEach(reee => {
    if(!reee) {
      setTimeout(() => {
        console.log('beep');
      }, delay);
      delay += 400;
    } else {
      setTimeout(() => {
        console.log('boop');
      }, delay);
      delay += 800;
    }
  })
}

const r2d2SpeaksRecursive = (code, delay = 0) => {
  if (!code.length) {
    return;
  } else {
    if (!code[0]) {
        console.log('beep');
        delay = 400;
    } else {
        console.log('boop');
        delay = 1000;
    }

    code.shift();

    setTimeout(() => {
      r2d2SpeaksRecursive(code)
    }, delay);

  }
}

let code = [0, 1, 1, 0];
// r2d2Speaks(code);
// r2d2SpeaksRecursive(code)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
