const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// the celebrities Routes
const celebritiesRoutes = require('./celebrities.routes');
router.use('/celebrities', celebritiesRoutes);  

//we dont have app up. used router

// the Movies Routes
const moviesRoutes = require('./movies.routes');
router.use('/movies', moviesRoutes); 

module.exports = router
 