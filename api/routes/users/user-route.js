const express = require('express');
const router = express.Router();
const User = require('../users/user-Modal');
const Joi = require('@hapi/joi');

const schema = Joi.object({
  email: Joi.string()
    .email()
    .allow(''),
  favorite_strains: Joi.array().unique()
});

router.get('/', (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err.message));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.find(id)
    .then(user =>
      user
        ? res.status(200).json(user)
        : res
            .status(404)
            .json({ error: "couldn't find user, make sure id is valid" })
    )
    .catch(err => res.status(500).json(err.message, err.stack));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;

  let user = req.body;
  let newuser = schema.validate(user).value;
  if (Object.keys(user).length === 0 || schema.validate(user).error) {
    return res.status(500).json(schema.validate(user).error);
  } else {
    User.update(id, newuser)
      .then(update => res.status(200).json(update))
      .catch(err => res.status(500).json(err.message));
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.remove(id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
