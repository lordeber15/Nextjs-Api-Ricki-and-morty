import stampit from 'stampit';

const ShowAllAction = stampit({
  props: {
    characterRepo: null,
  },

  init({ characterRepo }) {
    this.characterRepo = characterRepo;
  },

  methods: {
    async execute() {
      // TODO: llamar al método u objeto correcto para devolver todos los personajes
      return this.characterRepo.getAll(); // remplazar esto
    },
  },
});

export default ShowAllAction;
