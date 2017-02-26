var crud = {
    get: function(Model) {
        return function(req, res) {
            Model.findOne({_id: req.params.id}, function(err, response) {
                res.json(response);
            });
        }
    },

    update: function(Model) {
        return function(req, res) {
            Model.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true}, function(err, response) {
                res.json(response);
            });
        }
    }
};

module.exports = crud;
