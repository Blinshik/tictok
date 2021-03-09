<template>
  <div class="RightSideNext">
    <div v-for="card in $store.getters.getCarts" :key="card" class="RightSideNext__card"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.RightSideNext {
  margin-right: 30px;
  margin-left: auto;
  display: grid;
  grid-template-columns: 228px 228px 228px;
  grid-row-gap: 18px;
  grid-column-gap: 18px;

  &__card {
    background-color: aquamarine;
    height: 300px;
    border-radius: 15px;
  }
}
</style>