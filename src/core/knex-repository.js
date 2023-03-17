import stampit from 'stampit';

const KnexRepository = stampit({
  props: {
    knex: null,
    tableName: null,
  },
  propertyDescriptors: {
    table: {
      get() {
        return this.knex(this.tableName);
      },
    },
  },
  init({ knex, tableName }) {
    this.knex = knex ?? this.knex;
    this.tableName = tableName ?? this.tableName;
  },
});

export default KnexRepository;
