import axios from '../axios';

export default {
  getRecipe: () => {
    return axios.get('/recipe')
      .then(({ data }) => {
        return data
      });
  },
  getOndeRecipe: (id) => {
    return axios.get('/recipe/'+id)
      .then(({ data }) => {
        return data
      });
  },
  registerRecipe: recipe => {
    console.log('recipe',recipe)
    return axios.post('/recipe', recipe);
  },
  updateRecipe: (id, recipe) => {
    return axios.put('/recipe/'+id, recipe);
  },
  deleteRecipe: (id) => {
    return axios.put('/delete-recipe/'+id);
  }
} 