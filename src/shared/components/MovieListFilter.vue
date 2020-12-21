<template>
  <BaseAccordion>
    <template v-slot:header>
      Filtros
    </template>
    <template v-slot:body>
      <div class="filter__list">
        <fieldset class="select__group">
          <legend>Ordenar por:</legend>
          <select v-model="state.filters.orderBy.orderFactor" @change="orderByChanged">
            <option value="" disabled>selecione</option>
            <option value="vote_average">Nota da população</option>
            <option value="release_date">Data de lançamento</option>
          </select>
      </fieldset>
      <fieldset v-show="state.filters.orderBy.orderFactor.length > 0">
        <legend>Orientação</legend>
        <input v-model="state.filters.orderBy.orientation" type="radio" id="asc" value="1"> <label for="asc">Descendente</label>
        <input v-model="state.filters.orderBy.orientation" type="radio" id="desc" value="-1"> <label for="desc">Ascendente</label>
      </fieldset>
      </div>
    </template>
  </BaseAccordion>
</template>

<script>
import { useState } from '@state/movie';
import BaseAccordion from './base/BaseAccordion';
export default {
  components: {
    BaseAccordion
  },
  setup() {   
    const state = useState();   

    return { state }
  }
}
</script>
<style lang="scss" scoped>
  @import "@design";
  
  .filter__list {
        padding: 18px 2px;

  }
  .select__group {
    
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
  fieldset {
    margin: 0;
    border: none;
    margin-top: 10px;
    padding: 0;
    font-family: Barlow;
    legend {
      font-weight: bold;
      text-transform: uppercase;
      color: $primary-color;
      font-size: 10px;
    }
    label {
      font-family: Lato;
      font-size: 10px;
      color: white;
      letter-spacing: 1px;
    }
  }
</style>
