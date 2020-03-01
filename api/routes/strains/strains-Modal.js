const db = require('../../../data/db.config');

module.exports = { find, add, findBy };

function find(id) {
  let strains = db('strains');
  if (id) {
    return strains.where({ id }).first();
  } else {
    return strains;
  }
}

async function add(strain) {
  await db('strains').insert(strain);

  return findBy(strain);
}

function findBy(filter) {
  return db('strains')
    .where(filter)
    .first();
}
