<template>
  <div class="pageColors">
    <vSlider />
    <div class="container-mini">
      <div class="pageColors__wrapper">
        <div class="pageColors__sel">
          <div
            class="pageColors__sel-items"
            v-for="item in arrSel"
            :key="item.id"
          >
            <vSelectors :initialState="item.stateSel" :text="item.text" />
          </div>
        </div>
				<div class="pageColors__cards">
					<h2 class="pageColors__title">412 товаров</h2>
        	<vProductCard />
				</div>
      </div>
    </div>
  </div>
</template>
<script>
import vSlider from "@/components/UI/vSlider.vue";
import vSelectors from "@/components/UI/vSelectors.vue";
import vProductCard from "@/components/UI/vCardsProduct.vue";

export default {
  name: "vPageColor",
  components: {
    vSlider,
    vSelectors,
    vProductCard,
  },
  data() {
    return {
      arrSel: [
        { id: Date.now(), stateSel: false, text: "Новинки" },
        { id: Date.now(), stateSel: false, text: "Есть в наличии" },
        { id: Date.now(), stateSel: false, text: "Контрактные" },
        { id: Date.now(), stateSel: false, text: "Эксклюзивные" },
        { id: Date.now(), stateSel: false, text: "Распродажа" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container-mini {
  max-width: 2000px;
  margin: 0 auto;
}
.pageColors {
  &__wrapper {
    padding: 0px 65px 0px 65px;
    margin: 75px 0px 150px 0px;
    display: flex;
  }
	&__title{
		margin-bottom: 45px;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #1F2020;
	}
	&__cards {
		margin-left: 140px;
	}
  &__sel {
    display: flex;
    flex-direction: column;
  }
  &__sel-items {
    margin-bottom: 10px;
  }
}
</style>
