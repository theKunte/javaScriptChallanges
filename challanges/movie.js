/*
Task:

Create a Movie object that takes 5 arguments 
Title, Director, Genre, Release year and Rating

should have a function - getOverview 
Class syntax or Function syntax

*/


//Function Syntax solution

// function Movie( title, director, genre, releaseYear, rating){
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rating = rating;
// }


// Movie.prototype.getOverview = function(){
//     return`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of  ${this.rating}`;
// }

class Movie{
    constructor(title,director,genre,releaseYear,rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;    
    }

    getOverview(){
        return`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of  ${this.rating}`;
        }

    }



const Avatar = new Movie("Avatar", "James Cameron", "Fiction", 2009, 4.6);
const Spiderman = new Movie("Spiderman", "Sam Raimi","Action", 2002, 87);

console.log(Avatar);
console.log(Avatar.getOverview());
console.log(Spiderman.getOverview());
