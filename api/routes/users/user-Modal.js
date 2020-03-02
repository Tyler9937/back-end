const db = require('../../../data/db.config');

module.exports = { find, add, findBy, update, remove };

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

function update(id, user) {
  return db('users')
    .where({ id })
    .update(user)
    .then(updated => (updated > 0 ? find(id) : null));
}

function remove(id) {
  return db('users')
    .where({ id })
    .del()
    .then(res => find());
}
