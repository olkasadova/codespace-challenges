class Shape{
    constructor() {}
    area() {
        console.log("Area method implemented...");
    }
}

class Square extends Shape{
    //constructor
    constructor(side) {
        super ();
        this.side = side;
    }
    //override method area from superclass
    area (side) {
        return this.side ** 2;
    }
}

class Circle extends Shape{
    //constructor
    constructor(side) {
        super ();
        this.radius = radius;
    }
    //override method area from superclass
    area (radius) {
        return Math.PI * this.radius ** 2;
    }
}

const square = new Square (2);
const circle = new Circle (2);

console.log ("Square area: ", square.area);
console.log ("Circle area: ", circle.area);


class BankAccount {
    //Class constructor

    constructor (balance) {
        if (this.constructor===BankAccount) {
            throw new TypeError ("Cannot be instantiated...");
        }
        this.balance = balance;
    }

    //Abstract method
    deposit (amount){
        throw new TypeError ("This method cannot be calcukated");
    }
    withdraw (amount){
        throw new TypeError ("This method cannot be calcukated");
    }
}

//create a Savings account
class SavingsAccount extends BankAccount {
    constructor (balance, interestRate) {
        // call the superclass constructor
        super (balance);
        this.interestRate = interestRate;
    }

    //Override method
    deposit (amount){
        this.balance += amount + (amount* this.interestRate) /100;
    }
    withdraw (amount){
        //check if we have suff funds
        if (amount<= this.balance) {
            this.balance -= amount;
        }
        else{
            console.log ("Insufficient funds");
        }
        
    }
}

class BasicAccount extends BankAccount {
    constructor (balance, overdraftLimit) {
        // call the superclass constructor
        super (balance);
        this.overdraftLimit = overdraftLimit;
    }

    //Override method
    deposit (amount){
        this.balance += amount + (amount* this.interestRate) /100;
    }
    withdraw (amount){
        //check if we have suff funds
        if (amount<= this.balance + this. overdraftLimit) {
            this.balance -= amount;
        }
        else{
            console.log ("Insufficient funds");
        }
        
    }
}

//create a Basic account

const myBankAccount =  new BankAccount (balance);
const savingsAccount = this.SavingsAccount (1000, 5);
savingsAccount.deposit (200);
console.log ("Balance after deposit: ", savingsAccount.balance);

// Withdraw
savingsAccount.withdraw (100);
console.log ("Balance afetr withdraw: ", basicAccount.balance);

const basicAccount = this. BasicAccount (1500, 200);
basicAccount.deposit (200);
console.log ("Balance after deposit: ", basicAccount.balance);

// Withdraw
basicAccount.withdraw (100);
console.log ("Balance afetr withdraw: ", savingsAccount.balance);