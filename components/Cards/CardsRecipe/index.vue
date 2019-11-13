<template>
  <div class="recipe-card">
    <div class="recipe-card-name">
      <h4 class="">{{ name }}</h4>
    </div>
    <div class="">  
      <h4 class="">{{ recipe }}</h4>
    </div>
       <div class="align-right-text">
        <v-btn
          @click="remove(id)">Excluir</v-btn>
        <v-btn 
          class="primary"
          @click="$emit('edit')">Editar</v-btn>
      </div>
  </div> 
</template>
<script type="text/javascript" src="./script.js" />
<style>

.recipe-card{
    text-align:center;
    background-color:#fff;
    -webkit-box-shadow: 0px 0px 8px 1px #8a8989;
    border-radius: 5px;
    margin-left:8%;
}
.recipe-card-name{
    padding-top:3%;
    padding-bottom:3%;
     border-radius: 5px;
    color:#fff;
    background-color:#f8454c;
    height: 100%;
}

</style>
 