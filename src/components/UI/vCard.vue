<template>
  <div
    class="card"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="card__wrapper">
      <img
        :src="require('@/assets/images/' + item.image)"
        alt="card"
        class="card__img"
      />
      <h3 class="card__title">{{ item.title }}</h3>
      <div class="card__info-block">
        <div class="card__price">
          <p class="card__price-number">{{ item.price }} ₽</p>
        </div>
        <button class="card__btn" v-if="isHovered" @click="addToCard(item)">
          <img
            src="@/assets/images/icons/plus.svg"
            alt="plus"
            class="card__plus"
          />
        </button>
      </div>
      <hr class="card__line" />
    </div>
  </div>
</template>
<script>
export default {
  name: "vCard",
  props: {
    item: {
      image: {
        type: String,
      },
      title: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    addToCard(item) {
      this.$store.commit("addItemToCart", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin: 0px 25px 30px 0px;
  &__info-block {
    height: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__line {
    position: relative;
    top: 15px;
    left: 0;
    width: 278px;
    height: 1px;
    background: #000000;
    opacity: 0.1;
  }
  &__title {
    margin-top: 15px;
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
    color: #1f2020;
  }
  &__price {
    display: flex;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #1f2020;
  }
  &__btn {
    width: 80px;
    height: 32px;
    background: #7bb899;
    border-radius: 8px;
  }
}
</style>
