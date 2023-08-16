const Router = require('express');
const router = new Router()
const brandController = require('../controllers/brandController')
const roleMiddleware = require('../middleware/roleMiddleware')


router.post('/',roleMiddleware('ADMIN'), brandController.create);
router.get('/', brandController.getAll);
router.delete('/:id',roleMiddleware('ADMIN'), brandController.deleteById);

module.exports = router