const express = require('express');
const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    id: String,
    rank:String,
    title: String,
    fullTittle: String,
    year: String,
    image: String,
    crew: String,
    imDbRating: String,
    imDbRatingCount: String
})
    
const Movie = mongoose.model('Movie', movieSchema);

const userRouter = express.Router();

userRouter.get('/all', getMovies);
userRouter.get('/all/:title', getSingleMovie);
userRouter.get('/allByRating/:rating', getMoviesByRating);
userRouter.get('/movies', searchMovies);



module.exports = userRouter;


async function getMovies(req, res) {
    try {
        let { skip, limit, sortBy, field } = req.query;
        let movies = await Movie.find().sort({[field]:sortBy}).skip(skip).limit(limit);
        res.status(200).send({
            data : movies
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}

async function getSingleMovie(req, res) {
    try {
        let title = req.params.title;
        let movie = await Movie.find({title: title});
        res.status(200).send({
            data : movie
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}

async function getMoviesByRating(req, res) {
    try {
        let rating = req.params.rating;
        let movies = await Movie.find({imDbRating: rating});
        res.status(200).send({
            data : movies
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}

async function searchMovies(req, res) {
    try {
        let { q } = req.query;
        let movies = await Movie.find({title: {$regex: q}});
        res.status(200).send({
            data : movies
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).send(error);
    }
}