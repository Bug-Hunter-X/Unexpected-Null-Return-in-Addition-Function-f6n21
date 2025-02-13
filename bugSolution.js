function foo(a, b) {
  // Handle null values by defaulting to 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;

  //Check if both values are numbers before addition. 
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both parameters must be numbers.';
  }

  return a + b; 
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo('a', 1)); // Output: Invalid input: Both parameters must be numbers
console.log(foo(1, 'b')); //Output: Invalid input: Both parameters must be numbers