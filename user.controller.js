
const User = require("../models/user.model");



exports.create = (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    isActive: req.body.isActive,
    userType: req.body.userType
  });
  user
  .save()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "The error occurred while creating the User.",
    });
  });
};

exports.findAll = (req, res) => {
  User.find()
    .sort({ name: -1 })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};
exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User was not found with id " + req.params.id,
        });
      }
      res.status(200).send(user);
      console.log(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};
exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User was not found ",
        });
      }
      res.send({ message: "User was successfully deleted!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Sorry, user was not deleted ",
      });
    });
};
exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
};