

let GM = () => {
    console.log("Grand Master");
}

// GM = 'Hello' Will give error because it recognizes that it is of type function

let bookName: Function;
bookName = () => {
    console.log("Do Epic Shit");
}

const subtract = (a: number, b: number, c?: number) => {
    console.log(a - b);
}

subtract(5,10);
// Here I have not passed 3rd argument hence it's giving error so we can set c as optional parameter.
// Adding ? means it's an optional parameter
// Always take optional parameters at the end.



// Type Aliases
let a: number|string;
let b: number|string;

// Here instead of using number|string everytime we can define alias so now:
type StringorNum = string|number;
let c: StringorNum;
// This helps in reducing code duplicity
