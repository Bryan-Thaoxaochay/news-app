const router = require("express").Router();
const discussionController = require("../../controllers/discussionController");

// Matches with "/api/books"
router.route("/")
  .get(discussionController.findAll)
  .post(discussionController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(discussionController.findById)
  .delete(discussionController.remove);

module.exports = router;