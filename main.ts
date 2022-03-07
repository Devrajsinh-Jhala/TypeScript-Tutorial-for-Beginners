// What is TypeScript:
// 👉 Superset of JavaScript
// 👉 Allows to use StrictTypes
// 👉 Supports Modern Js functions like Arrow functions, let, const etc.
// 👉 Extra features like Generics, Interfaces, Tuples etc.

// To install TypeScript compiler run the following command:
// 👉 npm (install or i) -g typescript



const coderName = 'DEVRAJ';
console.log(coderName);

// This is a typeScript file hence browser wont run it we will have to compile it to JavaScript.

// If file names are same just type tsc (fileName).
// Use tsc main.ts -w w means watch so everytime we make changes to ts it will be automatically reflected in js.

// In TypeScript once variable is declared once it's type cannot be changed otherwise.

const circumference = (diameter : number) => {
    return diameter * Math.PI;
}

console.log(circumference(4));
// console.log(circumference('hello'));
// diameter : number => you can define the type so that function does not take any other input like string.










