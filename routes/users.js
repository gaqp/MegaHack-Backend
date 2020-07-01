var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const data = await User.find();
    res.send(data);
  }catch(err){
    res.status(500).send(err);
  }
});
router.get('/:id', async (req, res, next) => {

  try {
    let data = await User.findById(req.params.id);
    data ? res.send(data) : res.status(404).send("Usuário não encontrado");  
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req, res, next) => {
  let { nome, email, idade, cpf, telefone, contato_emergencia } = req.body;
  let user = new User({ nome, email, idade, cpf, telefone, contato_emergencia, cervejas: 0 });
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
    let remove = await User.remove();
    res.send(remove);
  } catch (err) {
    res.status(500).send(err);
  }
})


module.exports = router;
