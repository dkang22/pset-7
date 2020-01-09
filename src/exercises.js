function commonEnd(a, b) {
    if (!a || a.length === 0 || !b || b.length === 0) {
        return false;
    }

    firstA = a[0];
    firstB = b[0];
    lastA = a[a.length - 1];
    lastB = b[b.length - 1];

    if (firstA === firstB) {
        return true;
    } else if (lastA === lastB) {
        return true;
    } else {
        return false;
    }
}

function endsMeet(values, n) {
    let newArray = [];

    if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
        return newArray;
    } else {
        if (n === 0){
            return values;
        } else {
            for (let x = 0; x < n; x++) {
                if (values[x] !== undefined) {
                    newArray.push(values[x]);
                }
            }
            for (let x = n; x > 0; x--) {
                if (values[values.length - x] !== undefined) {
                    newArray.push(values[values.length - x]);
                }
            }
            return newArray;
        }
    }
}

function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
