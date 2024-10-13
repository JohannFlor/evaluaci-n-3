const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");


//tabla pivote de Movies y Directors

Actor.belongsToMany(Movie,{through:'actorMovie'})
Movie.belongsToMany(Actor,{through:'actorMovie'})

// tabla pivote de Movie y Genre

Genre.belongsToMany(Movie,{through:'genreMovie'})
Movie.belongsToMany(Genre,{through:'genreMovie'})

//tabla pivote de Movie y Actors

Director.belongsToMany(Movie,{through:'directorMovie'})
Movie.belongsToMany(Director,{through:'directorMovie'})

