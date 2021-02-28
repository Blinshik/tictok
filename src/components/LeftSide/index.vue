<template>
  <div class="leftSide">
    <router-link to="/" class="leftSide__navigation">
      <div class="material-icons">home</div>
      <div class="leftSide__navigation__text">Рекомендуем</div>
    </router-link>
    <router-link to="/follows" class="leftSide__navigation">
      <div class="material-icons">supervisor_account</div>
      <div class="leftSide__navigation__text">Подписки</div>
    </router-link>

    <div class="leftSide__usersCards">
      <Card />
    </div>

    <div class="leftSide__footer"></div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
};
</script>


<style lang="scss">
.router-link-active {
  color: red !important;
}
.leftSide {
  height: 100%;
  width: 245px;
  position: fixed;
  &__navigation {
    padding: 16px 12px 12px 12px;
    display: flex;
    font-size: 25px;
    color: black;
    text-decoration: none;
    &:hover {
      background-color: rgba(22, 24, 35, 0.06);
    }
    &__text {
      margin-left: 16px;
    }
  }
}
</style>