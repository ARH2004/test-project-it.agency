<template>
  <div class="pageColors">
    <vSlider />
    <div class="container-mini">
      <div class="pageColors__wrapper">
        <div class="pageColors__sel">
          <div class="pageColors__sel-items">
            <vSelectors
              :filteredContract="filteredContract"
              :filteredHave="filteredHave"
              :filteredNewest="filteredNewest"
              :filteredSale="filteredSale"
              :filteredExclusive="filteredExclusive"
            />
          </div>
        </div>
        <div class="pageColors__cards">
          <h2 class="pageColors__title">{{ clearArr() }} {{ isItem }}</h2>
          <vProductCard @array-length="handleArrayLength" :arrInfo="arrInfo" />
        </div>
        <div class="pageColors__filterSilect">
          <filterSelector v-model="selectedSord" :options="sortOptions" />
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
import vCart from "@/components/UI/vCart.vue";

export default {
  name: "vPageColor",
  components: {
    vSlider,
    vSelectors,
    vProductCard,
    filterSelector,
    vCart,
  },
  data() {
    return {
      arrayLength: 0,
      selectedSord: "",
      sortOptions: [
        { id: Date.now(), value: "expensive", name: "Сначала дорогие" },
        { id: Date.now(), value: "cheap", name: "Сначала недорогие" },
        { id: Date.now(), value: "popular", name: "Сначала популярные" },
        { id: Date.now(), value: "new", name: "Сначала новые" },
      ],
      arrInfo: [
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 14900,
          image: "photoOne.png",
          newest: false,
          contract: true,
          exclusive: true,
          sale: false,
          have: false,
          popular: 2,
          new: 42,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 5290,
          image: "photoSix.png",
          newest: true,
          contract: false,
          exclusive: false,
          sale: true,
          have: true,
          popular: 6,
          new: 112,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 9823,
          image: "photoTwo.png",
          newest: true,
          contract: true,
          exclusive: true,
          sale: false,
          have: false,
          popular: 1,
          new: 12,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 12000,
          image: "photoThree.png",
          newest: true,
          contract: false,
          exclusive: false,
          sale: true,
          have: true,
          popular: 12,
          new: 1,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 3500,
          image: "photoFour.png",
          newest: true,
          contract: true,
          exclusive: true,
          sale: false,
          have: true,
          popular: 321,
          new: 12,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 4900,
          image: "photoOne.png",
          newest: true,
          contract: true,
          exclusive: false,
          sale: false,
          have: true,
          popular: 23,
          new: 1,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 51290,
          image: "photoSix.png",
          newest: false,
          contract: true,
          exclusive: true,
          sale: true,
          have: true,
          popular: 21,
          new: 172,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 1823,
          image: "photoTwo.png",
          newest: false,
          contract: true,
          exclusive: true,
          sale: false,
          have: true,
          new: 12,
          popular: 44,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 8000,
          image: "photoThree.png",
          newest: true,
          contract: false,
          exclusive: false,
          sale: true,
          have: true,
          popular: 5,
          new: 82,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 7500,
          image: "photoFour.png",
          newest: false,
          contract: true,
          exclusive: true,
          sale: false,
          have: true,
          popular: 8,
          new: 16,
        },
        {
          id: Date.now(),
          title: "Краска Wallquest, Brownsone MS90102",
          price: 5290,
          image: "photoSix.png",
          newest: true,
          contract: false,
          exclusive: false,
          sale: true,
          have: true,
          popular: 91,
          new: 13,
        },
      ],
      isFiltered: false,
      newArr: [],
      arrSel: [
        { id: Date.now(), teg: 1, text: "Новинки" },
        { id: Date.now(), teg: 2, text: "Есть в наличии" },
        { id: Date.now(), teg: 3, text: "Контрактные" },
        { id: Date.now(), teg: 4, text: "Эксклюзивные" },
        { id: Date.now(), teg: 5, text: "Распродажа" },
      ],
      initialArrInfo: [],
      filtered: false,
    };
  },
  mounted() {
    this.initialArrInfo = this.arrInfo;
  },
  methods: {
    handleArrayLength(length) {
      this.arrayLength = length;
    },
    filteredSale() {
      if (this.filtered) {
        this.filtered = false;
        this.arrInfo = this.initialArrInfo;
      } else {
        this.filtered = true;
        this.arrInfo = this.initialArrInfo.filter((item) => item.sale === true);
      }
    },
    filteredContract() {
      if (this.filtered) {
        this.isFiltered = false;
        this.arrInfo = this.initialArrInfo;
      } else {
        this.isFiltered = true;
        this.arrInfo = this.initialArrInfo.filter(
          (item) => item.contract === true
        );
      }
    },
    filteredNewest() {
      if (this.filtered) {
        this.isFiltered = false;
        this.arrInfo = this.initialArrInfo;
      } else {
        this.isFiltered = true;
        this.arrInfo = this.initialArrInfo.filter(
          (item) => item.newest === true
        );
      }
    },
    filteredExclusive() {
      if (this.filtered) {
        this.isFiltered = false;
        this.arrInfo = this.initialArrInfo;
      } else {
        this.isFiltered = true;
        this.arrInfo = this.initialArrInfo.filter(
          (item) => item.exclusive === true
        );
      }
    },
    filteredHave() {
      if (this.filtered) {
        this.isFiltered = false;
        this.arrInfo = this.initialArrInfo;
      } else {
        this.isFiltered = true;
        this.arrInfo = this.initialArrInfo.filter((item) => item.have === true);
      }
    },
    clearArr() {
      if (this.newArr.length !== 0) {
        return this.newArr.length;
      } else {
        return this.arrInfo.length;
      }
    },
  },
  computed: {
    isItem() {
      if (this.arrayLength % 10 === 1 && this.arrayLength !== 11) {
        return "товар";
      } else if (
        this.arrayLength % 10 === 2 ||
        this.arrayLength % 10 === 3 ||
        this.arrayLength % 10 === 4
      ) {
        return "товара";
      } else {
        return "товаров";
      }
    },
  },
  watch: {
    selectedSord() {
      switch (this.selectedSord) {
        case "expensive":
          return this.arrInfo.sort((a, b) => b.price - a.price);
        case "cheap":
          return this.arrInfo.sort((a, b) => a.price - b.price);
        case "popular":
          return this.arrInfo.sort((a, b) => b.popular - a.popular);
        case "new":
          return this.arrInfo.sort((a, b) => b.new - a.new);
        default:
          console.log("Error");
          break;
      }
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
    left: 88%;
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
