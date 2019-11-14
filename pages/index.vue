<template>
  <v-container class="page">
    <h2 class="">Receitas cadastradas</h2>
    <h4 class="">Essas são as nossas receitas cadastradas:</h4>
    <v-layout
      row
      wrap
      py-2>
      <v-flex 
        v-for="(recipe, index) in recipes"
        :key="index"
        xs4 
        md3
        py-4>
        <card-recipe
        :id="recipe.id"
        :name="recipe.name"
        :recipe="recipe.recipe" 
        @edit="showDialog = true" 
        @removeRecipe="removeRecipe" 
       />
     <dialog-default 
        v-model="showDialog">
        <edit-recipe
          :id="recipe.id"
          :name="recipe.name"
          :recipe="recipe.recipe" 
          @close="showDialog = false"
          @editRecipe="editRecipe" />
      </dialog-default> 
      </v-flex> 
    <nuxt/>
    
    </v-layout> 
  </v-container>
</template>

<script>
import { APIRecipe } from '@/API/endpoints';
import EditRecipe from '@/components/EditRecipe';
export default {
  components: {
    EditRecipe
  },
  data: () => ({
    showDialog: false,
    recipes: [
    ]
  }), 
  mounted() {
    this.$nuxt.$on('setNewRecipe', item => {
      this.loadPage();
    });
    this.loadPage();
  },
  methods: {
    async editRecipe(recipe) {
      await APIRecipe.updateRecipe(recipe.id,recipe)
      .then(res => { 
        alert('Editado com sucesso'),
        this.loadPage();
        this.showDialog = false; 
      })
      .catch(error => {

      })
    },
    async loadPage() {
      this.recipes = await this.getRecipes();
    },
    getRecipes() {
      return APIRecipe.getRecipe();
    },
    async removeRecipe(recipe) {
      
    await APIRecipe.deleteRecipe(recipe)
      .then(res => {
        alert('removido com sucesso')
        this.loadPage()
      })
      .catch(error => {

      }) 
    }
  },
}
</script>
