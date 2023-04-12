<template>
  <div class="selectors">
    <div class="container">
      <div class="selectors__block" v-for="item in arrSel" :key="item.id">
        <button
          class="selectors__btn"
          @click="moveCircle(item)"
          :class="{ right: item.isRight }"
        >
          <p class="selectors__circle" :class="{ right: item.isRight }"></p>
        </button>
        <h3 class="selectors__title">{{ item.text }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vSelectors",
  data() {
    return {
      arrSel: [
        { id: Date.now(), text: "Новинки" },
        { id: Date.now(), text: "Есть в наличии" },
        { id: Date.now(), text: "Контрактные" },
        { id: Date.now(), text: "Эксклюзивные" },
        { id: Date.now(), text: "Распродажа" },
      ],
    };
  },
  methods: {
    moveCircle(item) {
      item.isRight = !item.isRight;
    },
  },
};
</script>
<style lang="scss" scoped>
.selectors {
  &__block {
    width: 170px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__btn {
    width: 36px;
    height: 22px;
    background: #f2f2f2;
    border-radius: 40px;
    position: relative;
  }
  &__circle {
    width: 8px;
    height: 8px;
    background: #1f2020;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 0;
    margin: 0px 7px 0px 7px;
    transition: left 0.3s ease-in-out;
  }
  &__title {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1f2020;
    margin-left: 12px;
  }
}

.selectors__circle.right {
  left: 13px;
}
.selectors__btn.right {
  background: #7bb899;
  transition: all 0.3s;
}
</style>
