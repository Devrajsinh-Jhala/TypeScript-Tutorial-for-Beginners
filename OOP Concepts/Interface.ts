// Interface allows us to enforce certain structure of class or objects.
// Allows to set structure to our objects and classes and hence makes it secure for us in the future.
interface Person {
    name: string;
    age: number;

    communicate(a: string): void;
    buy(a: number): number;

}

// Below is valid because it is complying with the structure of Interface, if we add or remove anything it will show an error.

const Devraj = {
    name: 'Devraj',
    age: 19,

    communicate(id: string): void {
        console.log(`${id} is sharing some thoughts!`);
    },

    buy(id: number): number {
        console.log(`Bought for ₹{id}`);
        return id;
    }
}



// Interface with Classes

interface Format{
    format(): string;
}

class Business2 implements Format {
    // readonly means we can just read and cannot change it 
    readonly client: string;
    // private will not allow property to change outside the class
    private cashIncome: number;
    expenditure: number;
    
    constructor(client: string, cashIncome: number, expenditure: number){
        this.client = client;
        this.cashIncome = cashIncome;
        this.expenditure = expenditure;
    }

    // Method
    Summary(){
        return `${this.client} has given ${this.cashIncome} rupees and Expenditure was ${this.expenditure}`;
    }
    format(): string {
        return "I am using Prettier Code formatter"
    }
}