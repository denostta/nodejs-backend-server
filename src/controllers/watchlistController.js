import {prisma} from '../config/db.js'

const addToWatchlist = async(req, res) => {
    const {movieId, status, rating, notes} = req.body
    console.log(movieId);
    
    //verify if the movie exist the the movie table in db
    const movie = await prisma.movie.findUnique(
        {where:{id: movieId}}
    )

    // response if movie not existing in the movie table in db
    if (!movie){
        res.status(404).json({error: "movie not found"})
    }

    //check if movie is already in the watchlist
    const existInWatchlist = await prisma.watchlistItem.findUnique(
        {
            where: {userId_movieId: {
                userId: req.user.id,
                movieId: movieId
            }}
        }
    )

    // response if movie is already in watchlistItem table in database
    if (existInWatchlist){
        res.status(400).json({error: "movie already exist in watchlist"})
    }


    //create new watchlistItem
     const watchlistItem = await prisma.watchlistItem.create({
        data: {
            userId: req.user.id,
            movieId,
            status: status || "PLANNED",
            rating, 
            notes,
        }
     })

    //response if successful
    res.status(201).json({status: 'success', data: {watchlistItem,}})
}


export {addToWatchlist}