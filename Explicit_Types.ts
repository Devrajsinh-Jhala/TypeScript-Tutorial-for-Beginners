// Explicit types
let character : string;
let age : number;

age = 30;
// age = 'Dev' Error!


// Arrays
let devJob: string[] = [];
devJob = ['Frontend', 'Backend'];
// It's good practice to declare the array as empty initially otherwise it will give errors on .push() method.


// Union Types
let mixed: (string|number|boolean)[] = [];
mixed.push(20);
mixed.push(false);

let id:  string|number;
id = 'Devraj';
id = 40;


// Objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30}

