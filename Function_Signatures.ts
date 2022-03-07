// Function Signature represents the flow or structure of the function
// let greet: Function;

// Example of the signature
// Here a,b are parameters and void is the return type
let greet: (a: string, b:string) => void;
greet = (name: string, greeting: string) => {
    console.log(`Hello ${name} says ${greeting}`);
}

// Example 2
let calc: (a: number, b: number, c:string) => number;
calc = (num1: number, num2: number, action:string) => {
    if(action === 'add'){
        return num1 + num2;
    }else{
        return num1 - num2;
    }
}