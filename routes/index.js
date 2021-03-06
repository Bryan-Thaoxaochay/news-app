const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// Send React App
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;