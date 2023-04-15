<template>
  <div class="selectors">
    <div class="container">
      <div @click="filteredNewest" class="selectors__block">
        <button
          class="selectors__btn"
          @click="moveCircleNewest()"
          :class="{ right: isRightNewest }"
        >
          <p class="selectors__circle" :class="{ right: isRightNewest }"></p>
        </button>
        <h3 class="selectors__title" 
          @click="moveCircleNewest()"
				>Новинки</h3>
      </div>
			

			      <div @click="filteredHave" class="selectors__block">
        <button
          class="selectors__btn"
          @click="moveCircleHave()"
          :class="{ right: isRightHave }"
        >
          <p class="selectors__circle" :class="{ right: isRightHave }"></p>
        </button>
        <h3 class="selectors__title" 
          @click="moveCircleHave()"
				>Есть в наличии</h3>
      </div>


			      <div @click="filteredContract" class="selectors__block">
        <button
          class="selectors__btn"
          @click="moveCircleContract()"
          :class="{ right: isRightContract }"
        >
          <p class="selectors__circle" :class="{ right: isRightContract }"></p>
        </button>
        <h3 class="selectors__title" 
          @click="moveCircleContract()"
				>Контрактные</h3>
      </div>


			      <div @click="filteredExclusive" class="selectors__block">
        <button
          class="selectors__btn"
          @click="moveCircleExclusive()"
          :class="{ right: isRightExclusive }"
        >
          <p class="selectors__circle" :class="{ right: isRightExclusive }"></p>
        </button>
        <h3 class="selectors__title" 
          @click="moveCircleExclusive()"
				>Эксклюзивные</h3>
      </div>


			      <div @click="filteredSale" class="selectors__block">
        <button
          class="selectors__btn"
          @click="moveCircleSale()"
          :class="{ right: isRightSale }"
        >
          <p class="selectors__circle" :class="{ right: isRightSale }"></p>
        </button>
        <h3 class="selectors__title" 
          @click="moveCircleSale()"
				>Распродажа</h3>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  name: "vSelectors",
	props: {
		filteredContract: {
			type: Function,
		},
		filteredNewest: {
			type: Function,
		},
		filteredSale: {
			type: Function,
		},
		filteredExclusive: {
			type: Function,
		},
		arrSel: {
			type: Array,
		}
	},
  data() {
    return {
			isRightNewest: false,
			isRightContract: false,
			isRightSale: false,
			isRightExclusive: false,
			isRightHave: false,
    };
  },
  methods: {
    moveCircleNewest() {
      this.isRightNewest = !this.isRightNewest;
    },
		moveCircleContract() {
      this.isRightContract = !this.isRightContract;
    },
		moveCircleSale() {
      this.isRightSale = !this.isRightSale;
		},
		moveCircleExclusive() {
      this.isRightExclusive = !this.isRightExclusive;
    },
		moveCircleHave(){
      this.isRightHave = !this.isRightHave;
		}
  },
};
</script>
<style lang="scss" scoped>
.selectors {
  &__block {
    width: 170px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__btn {
    width: 36px;
    height: 22px;
    background: #f2f2f2;
    border-radius: 40px;
    position: relative;
  }
  &__circle {
    width: 8px;
    height: 8px;
    background: #1f2020;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 0;
    margin: 0px 7px 0px 7px;
    transition: left 0.3s ease-in-out;
  }
  &__title {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1f2020;
    margin-left: 12px;
		cursor: pointer;
  }
}

.selectors__circle.right {
  left: 13px;
}
.selectors__btn.right {
  background: #7bb899;
  transition: all 0.3s;
}
</style>
