var express = require('express'),
    router  = express.Router();

var membersController = require('../controllers/membersController');

router.route('/')
  .get(membersController.membersIndex)
 
router.route('/members')
  .get(membersController.membersIndex)
  .post(membersController.membersCreate)

router.route('/members/:id') 
  .get(membersController.membersShow)
  .patch(membersController.membersUpdate)
  .delete(membersController.membersDelete)

module.exports = router;