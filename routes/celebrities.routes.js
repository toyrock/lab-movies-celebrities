//iteration 1




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


module.exports = router;