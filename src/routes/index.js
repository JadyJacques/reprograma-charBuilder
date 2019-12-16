const express = require("express")
const router = express.Router()
/**
 * @api {get} /
 * @apiGroup Inicio
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      title: "Reprograma Projeto Char Builder",
 *      version: "0.0.1"
 *    }
 */
router.get("/", function(req, res) {
  res.status(200).send({
    title: "Reprograma Projeto Char Builder",
    version: "0.0.1"
  })
})

module.exports = router
