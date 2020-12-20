<template>
  <div class="card">
    <header class="card__header">
      <slot name="header"></slot>
    </header>
    <div class="card__body card__container">
      <slot name="icon"></slot>
      <div class="container__content">
        <slot name="body"></slot>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {      	
    
    return {  }
  }
}
</script>

<style lang="scss" scoped>
  @import '@design';
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 220px;
    max-height: 330px;
    box-shadow: 0px 0px 14px 2px rgba(0,0,0,.5);
    &__header, &__body {
      width: 100%;
      height: 100%;
      display: flex;
    }
    &__body {
      position: absolute;
      opacity: 0;
      transition: opacity .6s;
      .container__content {
        display: flex;
        flex-direction: column;
        
        position: absolute;
        display: flex;
        height: 100px;
        bottom: 0;
        width: -moz-available;
        padding: 0 18px;
        color: white;
        z-index: 10;
        text-align: left;
      }
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: ' ';
        background: linear-gradient(0deg, rgba(0,0,0,1) 8%, rgba(0,0,0,0.737114914325105) 47%, rgba(0,0,0,0.5830532896752452) 100%);
        opacity: 0;
        transition: opacity .4s;
        z-index: $layer-popover-z-index;
      }
    }
    &:hover {
      cursor: pointer;
      .card__body {
        opacity: 1;

        &:after {
          opacity: 1;
        }
      }
    }
    
  }
</style>