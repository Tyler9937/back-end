const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');
const router = express.Router();
const Users = require('../users/user-Modal');
const Joi = require('@hapi/joi');

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .required()
    .min(1)
    .max(30),
  email: Joi.string()
    .email()
    .empty('')
    .default('No Email Provided')
});

router.post('/register', (req, res) => {
  let user = req.body;
  console.log(req.body, 'body');
  console.log(schema.validate(user).value, 'testing');
  let newuser = schema.validate(user).value;
  if (!schema.validate(user).error) {
    const hash = bcrypt.hashSync(newuser.password, 10);
    newuser.password = hash;

    Users.add(newuser)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  } else {
    res.status(500).json(schema.validate(user).error);
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  if (username && password) {
    Users.findBy({ username })
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: 'Login Successful',
            token
          });
        } else {
          res.status(500).json({ Error: 'Login error' });
        }
      })
      .catch(({ name, message, stack, code }) =>
        res.status(500).json({ name, message, stack, code })
      );
  } else {
    res.status(400).json({ message: 'invalid username or password' });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    email: user.email
  };
  const options = {
    expiresIn: '3h'
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
