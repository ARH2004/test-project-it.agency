<template>
  <div class="pageColors">
    <vSlider />
    <div class="container-mini">
      <div class="pageColors__wrapper">
        <div class="pageColors__sel">
          <div class="pageColors__sel-items">
            <vSelectors />
          </div>
        </div>
        <div class="pageColors__cards">
          <h2 class="pageColors__title">{{ arrayLength }} товаров</h2>
          <vProductCard @array-length="handleArrayLength" />
        </div>
        <div class="pageColors__filterSilect">
          <filterSelector :items="itemSel" @select="handleSelect" :isOpen="isOpen"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vSlider from "@/components/UI/vSlider.vue";
import vSelectors from "@/components/UI/vSelectors.vue";
import vProductCard from "@/components/UI/vCardsProduct.vue";
import filterSelector from "@/components/UI/vFilterSelector.vue";

export default {
  name: "vPageColor",
  components: {
    vSlider,
    vSelectors,
    vProductCard,
    filterSelector,
  },
  data() {
    return {
      itemSel: [
        { id: Date.now(), label: "Сначала дорогие" },
        { id: Date.now(), label: "Сначала недорогие" },
        { id: Date.now(), label: "Сначала популярные" },
        { id: Date.now(), label: "Сначала новые" },
      ],
      arrayLength: 0,
    };
  },
  methods: {
    handleArrayLength(length) {
      this.arrayLength = length;
    },
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
    position: relative;
  }
  &__filterSilect {
    position: absolute;
    top: 0;
    left: 90%;
  }
  &__title {
    margin-bottom: 45px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1f2020;
  }
  &__cards {
    margin-left: 140px;
  }
  &__sel {
    display: flex;
    flex-direction: column;
  }
}

</style>
