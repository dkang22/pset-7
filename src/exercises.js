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
    if (!values || values >= n) {
        return false;
    }

    const storeValues = values;
    let newArray = [];
    let valuesLength = values.length;
    let firstElements = values.splice(0, n-1);
    values = storeValues;
    let lastElements = values.splice(valuesLength-n, valuesLength-1);

    return firstElements;
    return lastElements;
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
