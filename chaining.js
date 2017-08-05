console.log('in chaining.js');

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.



// integers array 
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//chaining of integers array using conditions above
let result = ((integers.sort(function(a, b){ return  b - a})).filter(n => n < 20)).map((x)=>{return(x*1.5)-1});
console.log(result);






