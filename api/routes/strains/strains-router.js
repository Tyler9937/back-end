const express = require('express');
const router = express.Router();
const Strains = require('../users/user-Modal');
const query = require('../../query');

router.get('/', (req, res) => {
  const { limit, sortby, sortdir } = req.query;

  query
    .getStrains({ limit, sortby, sortdir })
    .then(strain => res.status(200).json(strain))
    .catch(err => res.status(500).json(err.message));
});

module.exports = router;
