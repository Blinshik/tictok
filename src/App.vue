<template>
  <div>
    <Header />
    <div class="middle">
      <LeftSide />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";

export default {
  name: "App",
  components: {
    Header,
    LeftSide,
  },
};
</script>

<style lang="scss">
.middle {
  width: 100%;
  height: 100vh;
  max-width: 1028px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 122px;
}
</style>
