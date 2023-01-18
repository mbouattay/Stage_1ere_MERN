const ResultatController = require("../Controllers/Resultat.Controller")
const express = require("express")
const router = express.Router() ;
const upload = require ("../middleware/uploads")
router.post("/",upload.single('Analyse'),ResultatController.create);
module.exports = router ;  