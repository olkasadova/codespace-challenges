class User{
    constructor (username){
        this.username = username;
    }

    set setUsername (username){
        this.username = username;
    }
}

class Admin extends User{
    expressYourRole (){
       console.log ("role Admin");
    }
    sayHello (){
        console.log (`Hello admin, ${this.username}`);
    }
}

let user1 = new Admin ("user1");
user1.expressYourRole();
user1.setUsername ="Baltazar";

user1.sayHello();