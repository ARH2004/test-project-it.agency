<template>
  <div class="cardsProduct">
    <div class="cardsProduct__item" v-for="item in arrInfo" :key="item.id">
      <vCard :image="item.image" :title="item.title" :price="item.price" />
    </div>
  </div>
</template>
<script>
import vCard from "@/components/UI/vCard.vue";
export default {
  name: "vCardsProduct",
  components: {
    vCard,
  },
  data() {
    return {
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
        },
      ],
    };
  },
  mounted() {
    this.$emit("array-length", this.arrInfo.length);
  },
};
</script>
<style lang="scss" scoped>
.cardsProduct {
  display: flex;
  flex-wrap: wrap;
}
</style>
