const express = require("express")
const mongoose = require("mongoose")

const app = express()
require('dotenv').config()

mongoose.connect(process.env.URL_MONGO, { useNewUrlParser: true});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("conexão feita com sucesso.")
})

//rotas
const index = require("./routes/index")
const personagens = require("./routes/personagensRoute")

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/personagens", personagens)

module.exports = app
