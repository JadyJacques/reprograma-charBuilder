const express = require("express")
const router = express.Router()
const controller = require("../controllers/personagensController")

/**
 * @api {get} /personagens Listar personagens
 * @apiName Listar
 * @apiGroup Personagens
 *
 * @apiSuccess {Array} Personagens Lista de todos personagens
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Você saiu do sistema!"
 *    }
 */

router.get("/", controller.get)

/**
 * @api {get} /personagens/:nickname Filtrar pelo nickname
 * @apiName Filtar pelo nickname
 * @apiGroup Personagens
 *
 * @apiSuccess {Personagem} Personagem Personagem com nickname
 */

router.get("/:nickname", controller.getByNickname)

/**
 * @api {get} /personagens/filterByClass/:classe
 * @apiName Filtar pela classe
 * @apiGroup Personagens
 *
 * @apiSuccess {Array} Personagens Lista de personagens
 */

router.get("/filterByClass/:classe", controller.getByClass)

/**
 * @api {post} /personagens
 * @apiName Criar Personagem
 * @apiGroup Personagens
 *
 * @apiSuccess {Personagem} Personagens Lista de personagens
 */

router.post("/", controller.post)

/**
 * @api {delete} /personagens/:nickname
 * @apiName Deletar Personagem
 * @apiGroup Personagens
 *
 * @apiSuccess {Personagem} Personagens Lista de personagens
 */
router.delete("/:nickname", controller.DeletePersonagem)

/**
 * @api {put} /personagens/:nickname
 * @apiName Atualizar personagem
 * @apiGroup Personagens
 *
 * @apiSuccess {Personagem} Personagens Lista de personagens
 */

router.put("/:nickname", controller.UpdatePersonagem)


module.exports = router
