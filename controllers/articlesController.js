const db = require('../models');

module.exports = {
    // Create Article Entry
    create: function(req, res) {
        db.Articles
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    }, 
    findAll: function(req,res) {
        db.Articles
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    // Find Articles by ID
    findById: function(req, res) {
        db.Articles
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },
    // Delete Articles
    remove: function(req, res) {
        db.Articles
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    }
};