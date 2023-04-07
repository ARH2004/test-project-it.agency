<template>
  <div class="promo">
    <div class="container">
      <div class="swiper">
        <div class="promo__pagination-text">
          <button class="promo__btn">ГЛАВНАЯ</button>
          <button class="promo__btn">ПРОДУКТЫ</button>
          <button class="promo__btn">КРАСКИ</button>
        </div>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :loop="true"
        >
          <swiper-slide v-for="items in arrSlider" :key="items.id">
            <div class="promo__box">
							<img :src="require(`@/assets/images/${items.image}`)" alt="">
              <div class="promo__text-in-img">
                <h1 class="promo__title">{{items.title}}</h1>
                <h3 class="promo__subtitle">{{items.subtitle}}</h3>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
export default {
  name: "v-slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      arrSlider: [
        {
          id: Date.now(),
          title: "Краски",
					image: 'mainSlider.png',
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: Date.now(),
          title: "Краски",
					image: 'mainSlider.png',
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: Date.now(),
          image: "mainSlider.png",
          title: "Краски",
					image: 'mainSlider.png',
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: Date.now(),
          title: "Краски",
					image: 'mainSlider.png',
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  margin: 0 auto;
}
.promo {
	width: 100%;
	&__pagination-text{
		position: absolute;
		z-index: 10;
		top: 10%;
		left: 10%;
	}
	&__text-in-img{
		position: absolute;
		top: 40%;
		left: 40%;
	}
	&__title{
		font-weight: 400;
		font-size: 72px;
		line-height: 88%;
		letter-spacing: -0.02em;
		color: #FFFFFF;
	}
	&__subtitle{
		font-weight: 500;
		font-size: 16px;
		line-height: 130%;
		text-align: center;
		letter-spacing: 0.02em;
		color: #FFFFFF;
	}
  &__btn {
    background: none;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #ce0303;
    opacity: 0.3;
  }
}
.swiper{
	position: relative;
}

img{
	min-width: 100%;
	max-height: 560px;
}
</style>
