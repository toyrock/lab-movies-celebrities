// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const async = require("hbs/lib/async");
//we will use celebrity module
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/movie.models")

// all your routes here
router.get('/create', async (req, res)=>{
    const celebrities = await Celebrity.find() //all of them
    res.render('movies/new-movie', {celebrities});
})
router.post('/create', async (req, res) =>{
    
    const movie= new Movie();
    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.plot = req.body.plot;
    movie.cast = req.body.cast;
    try {
        await movie.save()
        res.redirect('/movies')
    }   catch (error) {
        res.redirect('/movies/create')
    }
});

//GET 
router.get('/', async (req, res) =>{
    const movies = await Movie.find();
    res.render('movies/movies', { movies });
});
//GET details
router.get("/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate("cast"); //we add .populate("cast"); display the name. no more ID in Data
    res.render('movies/movie-details', {movie});
});
//Delete

router.post('/:id/delete', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
});

//edit get

router.get('/:id/edit', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    const celebrities = await Celebrity.find();
    res.render('movies/edit-movie', { movie, celebrities });

});

//edit post

router.post('/:id/edit', async (req, res) => {
    const movie = await Movie.findByIdAndUpdate (req.params.id, { 
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
    });
    res.redirect('/movies');
    
    /* 
    //findByID way
    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.plot = req.body.plot;
    movie.cast = req.body.cast;
    
    try{
        await movie.save();
        res.redirect('/movies')
    } catch (error){
        res.redirect (`/movies/${movie.id}/edit`);

    } */
});

module.exports = router;

