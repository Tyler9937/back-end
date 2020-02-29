exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl
      .text('username')
      .notNullable()
      .unique();
    tbl.text('password').notNullable();
    tbl.text('email');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
