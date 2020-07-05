var express = require('express');
var router = express.Router();
var Bar = require('../models/bar.js');

router.get('/', async (req, res, next) => {
  try {
    let bares = await Bar.find();
    res.send(bares);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let bar = await Bar.findById(req.params.id);
    res.send(bar)
  } catch (err) {
    res.status(500).send("Bar não encontrado");
  }
})


router.post('/', async (req, res, next) => {
  let { nome, landscape,logo, localizacao, cardapio, code, foto,mural} = req.body;
  let bar = new Bar({ nome,logo, landscape, localizacao, cardapio, code, foto,mural });
  try {
    await bar.save();
    res.send(bar);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.delete('/', async (req, res, next) => {
  try {
    let remove = await Bar.remove();
    res.send(remove);
  } catch (err) {
    res.status(500).send("Erro ao remover: \n" + err);
  }
});

module.exports = router;