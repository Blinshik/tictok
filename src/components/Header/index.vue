<template>
  <div class="header">
    <div class="header__wrapper">
      <img
        src="../../assets/logo.png"
        alt="Logo tictok"
        class="header__wrapper__logo"
      />
      <form class="header__wrapper__form">
        <input
          placeholder="Поиск аккаунтов"
          pl
          class="header__wrapper__form__input"
        />
      </form>

      <div class="header__wrapper__menu">
        <span class="material-icons header__wrapper__menu__first">
          cloud_upload
        </span>

        <span class="material-icons"> message </span>
        <button class="header__wrapper__menu__third">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 71px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(34, 90, 89, 0.2);
  background-color: #fff;
  &__wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1028px;
    width: 100%;
    &__logo {
      width: 129px;
      height: 41px;
    }
    &__form {
      position: relative;
      &__input {
        background-color: rgba(22, 24, 35, 0.06);
        border: none;
        font-weight: 400;
        font-size: 16px;
        padding: 12px 16px;
        border-radius: 92px;
        width: 361px;
      }
    }

    &__menu {
      display: flex;
      align-items: center;
      &__first {
        margin-right: 24px;
      }
      &__third {
        margin-left: 24px;
        width: 148px;
        height: 36px;
        background-color: #fe2c55;
        color: white;
        border: none;
        font-size: 16px;
        line-height: 22px;
        &:hover {
          background-color: #e42c55;
        }
      }
    }
  }
}
</style>