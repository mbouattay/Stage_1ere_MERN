const MedecinController = require("../Controllers/Medecin.Controller")
const express = require("express")
const router = express.Router() ; 
router.post("/",MedecinController.create);
router.put("/edit/:idMedecin",MedecinController.update); 
router.get("/showAll",MedecinController.find);
router.delete("/remove/:MedecinId",MedecinController.delete)
module.exports = router ;  