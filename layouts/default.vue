<template>
  <v-app class="pet-app">
    <toolbar @addRecipe="showDialog = true" />
    <v-content class="page">
      <nuxt/>
      <dialog-default 
        v-model="showDialog">
        <register-pet 
          @close="showDialog = false"
          @registerRecipe="registerRecipe" />
      </dialog-default> 
    </v-content>
  </v-app>
</template>

<script>
import { Toolbar } from  '@/components/Partials';
import RegisterPet from '@/components/RegisterPet';
import { FooterFirst, Banner } from '@/components/Main';

import { APIRecipe } from '@/API/endpoints';
export default {
  components: {
    Toolbar,
    RegisterPet,
    FooterFirst,
    Banner
  },
  data: () => ({
    showDialog: false
  }),
  methods: {
    async registerRecipe(recipe) {
      await APIRecipe.registerRecipe(recipe)
      .then(res => {
        this.showDialog = false;
        this.$nuxt.$emit('setNewPet', recipe);
      })
      .catch(error => {

      })
    },
  },
}
</script>
