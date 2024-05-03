class User {
    constructor (username){
        this.username = username;
    }
    stateYourRole() {
        // Throw an error if the abstract method is called directly from a child class
        throw new TypeError("Do not call abstract method deposit from child.");
      }

      set setUserName (username){
        this.username=username;
      }
      get getUserName(){
        return this.username;
      }
}
class Admin extends User{
    constructor (){
        super();
    }
    stateYourRole (){
        console.log ("you have admin role");
    }
}

class Viewer extends User{
    constructor () {
        super();
    }
    stateYourRole () {
        console.log ("you have viewer role");
    }
}

let admin1 = new Admin ();
admin1.setUserName = "Baltazar";
console.log(admin1.getUserName);

let viewer1 = new Viewer ();
viewer1.setUserName = "Melchior";
console.log (viewer1.getUserName);