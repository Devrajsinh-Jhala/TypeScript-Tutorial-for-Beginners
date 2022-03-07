// Classes are the blueprints for the object
// All properties of the class are public by default

class Business {
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
}

const business1 = new Business('Devraj', 25000, 5000);

// The below syntax means that only the objects created by Business class can be added to this array.
let allBusiness: Business[] = [];
// allBusiness.push('hello') Error!

allBusiness.push(business1); 
// above one valid