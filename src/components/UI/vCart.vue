<template>
	<div class="cart" v-if="isModalDialog">
		<div class="container">
			<div class="cart__wrapper">
				<div class="cart__basket">
					<h2 class="cart__title">Корзина</h2>
					<button class="cart__exit" @click="hideBasket()">
						<img src="@/assets/images/icons/x.svg" alt="exit-icon" class="cart__exit-x">
					</button>
				</div>
				<div class="cart__basket-count-clear" v-if="closeBasket">
					<h4 class="cart__count">{{ this.$store.getters.isCarts.length }} товара</h4>
					<button class="cart__clear">очистить список</button>
					<hr class="cart__line" />
				</div>
				<div class="cart__basket-card" v-for="item in cartItems" :key="item.id">
					<div class="cart__img-info">
						<img :src="require('@/assets/images/' + item.image)" alt="image-product" class="cart__imgProduct">
						<div class="cart__info">
							<h3 class="cart__info-title">{{ item.title }}</h3>
							<p class="cart__info-price">{{ item.price }}</p>
						</div>
					</div>
					<div class="cart__btn-close"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'vCart',
	props: {
		isModalDialog: {
			type: Boolean,
      required: true,
		}
	},
  methods: {
    hideBasket() {
      this.$emit('closeBasket') // вызов события "closeBasket"
    },
	},
	  computed: {
    cartItems() {
      return this.$store.getters.isCarts;
    },
  },
}
</script>
<style lang="scss" scoped>
.container{
	max-width: 600px;
}
.cart{
	&__wrapper{
		display: flex;
		flex-direction: column;
	}
	&__basket{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__title{
		font-weight: 500;
font-size: 30px;
line-height: 88%;
letter-spacing: -0.04em;
color: #1F2020;
	}
	&__exit{
		background: none;
		opacity: 0.1;
border: 1px solid #000000;
border-radius: 50%;
width: 48px;
height: 48px;
	}
}
</style>