class User{
    constructor (){
        this.numberofArticles=0;
    }
    set setNumberOfArticles (numberofArticles){
        this.numberofArticles = numberofArticles;
    }
    get getNumberOfArticles(){
        return this.numberofArticles;
    }
    calcScores(){
        console.log("calculated scores");
    }
}

class Author extends User{
    constructor (numberofArticles){
        super();
        this.numberofArticles = numberofArticles;
    }
    calcScores(){
        return this.numberofArticles * 10 + 20;
    }
}

class Editor extends User{
    constructor (numberofArticles){
        super();
        this.numberofArticles = numberofArticles;
    }
    calcScores (){
        return this.numberofArticles * 6 + 15;
    }
}

let author1 = new Author (7);

author1.setNumberOfArticles=8;
console.log (author1.getNumberOfArticles);
console.log(author1.calcScores());

let editor1 = new Editor (1);

editor1.setNumberOfArticles=15;
console.log (editor1.getNumberOfArticles);
console.log (editor1.calcScores());
