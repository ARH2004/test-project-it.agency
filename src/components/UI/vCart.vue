<template>
  <div class="cart" v-if="isModalDialog">
    <div class="container">
      <div class="cart__list">
        <div class="cart__wrapper">
          <div class="cart__basket">
            <h2 class="cart__title">Корзина</h2>
            <button class="cart__exit" @click="hideBasket()">
              <img
                src="@/assets/images/icons/x.svg"
                alt="exit-icon"
                class="cart__exit-x"
              />
            </button>
          </div>
          <div class="cart__basket-count-clear">
            <h4 class="cart__count">
              {{ this.$store.getters.isCarts.length }} {{isItem}}
            </h4>
            <button class="cart__clear" @click="delAllItem">очистить список</button>
          </div>
          <div
            class="cart__basket-card"
            v-for="item in cartItems"
            :key="item.id"
          >
            <hr class="cart__line" />
            <div class="cart__btw">
              <div class="cart__img-info">
                <div class="cart__img">
                  <img
                    :src="require('@/assets/images/' + item.image)"
                    alt="image-product"
                    class="cart__imgProduct"
                  />
                </div>
                <div class="cart__info">
                  <h3 class="cart__info-title">{{ item.title }}</h3>
                  <p class="cart__info-price">{{ item.price }} ₽</p>
                </div>
              </div>
              <div class="cart__btn-close">
                <div class="cart__btn-mp">
                  <button class="cart__minus" @click="countProductMinus(item)">
                    <img
                      class="cart__minus-btn"
                      src="@/assets/images/icons/minus.svg"
                      alt="icon-minus"
                    />
                  </button>
                  <p class="cart__text-count">{{ item.count }}</p>
                  <button class="cart__plus" @click="countProductPlus(item)">
                    <img
                      src="@/assets/images/icons/plusBascet.svg"
                      alt="icon-plus"
                    />
                  </button>
                </div>
                <button class="cart__btn-del">
                  <img
                    src="@/assets/images/icons/xGrey.svg"
                    alt="icon"
                    class="cart__del-img"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__total">
          <div class="cart__final-total">
            <h3 class="cart__total-title">Итого</h3>
            <h2 class="cart__total-count">{{sumMonyItem}}₽</h2>
          </div>
          <button class="cart__buy">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vCart",
  props: {
    isModalDialog: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    hideBasket() {
      this.$emit("closeBasket");
    },
    countProductPlus(item) {
      this.$store.commit("findItemTocardPlus", item);
    },
		countProductMinus(item) {
			if(item.count > 1){
      	this.$store.commit("findItemTocardMinus", item);
			}else{
				return null
			}
    },
		delAllItem() {
			this.$store.getters.isCarts.length = 0
		}
  },
  computed: {
    cartItems() {
      return this.$store.getters.isCarts;
    },
		sumMonyItem() {
			const count = this.$store.getters.isCarts.reduce((acc, el) => {
				return acc + el.price
			}, 0)
			return count
		},
		isItem() {
      if (this.$store.getters.isCarts.length % 10 === 1 && this.$store.getters.isCarts.length !== 11) {
        return "товар";
      } else if (
        this.$store.getters.isCarts.length % 10 === 2 ||
        this.$store.getters.isCarts.length % 10 === 3 ||
        this.$store.getters.isCarts.length % 10 === 4
      ) {
        return "товара";
      } else {
        return "товаров";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.container {
  padding: 40px 40px;
  margin: 0 auto;
}
.cart {
  font-family: "Inter";
  position: fixed;
  right: 0;
  top: 0;
  z-index: 111;
  background: white;
  width: 600px;
  height: 100vh;
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
	&__list {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 93vh;
	}
	&__total{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__buy{
		padding: 20px 58px;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		text-align: center;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: #7BB899;
		border-radius: 4px;
		color: #1F2020;

	}
	&__basket {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 95px;
  }
  &__basket-count-clear {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	&__total-title{
		font-weight: 400;
		font-size: 16px;
		line-height: 100%;
		color: #1F2020;
	}
	&__total-count{
		margin-top: 5px;
		font-weight: 500;
		font-size: 30px;
		line-height: 100%;
		letter-spacing: -0.02em;
		color: #1F2020;
	}
  &__btw {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__count {
    font-weight: 400;
    font-size: 14px;
    line-height: 112%;
    color: #1f2020;
  }
  &__minus {
    background: #f2f2f2;
    border-radius: 4px;
    width: 40px;
    height: 24px;
    margin-right: 20px;
  }
  &__plus {
    background: #f2f2f2;
    border-radius: 4px;
    width: 40px;
    height: 24px;
    margin-left: 21px;
  }
  &__imgProduct {
    width: 150px;
  }
  &__info {
    margin-top: 20px;
    width: 170px;
    margin-left: -20px;
  }
  &__line {
    position: relative;
    top: 15px;
    left: 0;
    width: 520px;
    height: 1px;
    background: #000000;
    opacity: 0.1;
  }
  &__minus-btn {
    padding: 11px 15px;
  }
  &__info-title {
    font-weight: 300;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.02em;
    color: #1f2020;
  }
  &__btn-mp {
    display: flex;
    align-items: center;
  }
  &__info-price {
    margin-top: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #1f2020;
  }
  &__btn-del {
    background: none;
    margin-left: 25px;
  }
  &__btn-close {
    display: flex;
    align-items: center;
  }
  &__img-info {
    display: flex;
    align-items: center;
  }
  &__clear {
    background: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 112%;
    color: #1f2020;
    opacity: 0.4;
  }
  &__title {
    font-weight: 500;
    font-size: 30px;
    line-height: 88%;
    letter-spacing: -0.04em;
    color: #1f2020;
  }
  &__exit {
    background: none;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
}
</style>
