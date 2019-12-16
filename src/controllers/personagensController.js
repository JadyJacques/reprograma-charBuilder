const Personagens = require('../model/personagens.js');

// const fs = require('fs');


//get de todos os personagens
exports.get = (req, res) => {
  Personagens.find(function (err, personagens) {
    console.log(personagens);
    res.status(200).send(personagens);
  })
}

//post de novo personagem - criação de novo personagem
exports.post = (req, res) => {

  const { nickname, faccao, raca, genero, classe, level } = req.body;
  let personagem = new Personagens({ nickname, faccao, raca, genero, classe, level })
  personagem.save(function (err) {
    if (err) res.status(500).send('deu ruim, mano')

    res.status(201).send({
      status: true,
      mensagem: "Personagem salvo com sucesso!"
    });
    // saved!
  });
}

//procurar personagem pelo nome/nickname

exports.getByNickname = (req, res) => {
  const nickname = req.params.nickname
  Personagens.findOne({ nickname }, function (err, personagem) {
    if (err) res.status(500).send('deu ruim, mano')

    res.status(201).send(personagem)
  })
}

exports.getByClass = (req, res) => {
  const classe = req.params.classe
  Personagens.find({ classe }, function (err, personagem) {
    if (err) res.status(500).send('deu ruim, mano')

    res.status(200).send(personagem)
  })
}

//deletar personagem
exports.DeletePersonagem = (req, res) => {
  const deleteNickname = req.params.nickname

  Personagens.findOneAndDelete(deleteNickname)
    .then((personagem) => {
      if (!personagem) {
        return res.status(200).send({ message: 'personagem não localizado!' })
      }

      return res.status(200).send({ message: 'personagem removido com sucesso!' })
    })
    .catch((err) => {
      return res.status(500).send({ message: err })
    })
}

exports.UpdatePersonagem = async (req, res) => {
  const filter = { nickname: req.params.nickname };
  const update = req.body;

  try {
    let personagem = await Personagens.findOneAndUpdate(filter, update, {
      new: true
    });

    if (!personagem) {
      res.status(200).send({ message: 'personagem não localizado!' })
    }
    res.status(200).send({ message: `${personagem.nickname} foi atualizado!` })
  } catch (err) {
    res.status(500).send({ message: err })
  }
}