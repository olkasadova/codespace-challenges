//coding task 1
class User {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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





