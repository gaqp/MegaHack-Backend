var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/:id', async (req, res, next) => {

  try {
    let data = await User.findById(req.params.id);
    data ? res.send(data) : res.status(404).send("Usuário não encontrado");
  } catch (err) {
    res.status(500).send("Usuário não encontrado");
  }
})

router.post('/', async (req, res, next) => {
  let { nome, email, password, username, idade, cpf, telefone, contato_emergencia } = req.body;
  let user = new User({ nome, email, password, username, idade, cpf, telefone, contato_emergencia, cervejas: 0 });
  console.log(user);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.delete('/', async (req, res, next) => {
  try {
    let remove = await User.deleteMany();
    res.send(remove);
  } catch (err) {
    res.status(500).send("Erro ao remover");
  }
})


module.exports = router;
