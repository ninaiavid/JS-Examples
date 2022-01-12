class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    };
    get title(){
        return this._title;
    };
    get _isCheckedOut(){
        return this.isCheckedOut;
    };
    get ratings(){
        return this._ratings;
    };
    toggleCheckOutStatus(){
        if (this._isCheckedOut===true){
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    };

    getAverageRating(){
        let sum = this._ratings.reduce((prev, current) => prev + current, 0)
        return (sum/this._ratings.length)
    };
    addRating(ratings){
        this._ratings.push(ratings)
    };
    set _isCheckedOut(check) {
        this.isCheckedOut=check;
    };
}
class Book extends Media {
    constructor (title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    };
    get author(){
        return this._author
    };
    get pages(){
        return this._pages
    }; 
}
class Movie extends Media {
    constructor (title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    };
    get director(){
        return this._director
    };
    get runTime(){
        return this._runTime
    }; 
}
class CD extends Media {
    constructor (title, artist, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    };
    get artist(){
        return this._artist
    };
    get songs(){
        return this._songs
    }; 
}

const historyOfEverything = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());