class User{
    constructor (){
        this._numberofArticles=0;
    }
    set setNumberOfArticles (numberofArticles){
        this._numberofArticles = numberofArticles;
    }
    get getNumberOfArticles(){
        return this._numberofArticles;
    }
    calcScores(){
        console.log("calculated scores");
    }
}

class Author extends User{
    constructor (){
        super();
    }
    calcScores(){
        return this.getNumberOfArticles * 10 + 20;
    }
}

class Editor extends User{
    constructor (){
        super();
    }
    calcScores (){
        return this.getNumberOfArticles * 6 + 15;
    }
}

const author1 = new Author ();

author1.setNumberOfArticles=8;
console.log (author1.getNumberOfArticles);
console.log(author1.calcScores());

let editor1 = new Editor ();

editor1.setNumberOfArticles=15;
console.log (editor1.getNumberOfArticles);
console.log (editor1.calcScores());
