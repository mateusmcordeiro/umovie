<template>
  <BaseAccordion>
    <template v-slot:header>
      Filtros
    </template>
    <template v-slot:body>
      <div class="filter__list">
        <fieldset class="select__group">
          <legend>Ordenar por:</legend>
          <select v-model="orderBy" @change="orderByChanged">
            <option value="" disabled>selecione</option>
            <option value="vote_average">Nota da população</option>
            <option value="release_date">Data de lançamento</option>
          </select>
      </fieldset>
      </div>
    </template>
  </BaseAccordion>
</template>

<script>
import { useState } from '@state/movie';
import BaseAccordion from './base/BaseAccordion';
import { ref } from 'vue';
export default {
  components: {
    BaseAccordion
  },
  setup() {   
    const state = useState();   
    const orderBy = ref('')	
    const orderByChanged = () => {
      for (const prop in state.filters.orderBy) {
        state.filters.orderBy[prop] = false;
      }
      if (orderBy.value.length > 0) {
        state.filters.orderBy[orderBy.value] = true;
      }
    }
    return { orderByChanged, orderBy }
  }
}
</script>
<style lang="scss" scoped>
  @import "@design";
  
  .filter__list {
        padding: 18px 2px;

  }
  .select__group {
    margin: 0;
    border: none;
    background-color: white;
    padding: 3px;
    border-radius: 3px;
    max-width: 206px;
    position: relative;
    legend {
      font-family: Barlow;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: bold;
      color: #011524;
      font-size: 10px;
      padding: 0 4px;
      margin: 0;
      position: absolute;
    }
    select {
      width: 100%;
      height: 100%;
      border: none;
      padding-top: 12px;
      background-color: white;
    }
  }
</style>
