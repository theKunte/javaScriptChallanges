
// /*
// Book store challange 
// */

// function Book(title, author, ISBN, numCopies){
//     this.title = title;
//     this. author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }

// Book.prototype.getAvailibility = function(){
//     if(this.numCopies === 0){
//         return "Out of stock"; 
//     } else if (this.numCopies <10){
//         return "Low stock";
//     }
//     return "In Stock";
// }

// Book.prototype.sell = function(numCopiesSold = 1){
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5){
//     this.numCopies += numCopiesStocked;
// }


class Book{
    constructor(title, author, ISBN, numCopies){
        this.title =title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get availability(){
        return this.getAvailibility();
    }

    getAvailibility(){
        if( this.numCopies === 0){
            return "Out of Stock";
        } else if (this.numCopies <10){
            return "Low stock";
        }
        return "In Stock";
    }

    sell(numCopiesSold = 5){
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestocked = 5){
        this.numCopies += numCopiesRestocked;
    }

}

const HungerGames = new Book ("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailibility());
HungerGames.restock(12);
console.log(HungerGames.getAvailibility());
HungerGames.sell(17);
console.log(HungerGames.getAvailibility());

// Enherit form the Book class

class TechnicalBook extends Book{
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies);
        this.edition = edition;

    }

    getEdition(){
        return ` The current version of this book is ${this.edition}.`;
    }
}

const CrackingTheCodingInterview = new TechnicalBook(
    "Cracking The Coding Interview", "Gayle Laackmann McDowell", 1209123, 7, "2.3"
);

console.log(CrackingTheCodingInterview.availability);
console.log(CrackingTheCodingInterview.getEdition()); //test
