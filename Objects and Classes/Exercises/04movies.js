function movies(data) {

    let moviesList = [];

    data.forEach(line => {
        if (line.includes("addMovie ")) {
            let name = line.split("addMovie ")[1];
            moviesList.push({ name })
        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ")
            let movie = moviesList.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");
            let movie = moviesList.find(el => el.name === name);

            if (movie) {
                movie.date = date
            }
        }
    });

    moviesList.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([

    'addMovie The Avengers',

    'addMovie Superman',

    'The Avengers directedBy Anthony Russo',

    'The Avengers onDate 30.07.2010',

    'Captain America onDate 30.07.2010',

    'Captain America directedBy Joe Russo'

])