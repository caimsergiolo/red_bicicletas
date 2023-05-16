var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicileta_list);
router.get('/create', bicicletaController.biciclta_create_get);
router.post('/create', bicicletaController.biciclta_create_post);
router.get('/:id/update', bicicletaController.biciclta_update_get);
router.post('/:id/update', bicicletaController.biciclta_update_post);
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);

module.exports =router;