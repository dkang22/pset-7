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
    if (!numbers || numbers.some(isNaN) || numbers.length < 1){
        return undefined;
    } else {
        let max = Number(Math.max.apply(null, numbers));
        let min = Number(Math.min.apply(null, numbers));
        let difference = max - min;
        return difference;
    }
}

function max(number) {
    if (!number || number.length % 2 === 0 || number.length < 3 || number.some(isNaN)){
        return undefined;
    } else {
        let newArray = [];
        newArray.push(number[0]);
        let half = Math.floor(number.length/2);
        newArray.push(number[half]);
        let end = number[number.length - 1];
        newArray.push(end);
        let max = Number(Math.max.apply(null, newArray));
        return max;
    }
}

function middle(values) {
    if (!values || values.length % 2 === 0 || values.length < 3){
        return [];
    } else {
        let newArray = [];
        let middle = Math.floor(values.length/2);
        console.log(values[middle-1]);
        console.log(values[middle]);
        console.log(values[middle+1]);
        newArray.push(values[middle-1], values[middle], values[middle+1]);
        return newArray;
    }
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
