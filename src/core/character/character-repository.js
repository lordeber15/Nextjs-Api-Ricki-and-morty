import stampit from 'stampit';
import KnexRepository from '../knex-repository';

const CharacterRepository = stampit(KnexRepository, {
  props: {
    tableName: 'character',
  },
  methods: {
    async getAll() {
      return this.table.select();
    },

    async findById({ id }) {
      return this.table.where({ id }).select().first();
    },
  },
});

export default CharacterRepository;
