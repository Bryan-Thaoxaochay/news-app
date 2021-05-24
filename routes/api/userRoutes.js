const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches w/ '/api/signup'
router.route('/')
  .get(usersController.findAll)
  .post(usersController.create);

// Matches w/ '/api/signup/:id'
router.route('/id')
  .get(usersController.findById)
  .delete(usersController.remove);

module.exports = router;