const db = require('../models');

module.exports = {
    // Create Discussion Entry
    create: function(req, res) {
        db.Discussion
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    }, 
    findAll: function(req,res) {
        db.Discussion
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err))
    },
    // Find Discussion by ID
    findById: function(req, res) {
        db.Discussion
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    },
    // Delete Discussion
    remove: function(req, res) {
        db.Discussion
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(500).json(err));
    }
};