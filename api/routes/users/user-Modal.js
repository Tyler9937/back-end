const db = require('../../../data/db.config');

module.exports = { find, add, findBy };

function find(id) {
  let user = db('users');
  if (id) {
    return user.where({ id }).first();
  } else {
    return user;
  }
}

async function add(user) {
  await db('users').insert(user);

  return findBy(user);
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}
