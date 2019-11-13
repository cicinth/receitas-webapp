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
        <card-pet 
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
      {
        name: 'Frango',
        recipe: 'dhajgjf',
      
      }
    ]
  }), 
  mounted() {
    this.$nuxt.$on('setNewPet', item => {
      this.recipes.push(item);
    });
    this.loadPage();
  },
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
    async editRecipe(recipe) {
      await APIRecipe.updateRecipe(recipe.id,recipe)
      .then(res => { 
        alert('editado com sucesso'),
        this.loadPage();
        this.showDialog = false; 
      })
      .catch(error => {

      })
    },
    async loadPage() {
      this.recipes = await this.getRecipes();
      //console.log('teste', this.pets);
    },
    getRecipes() {
      return APIRecipe.getRecipe();
    },
    async removeRecipe(recipe) {
      
      await APIRecipe.deleteRecipe(recipe)
      .then(res => {
        alert('removido com sucesso')
        this.loadPage()
        //this.$nuxt.$emit('setNewPet', recipe);
      })
      .catch(error => {

      }) 
    }
  },
}
</script>
