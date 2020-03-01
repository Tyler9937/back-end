exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('id');
      tbl
        .text('username')
        .notNullable()
        .unique();
      tbl.text('password').notNullable();
      tbl.text('email');

      tbl.specificType('favorite_strains', 'text ARRAY');
    })

    .createTable('strains', tbl => {
      tbl.increments('id');
      tbl.text('strain_name').notNullable();
      tbl.text('type');
      tbl.text('rating');

      tbl.text('effects');

      tbl.text('flavor');
      tbl.text('description');
      tbl
        .integer('user_fav')
        .unsigned()
        .unique()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('strains').dropTableIfExists('users');
};
