const express = require('express')
const mongoose = require("mongoose")
const dotenv =require("dotenv").config()
const app = express ()
const port = 3000
app.use(express.json())
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECT)
mongoose.connection.on("connected",()=>{
    console.log("database connect successfully .")
})
mongoose.connection.on("error",(err)=>{
    console.log(" error to connect with database",err)
})
const routerMedecin = require("./Routers/Medecin.Router")
const routerClient = require("./Routers/Client.Router")
const routerTest = require("./Routers/Test.Router")
const routerResultat = require("./Routers/Resultat.Router")
app.use("/medecin",routerMedecin)
app.use("/client",routerClient)
app.use("/test",routerTest)
app.use("/resultat",routerResultat)

app.listen(port,()=>{
    console.log(`app raninig on port ${port}`)
})