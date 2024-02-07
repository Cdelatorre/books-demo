const User = require("./../models/User.model");

module.exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
};

module.exports.userDetail = (req, res, next) => {
  User.findById(req.params.id)
    .populate({
      path: "books",
      populate: {
        path: "user",
      },
    })
    .then((user) => {
      res.json(user);
    })
    .catch(next);
};
