class User{
    constructor (){
        this._username = "";
    }

    set setUsername (username){
        this._username = username;
    }
    get getUsername (){
        return this._username;
    }
}

class Admin extends User{
    constructor() {
        super();
    }

    expressYourRole (){
       return ("role Admin");
    }
    sayHello (){
        console.log (`Hello admin, ${this.getUsername}`);
    }
}

let user1 = new Admin ();
user1.setUsername ="Baltazar";
user1.getUsername;
console.log(user1.getUsername);

user1.sayHello();
console.log(user1.expressYourRole());