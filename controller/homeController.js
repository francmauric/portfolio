/* const path = require ("path"); */

let controller = {
    home: (req,res) =>{
        
        res.render("home")
    },
    home2: (req,res) =>{
        res.render("en/home-en")
    }
}

module.exports = controller;