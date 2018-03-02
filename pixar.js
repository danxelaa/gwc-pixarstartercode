/**
 * Created by jeffstern on 7/9/14.
 */


// This is the new way of creating JavaScript classes. It's not really a function.
function Movie(title, description, imageURL, year, trailer) {
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
    this.year = year;
    this.trailer = trailer;

}

// A list of all 14 Pixar movies.
var movies = [
    // Each of these lines of code makes a new Movie object from the movie class
    new Movie("Toy Story", "A bunch of toys talk about things.", "images/toystory.jpg", 1995,"https://www.youtube.com/watch?v=KYz2wyBy3kc"),
    new Movie("A Bug's Life", "Bug goes on adventure, people respect him afterward.", "images/bugslife.jpg", 1998, "https://www.youtube.com/watch?v=Ljk2YJ53_WI"),
    new Movie("Toy Story 2", "Woody is kidnapped. Oh noz!", "images/toystory2.jpg", 1999,"https://www.youtube.com/watch?v=Lu0sotERXhI"),
    new Movie("Monsters Inc.", "AH REAL MONSTERS.", "images/monstersinc.jpg", 2001, "https://www.youtube.com/watch?v=8IBNZ6O2kMk"),
    new Movie("Finding Nemo", "The most popular fish adventure movie of all time.", "images/findingnemo.jpg", 2003, "https://www.youtube.com/watch?v=SPHfeNgogVs&list=PL29NRGzManc4FD2_4CrKw-QuHIsmySRQo&index=6"),
    new Movie("The Incredibles", "Super heroes discover that family is the greatest power of all.", "images/incredibles.jpg", 2004, "https://www.youtube.com/watch?v=eZbzbC9285I"),
    new Movie("Cars", "Cars drive around really fast.", "images/cars.jpg", 2006, "https://www.youtube.com/watch?v=SbXIj2T-_uk"),
    new Movie("Ratatouille", "Rat has dream, rat follows dream.", "images/ratatouille.jpg", 2007, "https://www.youtube.com/watch?v=1yKqLNnxGZw"),
    new Movie("Wall-E", "A lot of advanced technology exists and Wall-E prefers trash.", "images/walle.jpg", 2008, "https://www.youtube.com/watch?v=8-_9n5DtKOc"),
    new Movie("Up", "How many balloons does it take to make a house fly up in the sky?", "images/up.jpg", 2009,"https://www.youtube.com/watch?v=qas5lWp7_R0"),
    new Movie("Toy Story 3", "The ultimate going-away-to-college film.", "images/toystory3.jpg", 2010, "https://www.youtube.com/watch?v=ZZv1vki4ou4"),
    new Movie("Cars 2", "So. Many. Explosions.", "images/cars2.jpg", 2011, "https://www.youtube.com/watch?v=oFTfAdauCOo"),
    new Movie("Brave", "Her hair was really hard to animate.", "images/brave.jpg", 2012, "https://www.youtube.com/watch?v=TEHWDA_6e3M"),
    new Movie("Monsters University", "College is exactly like this. Get pumped.", "images/monstersuniversity.jpg", 2013, "https://www.youtube.com/watch?v=xBzPioph8CI"),
    new Movie("Inside Out", "Everyone needs Sadness. Sadness is the best.", "images/insideout.jpg", 2015, "https://www.youtube.com/watch?v=yRUAzGQ3nSY"),
    new Movie("The Good Dinosaur", "A single moment can change history. A single KINDNESS can change EVERYTHING.", "images/gooddino.jpg",2015, "https://www.youtube.com/watch?v=O-RgquKVTPE")
]

/* showMovies
    Populates the movies div with each individual movie
    Input: An array of Movie objects
 */
function showMovies(movies) {
    $(" #movies ").empty(); // A jQuery method which clears the movies div
    for (var i = 0; i < movies.length; i++) {

        if(i%3==0) {
            $(" #movies ").append("<div class='row'></div>"); // A jQuery method to add a new row for every 3rd movie
        }

        // This string is the HTML that makes up each individual movie cell,
        // It uses movie[i] attributes so that each cell has unique information
        var movieHTML = "<div class='col-md-4 movie'>" +
            "<img class='movieImage' src='" + movies[i].imageURL + "' />" +
            "<h3 class='moviename'>" + movies[i].title + " (" + movies[i].year + ")</h3>" +
            "<p class='description'>" + movies[i].description + "</p>" +
            "<a class='trailer' href='" + movies[i].trailer + "' >Trailer</>";

        $(" #movies .row:last-child").append(movieHTML); // A jQuery method that adds the new HTML string to the last row in the movies div

        if(i%3==2) { $(" #movies ").append("</div>"); }

    }
}

/* sortButtonClicked
    Calls appropriate sort method based on which link was clicked and
        repopulates movie grid.
    Input: String representing which button was clicked on

 */
function sortButtonClicked(link) {
    if (link === "date") {
        sortMoviesByYear(movies);
    }
    else if (link == "title") {
        sortMoviesByTitle(movies);
    }
    else if(link == "shuffle") {
        shuffle(movies);
    }
    showMovies(movies);
}

/* shuffle
   Input: Array
   Output: Shuffled array
   Function courtesy of http://jsfromhell.com/array/shuffle
 */
function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

/* sortMoviesByYear
 You must implement a basic bubble sort algorithm to sort
 the movies based on it's year attribute.

    Input: a list of Movie objects.
    Output: Returns a list of Movie objects after they have been sorted by year.
*/
function sortMoviesByYear(movies) {
    var x = 0;
    var temp;
    while(x < movies.length) {
    for (var i=0; i< movies.length - 1; i++) {
        if (movies[i].year > movies[i+1].year) {
            temp = movies[i];
            movies[i]= movies[i+1];
            movies[i+1]= temp;
        }
    }
    x++;
    }
    return movies;
}

/* sortMoviesByTitle
 You must implement a basic bubble sort algorithm to sort
 the movies based on it's title attribute.

  Input: a list of Movie objects.
  Output: returns a list of Movie objects after they have been sorted by title.
 */
function sortMoviesByTitle(movies) {
    var x = 0;
    var temp;
    while(x < movies.length) {
       for(var i=0; i<movies.length - 1; i++) {
        if (movies[i].title > movies[i+1].title) {
            temp = movies[i];
            movies[i]=movies[i+1];
            movies[i+1]=temp;
            }
        }
        x++;
    }
    return movies;
}

// Code that gets run once the page has loaded. It also uses jQuery.
$(document).ready(function () {
    shuffle(movies);
    showMovies(movies);
});