<template>
  <v-card class="pa-4">
    <h3 class="px-2 align-center-text font-weight-regular">Novo Receita</h3>
    <h4 class="px-2 font-weight-regular mb-2">Informações do Receira</h4>
    <v-form>
      <v-layout
        row
        wrap>
        <v-flex xs12 px-2>
          <v-text-field
            label="Nome do Animal"
            v-model="form.name"
            outline />
        </v-flex>
        <v-flex xs12 px-2>
          <v-textarea
            label="Descrição"
            v-model="form.recipe"
            outline />
        </v-flex>
      </v-layout>
    </v-form>
      </v-layout>
      <div class="align-right-text">
        <v-btn
          @click="$emit('close')">Cancelar</v-btn>
        <v-btn 
          class="primary"
          @click="register(form)">Cadastrar</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script type="text/javascript" src="./script.js" />