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
 *    [
{
"_id": "5df766106623fd1b3c71cd95",
"nickname": "aragantinis",
"faccao": "alianca",
"raca": "humano",
"genero": "male",
"classe": "mage",
"level": 30,
"__v": 0
},
{
"_id": "5df7a91cf8798a27284e5039",
"nickname": "darkj",
"faccao": "alianca",
"raca": "draenei",
"genero": "female",
"classe": "xamã",
"level": 85,
"__v": 0
},
{
"_id": "5df7a939f8798a27284e503a",
"nickname": "jerrik",
"faccao": "alianca",
"raca": "humano",
"genero": "male",
"classe": "paladin",
"level": 85,
"__v": 0
},
{
"_id": "5df7a95bf8798a27284e503b",
"nickname": "zero",
"faccao": "horda",
"raca": "elfo sangrento",
"genero": "male",
"classe": "paladin",
"level": 85,
"__v": 0
},
{
"_id": "5df7a971f8798a27284e503c",
"nickname": "natpoison",
"faccao": "horda",
"raca": "elfo sangrento",
"genero": "female",
"classe": "warlock",
"level": 85,
"__v": 0
},
{
"_id": "5df7a98bf8798a27284e503d",
"nickname": "flafuh",
"faccao": "alianca",
"raca": "elfo noturno",
"genero": "female",
"classe": "druid",
"level": 72,
"__v": 0
},
{
"_id": "5df7a9d4f8798a27284e503e",
"nickname": "scarmoon",
"faccao": "alianca",
"raca": "human",
"genero": "female",
"classe": "death knight",
"level": 80,
"__v": 0
},
{
"_id": "5df7a9eef8798a27284e503f",
"nickname": "paladinex",
"faccao": "alianca",
"raca": "human",
"genero": "male",
"classe": "paladin",
"level": 85,
"__v": 0
},
{
"_id": "5df7aa07f8798a27284e5040",
"nickname": "ruto",
"faccao": "alianca",
"raca": "human",
"genero": "female",
"classe": "priest",
"level": 85,
"__v": 0
},
{
"_id": "5df7aa26f8798a27284e5041",
"nickname": "sylvannas",
"faccao": "horda",
"raca": "elfo sangrento",
"genero": "female",
"classe": "hunter",
"level": 85,
"__v": 0
},
{
"_id": "5df7aa40f8798a27284e5042",
"nickname": "jaina",
"faccao": "aliaca",
"raca": "human",
"genero": "female",
"classe": "mage",
"level": 85,
"__v": 0
}
]
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
 *
 * * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
    "message": "darkj foi atualizado!"
    }
 */

router.put("/:nickname", controller.UpdatePersonagem)


module.exports = router
