import "dotenv/config";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// ... rest of your file unchanged
const userId = "f895b09b-0c7a-487c-a173-b29c02d39aff"

const movies = [
  {
    title: "Inception",
    overview: "A skilled thief steals secrets through dream-sharing technology.",
    releaseYear: 2010,
    genres: ["Sci-Fi", "Action"],
    runtime: 148,
    posterUrl: "https://image.tmdb.org/t/p/inception.jpg",
    createdBy: userId
  },
  {
    title: "Interstellar",
    overview: "A team travels through a wormhole to save humanity.",
    releaseYear: 2014,
    genres: ["Sci-Fi", "Drama"],
    runtime: 169,
    posterUrl: "https://image.tmdb.org/t/p/interstellar.jpg",
    createdBy: userId
  },
  {
    title: "The Dark Knight",
    overview: "Batman faces the Joker in a battle for Gotham.",
    releaseYear: 2008,
    genres: ["Action", "Crime"],
    runtime: 152,
    posterUrl: "https://image.tmdb.org/t/p/darkknight.jpg",
    createdBy: userId
  },
  {
    title: "Avengers: Endgame",
    overview: "The Avengers assemble to undo Thanos' destruction.",
    releaseYear: 2019,
    genres: ["Action", "Superhero"],
    runtime: 181,
    posterUrl: "https://image.tmdb.org/t/p/endgame.jpg",
    createdBy: userId
  },
  {
    title: "Parasite",
    overview: "A poor family infiltrates a wealthy household.",
    releaseYear: 2019,
    genres: ["Thriller", "Drama"],
    runtime: 132,
    posterUrl: "https://image.tmdb.org/t/p/parasite.jpg",
    createdBy: userId
  },
  {
    title: "Titanic",
    overview: "A romance unfolds aboard the doomed ship Titanic.",
    releaseYear: 1997,
    genres: ["Romance", "Drama"],
    runtime: 195,
    posterUrl: "https://image.tmdb.org/t/p/titanic.jpg",
    createdBy: userId
  },
  {
    title: "The Matrix",
    overview: "A hacker discovers the reality is a simulation.",
    releaseYear: 1999,
    genres: ["Sci-Fi", "Action"],
    runtime: 136,
    posterUrl: "https://image.tmdb.org/t/p/matrix.jpg",
    createdBy: userId
  },
  {
    title: "Gladiator",
    overview: "A Roman general seeks revenge against a corrupt emperor.",
    releaseYear: 2000,
    genres: ["Action", "Drama"],
    runtime: 155,
    posterUrl: "https://image.tmdb.org/t/p/gladiator.jpg",
    createdBy: userId
  },
  {
    title: "Joker",
    overview: "The origin story of Gotham's infamous villain.",
    releaseYear: 2019,
    genres: ["Drama", "Crime"],
    runtime: 122,
    posterUrl: "https://image.tmdb.org/t/p/joker.jpg",
    createdBy: userId
  },
  {
    title: "Spider-Man: No Way Home",
    overview: "Spider-Man faces villains from different universes.",
    releaseYear: 2021,
    genres: ["Action", "Adventure"],
    runtime: 148,
    posterUrl: "https://image.tmdb.org/t/p/spiderman.jpg",
    createdBy: userId
  }
];

const main = async () => {
    console.log("Seeding movies..");
    
    for (const movie of movies) {
       await prisma.movie.create({
        data: movie,
       })
       console.log(`Created movie: ${movie.title}`);
    }
    console.log(`Seeding completed.`);
}


main().catch((err) => {
    console.log(err);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
}) 