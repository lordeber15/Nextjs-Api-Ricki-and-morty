import stampit from 'stampit';

const ShowDetailsAction = stampit({
  props: {
    characterRepo: null,
  },

  init({ characterRepo }) {
    this.characterRepo = characterRepo;
  },

  methods: {
    async execute({ characterId }) {
      // TODO: llamar al método u objeto correcto para devolver
      //  el personaje que solicitan en base a su ID
      return this.characterRepo.findById({ id: characterId }); // reemplazar esto
    },
  },
});

export default ShowDetailsAction;
