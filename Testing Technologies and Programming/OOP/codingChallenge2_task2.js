//coding task 1
class User {
    constructor (){
        this._firstName = "";
        this._lastName = "";
    }
    get getFirstName (){
        return this._firstName;
    }
    get getLastName (){
        return this._lastName;
    }
    set setFirstName (firstName){
        this._firstName = firstName;
    }

    set setLastName (lastName){
        this._lastName = lastName;
    }


    hello (firstName, lastName){
        console.log (`Hello ${this.firstName}, ${this.lastName}` );
    }
}

const user1 = new User ("Doe", "John");
console.log (user1.firstName, user1.lastName);
user1.hello();

const user2 = new User ("Jack", "London");
console.log(user2.getFirstName, user2.getLastName);

user2.setFirstName ="Mark";
user2.setLastName ="Twain";

console.log(user2.getFirstName, user2.getLastName);
user2.hello();



