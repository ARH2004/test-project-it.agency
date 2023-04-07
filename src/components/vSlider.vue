<template>
  <div class="promo">
    <div class="container">
      <div class="promo__pagination-text">
        <button class="promo__btn">ГЛАВНАЯ</button>
        <img
          src="@/assets/images/icons/ellipse.svg"
          alt="ellip"
          class="promo__ellipse"
        />
        <button class="promo__btn">ПРОДУКТЫ</button>
        <img
          src="@/assets/images/icons/ellipse.svg"
          alt="ellip"
          class="promo__ellipse"
        />
        <button class="promo__btn">КРАСКИ</button>
      </div>
      <div class="swiper">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :scrollbar="{ draggable: true }"
          :navigation="{
            nextEl: '.nextArrow',
            prevEl: '.prevArrow',
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :loop="true"
        >
				<div class="nav-indicator nextArrow">
            <img src="@/assets/images/icons/arrow.svg" alt="arrow" />
				</div>
          <swiper-slide v-for="items in arrSlider" :key="items.id">
            <div class="promo__box">
              <img
                :src="require(`@/assets/images/${items.image}`)"
                class="promo__img"
                alt="image"
              />
              <div class="promo__text-in-img">
                <h1 class="promo__title">{{ items.title }}</h1>
                <h3 class="promo__subtitle">{{ items.subtitle }}</h3>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Autoplay } from "swiper";
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
          image: "mainSlider.png",
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: Date.now(),
          title: "Краски",
          image: "mainSlider.png",
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: Date.now(),
          image: "mainSlider.png",
          title: "Краски",
          image: "mainSlider.png",
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
        {
          id: Date.now(),
          title: "Краски",
          image: "mainSlider.png",
          subtitle:
            "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
.promo {
	position: relative;
	&__pagination-text {
    width: 190px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 10;
    top: 32px;
    left: 64px;
  }
  &__text-in-img {
    position: absolute;
    top: 35%;
    left: 40%;
  }
  &__img {
    min-width: 100%;
    max-height: 560px;
  }
  &__title {
    font-weight: 400;
    font-size: 72px;
    text-align: center;
    line-height: 88%;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  &__subtitle {
    font-weight: 500;
    max-width: 472px;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-top: 25px;
  }
  &__btn {
    background: none;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #ffffff;
    opacity: 0.3;
  }
}
.nextArrow {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  top: 355px;
  right: 15%;
}
@media (max-width: 1500px) {
  .promo {
    &__text-in-img {
    	top: 35%;
    	left: 35%;
    }
  }
}
</style>
