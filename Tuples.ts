let array = ['Dev', 19];
// In array we can change the elements


// In Tuple, once we define the type of element at a particular position, we can't change the type later.
// Tuples must be explicitly defined as TS will otherwise treat it as normal array.

let Tuple: [string, number, boolean];
Tuple = ['Dev', 19, true];
// Tuple = [40, 19, true]; This will give an Error
Tuple[0] = 'Devraj' // Allowed!
