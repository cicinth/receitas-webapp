<template>
  <div class="pet-card">
    <div class="pet-card-image">
     <!-- <img src="@/assets/img/doguinho.png" /> -->
    </div>
    <div class="">
      <h4 class="">{{ name }}</h4>
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
 