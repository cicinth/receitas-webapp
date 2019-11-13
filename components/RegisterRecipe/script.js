export default {
  data: () => ({
    form: {
      name: '',
      recipe: '',
    }
  }),
  methods: {
    register(form) {
      this.$emit('registerRecipe', form);
    }
  },
} 