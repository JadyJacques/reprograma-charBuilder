const express = require("express")
const router = express.Router()
const controller = require("../controllers/personagensController")

router.get("/", controller.get)
router.get("/:nickname", controller.getByNickname)
router.get("/filterByClass/:classe", controller.getByClass)
router.post("/", controller.post)
router.delete("/:nickname", controller.DeletePersonagem)
router.put("/:nickname", controller.UpdatePersonagem)


module.exports = router
