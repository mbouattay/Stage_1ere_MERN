const ClientController = require("../Controllers/Client.Controller")
const express = require("express")
const router = express.Router() ; 
router.post("/",ClientController.create);
router.put("/edit/:idClient",ClientController.update); 
router.get("/showAll",ClientController.find);
router.delete("/remove/:ClientId",ClientController.delete)
module.exports = router ;  