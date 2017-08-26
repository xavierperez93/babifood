var express = require('express');
var router = express.Router();

//Connexion utilisateur
router.get('/',function(req,res,next){
    res.send("Bienvenue sur la page de Login de BabiFood");
});
module.exports = router;