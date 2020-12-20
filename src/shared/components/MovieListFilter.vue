<template>
  <BaseAccordion>
    <template v-slot:header>
      Filtros
    </template>
    <template v-slot:body>
      <div class="filter__list">
        <fieldset class="filter group">
          <legend>Ordenar por:</legend>
          <select v-model="orderBy">
            <option value="vote_average">Nota da população</option>
            <option value="release_date">Data de lançamento</option>
          </select>
      </fieldset>

      </div>
    </template>
  </BaseAccordion>
</template>

<script>
import { reactive } from 'vue';
import BaseAccordion from './base/BaseAccordion';
export default {
  components: {
    BaseAccordion
  },
  setup() {      	
    const orderBy = reactive('vote_average')
    
    return { orderBy }
  }
}
</script>
<style lang="scss" scoped>
  
  .filter__list {
    pointer-events: none;
  }

</style>
