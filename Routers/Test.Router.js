const TestController = require("../Controllers/Test.Controller")
const express = require("express")
const router = express.Router() ; 
router.post("/",TestController.create);
router.put("/edit/:idTest",TestController.update); 
router.get("/showAll",TestController.find);
router.delete("/remove/:TestId",TestController.delete)
module.exports = router ;  