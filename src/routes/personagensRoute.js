const express = require("express")
const router = express.Router()
const controller = require("../controllers/personagensController")

router.get("/", controller.get)


module.exports = router
