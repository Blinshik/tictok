<template>
  <div class="cardRight">
    <div class="cardRight__userPhoto"></div>
    <div class="cardRight__userContent">
      <div class="cardRight__userContent__info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aliquid
        nostrum, accusamus veniam adipisci est assumenda soluta sit aut ad
        placeat culpa doloremque qui 
      </div>
      <div class="cardRight__userContent__wrapper">
        <div class="cardRight__userContent__wrapper__content"></div>
        <div class="cardRight__userContent__wrapper__buttons">
          <div>
            <div
              class="cardRight__userContent__wrapper__buttons__icon"
              @Click="counterHandler1"
            >
              <span class="material-icons">
                favorite
              </span>
            </div>
            <div class="cardRight__userContent__wrapper__buttons__counter">
              {{ counter1 }}
            </div>
          </div>
          <div>
            <div
              class="cardRight__userContent__wrapper__buttons__icon"
              @Click="counterHandler2"
            >
              <span class="material-icons">
                speaker_notes
              </span>
            </div>
            <div class="cardRight__userContent__wrapper__buttons__counter">
              {{ counter2 }}
            </div>
          </div>
          <div>
            <div
              class="cardRight__userContent__wrapper__buttons__icon"
              @Click="counterHandler3"
            >
              <span class="material-icons">
                reply
              </span>
            </div>
            <div class="cardRight__userContent__wrapper__buttons__counter">
              {{ counter3 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked1: false,
      clicked2: false,
      clicked3: false,
      counter1: 20,
      counter2: 12,
      counter3: 56,
    };
  },
  methods: {
    counterHandler1() {
      if (this.clicked1) {
        this.counter1--;
        this.clicked1 = false;
      } else {
        this.counter1++;
        this.clicked1 = true;
      }
    },
    counterHandler2() {
      if (this.clicked2) {
        this.counter2--;
        this.clicked2 = false;
      } else {
        this.counter2++;
        this.clicked2 = true;
      }
    },
    counterHandler3() {
      if (this.clicked3) {
        this.counter3--;
        this.clicked3 = false;
      } else {
        this.counter3++;
        this.clicked3 = true;
      }
    },
  },
};
</script>

<style lang="scss">
.cardRight {
  width: 692px;
  height: 563px;
  padding: 20px 0;
  display: flex;
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  &__userPhoto {
    min-width: 56px;
    height: 56px;
    background-color: black;
    border-radius: 50%;
  }
  &__userContent {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 16px;
    &__info {
      max-width: 75%;
    }
    &__wrapper {
      display: flex;
      margin-top: auto;
      &__content {
        border-radius: 5px;
        width: 273px;
        height: 488px;
        background-color: brown;
        margin-top: auto;
      }
      &__buttons {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        &__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(22, 24, 35, 0.1);
          padding: 12px;
          margin-bottom: 8px;
          &:hover {
            background-color: rgba(22, 24, 35, 0.3);
            cursor: pointer;
          }
        }
        &__counter {
          text-align: center;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
