<template>
  <div class="header">
    <div class="container">
			<div class="header__wrapperMob">
					<button class="header__toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
					<img
            src="@/assets/images/icons/logo.svg"
            alt="logo"
            class="header__logo"
          />
					<button class="header__btn shoper" @click="openShoper">
              <p class="header__count">
                {{ this.$store.getters.isCarts.length }}
              </p>
              <img
                src="@/assets/images/icons/shoper.svg"
                alt="search"
                class="header__search"
              />
          </button>
			</div>
      <div class="header__wrapper">
        <div class="header__left-block">
          <img
            src="@/assets/images/icons/logo.svg"
            alt="logo"
            class="header__logo"
          />
          <ul class="header__list">
            <a href="#" class="header__link"
              ><li class="header__item">Продукты</li></a
            >
            <a href="#" class="header__link"
              ><li class="header__item">Цвета</li></a
            >
            <a href="#" class="header__link"
              ><li class="header__item">Вдохновение</li></a
            >
            <a href="#" class="header__link"
              ><li class="header__item">Советы</li></a
            >
            <a href="#" class="header__link"
              ><li class="header__item">Найти магазин</li></a
            >
          </ul>
        </div>
        <div class="header__right-block">
          <div class="header__phone">
            <p class="header__tel">+7 (495) 221-77-69</p>
            <button class="header__del-tel">Заказать звонок</button>
          </div>
          <div class="header__navigation">
            <button class="header__btn">
              <img
                src="@/assets/images/icons/search.svg"
                alt="search"
                class="header__search"
              />
            </button>
            <button class="header__btn">
              <img
                src="@/assets/images/icons/profile.svg"
                alt="search"
                class="header__search"
              />
            </button>
            <button class="header__btn">
              <img
                src="@/assets/images/icons/heart.svg"
                alt="search"
                class="header__search"
              />
            </button>
            <button class="header__btn shoper" @click="openShoper">
              <p class="header__count">
                {{ this.$store.getters.isCarts.length }}
              </p>
              <img
                src="@/assets/images/icons/shoper.svg"
                alt="search"
                class="header__search"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <vCart :isModalDialog="isModalDialog" @closeBasket="handleBasketClose" />
		<div @click="openShoper" :class="{ black: isModalDialog === true }"></div>
  </div>
</template>

<script>
import vCart from "@/components/UI/vCart.vue";

export default {
  name: "vHeader",
  components: {
    vCart,
  },
  data() {
    return {
      isModalDialog: false,
    };
  },
  methods: {
    openShoper() {
      this.isModalDialog = !this.isModalDialog;
    },
    handleBasketClose() {
      this.isModalDialog = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.container {
  max-width: 1700px;
  margin: 0 auto;
}
.header {
  font-family: "Inter";
  padding: 45px 65px 45px 65px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__left-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
  }
  &__count {
    position: absolute;
    top: 18%;
    left: 33%;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    color: #1f2020;
  }
  &__list {
    display: flex;
  }
  &__item {
    margin-right: 25px;
  }
	&__wrapperMob{
		display: none;
	}
  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1f2020;
  }
  &__right-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
  }
  &__tel {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #1f2020;
  }
  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
  }
  &__del-tel {
    background: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #1f2020;
    opacity: 0.3;
  }
  &__btn {
    background: none;
    position: relative;
  }
	&__toggle {
	background: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
}
}
.header__toggle span {
	margin-bottom: 5px;
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.header__list:last-child {
  margin-right: 0;
}
.black {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.7;
}

@media (max-width: 1200px) {
.header{
  padding: 45px 25px 45px 25px;
	&__wrapper{
		display: none;
	}
	&__wrapperMob{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
.shoper{
	display: block;
}
}
</style>
