export default {
  props: {
    id: {
      type: Number,
      default: 0,
      required: false
    },
    name: {
      type: String,
      default: '',
      required: false
    },
    recipe: {
      type: String,
      default: '',
      required: false
    },

  },
  methods: {
    editRecipe(idRecipe,newNameRecipe, newRecipe) {
      const form =  {
        id: idRecipe,
        name: newNameRecipe,
        recipe: newRecipe,
      }
      this.$emit('editRecipe', form);
    }
  },
} 