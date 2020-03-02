exports.up = function(knex) {
  return knex.schema.alterTable('users', tbl => {
    tbl
      .specificType('favorite_strains', 'text ARRAY')
      .defaultTo('{}')
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', tbl => {
    tbl.specificType('favorite_strains', 'text ARRAY').alter();
  });
};
