<template>
  <v-app class="recipe-app">
    <toolbar @addRecipe="showDialog = true" />
    <v-content class="page">
      <nuxt/>
      <dialog-default 
        v-model="showDialog">
        <register-recipe
          @close="showDialog = false"
          @registerRecipe="registerRecipe" />
      </dialog-default> 
    </v-content>
  </v-app>
</template>

<script>
import { Toolbar } from  '@/components/Partials';
import RegisterRecipe from '@/components/RegisterRecipe';

import { APIRecipe } from '@/API/endpoints';
export default {
  components: {
    Toolbar,
    RegisterRecipe,
  
  },
  data: () => ({
    showDialog: false
  }),
  methods: {
    async registerRecipe(recipe) {
      await APIRecipe.registerRecipe(recipe)
      .then(res => {
        this.showDialog = false;
        this.$nuxt.$emit('setNewRecipe', recipe);
      })
      .catch(error => {

      })
    },
  },
}
</script>
