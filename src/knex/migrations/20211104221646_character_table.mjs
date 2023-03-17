export const up = async function up(knex) {
  await knex.schema.createTable('character', (table) => {
    table.increments('id');
    table.string('name');
    table.string('image');
    table.string('gender');
    table.string('status');
    table.string('species');
    table.string('origin');
  });
};

export const down = async function down(knex) {
  await knex.schema.dropTable('character');
};
