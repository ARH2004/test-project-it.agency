<template>
  <div class="card">
    <div class="card__wrapper">
      <img src="@/assets/images/test.png" alt="card" class="card__img" />
      <h3 class="card__title">Lorem ipsum dolor sit.</h3>
      <div class="card__info-block">
        <p class="card__price">9999 $</p>
        <button class="card__btn">
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
};
</script>
<style lang="scss" scoped>
.card {
	margin: 0px 25px 30px 0px;
  &__info-block {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	&__line{
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
