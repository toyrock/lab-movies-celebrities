// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require ("../models/Celebrity.model");
// all your routes here


// create the GET
router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity");
});

// we creating post for <form action="/celebrities/create" method="post"> 
router.post("/create", async (req, res) =>{
    const celebrity = new Celebrity(); // data in the body empty module
    celebrity.name = req.body.name ;// data coming from 3 times
    celebrity.occupation = req.body.occupation;
    celebrity.catchPhrase = req.body.catchPhrase;
   //redirect turn back main page after save.
    try{ 
    await celebrity.save();
    res.redirect("/");
  } catch (error) {
    res.redirect("/celebrities/create");
  }
    
});


router.get('/', async (req, res) => {
    const celebrities = await Celebrity.find(); //no argument we want all. leave empty
    res.render('celebrities/celebrities', {celebrities} );  // pass {celebrities} to tamplete
});

module.exports = router;




























/* //iteration 1




// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
// all your routes here
//iteration 3.1 and 3.2
router.get("/celebrities/create", (req, res) =>{
    res.render("celebrities/new-celebrity");
});

// Create POST route. iteration 3.4 3.5  ?
router.post("/celebrities/create", async (req , res) =>{
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.create ({
        name,
        occupation,
        catchPhrase,
//buraya bi bak sikinti var.
    });
    res.redirect("/celebrities");
});

//used find() method to retrieve all the celebrities
router.get("/celebrities" , async (req, res) =>{
    const allCelebrities = await Celebrity.find(); 
    res.render("celebrities/celebrities", {allCelebrities})
});


module.exports = router; */