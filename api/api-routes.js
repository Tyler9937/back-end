const express = require('express');
const router = express.Router();
const AuthRouter = require('../api/routes/auth/auth-route');
const restricted = require('../api/routes/auth/restricted-middleware');
const UserRouter = require('../api/routes/users/user-route');
const StrainsRouter = require('../api/routes/strains/strains-router');

router.get('/', (req, res) => {
  res.status(200).json({ welcome: 'MedCabinet' });
});

router.use('/auth', AuthRouter);
router.use('/users', restricted, UserRouter);
router.use('/strains', restricted, StrainsRouter);

module.exports = router;

// If a role is needed later ----

// function checkRole(...roles) {
//   return (req, res, next) => {
//     console.log(req.decodedToken);
//     if (
//       req.decodedToken &&
//       req.decodedToken.department &&
//       roles.includes(req.decodedToken.department.toLowerCase())
//     ) {
//       next();
//     } else {
//       res.status(403).json({ message: `Don't have access!` });
//     }
//   };
// }
