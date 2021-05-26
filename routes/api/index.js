const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes');
const discussionRoutes = require('./discussionRoutes.js')

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/discussion', discussionRoutes);

module.exports = router;