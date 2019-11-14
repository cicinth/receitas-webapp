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
    remove(recipe) {
       this.$emit('removeRecipe', recipe);
    },
  },
}