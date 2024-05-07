class User {
    constructor (){
        this._username = "";
    }
    stateYourRole() {
        // Throw an error if the abstract method is called directly from a child class
        throw new TypeError("Do not call abstract method deposit from child.");
      }

      set setUserName (username){
        this._username=username;
      }
      get getUserName(){
        return this._username;
      }
      //abstract method
      stateYourRole(){
        throw newError (" Method must be implemented in the subclass");
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
admin1.stateYourRole(); 

let viewer1 = new Viewer ();
viewer1.setUserName = "Melchior";
console.log (viewer1.getUserName);
viewer1.stateYourRole();