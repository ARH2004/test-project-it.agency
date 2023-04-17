<template>
  <div class="selectors">
    <div class="container">
			<div @click="openFilter" :class="{ black: isMobVers === true }"></div>

			<button class="selectors__mobVers" @click="openFilter">
				Фильтры
			</button>
			<div class="hideBlock" v-if="isMobVers">
				<hr class="hideBlock__line" />
				<div class="hideBlock__wrapper">
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

			<div class="selectors__wrapper">
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
			isMobVers: false,
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
		},
		openFilter(){
			this.isMobVers = !this.isMobVers
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
	&__mobVers{
		display: none;
		background: none;
		font-weight: 500;
		font-size: 12px;
		line-height: 15px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
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
.selectors__circle.right {
  left: 13px;
}
.selectors__btn.right {
  background: #7bb899;
  transition: all 0.3s;
}
.hideBlock{
	position: fixed;
	z-index: 111;
	bottom: 0%;
	left: 0;
	background: white;
	border-radius: 24px 24px 0px 0px;
	width: 100vw;
	height: 70vh;
	&__wrapper{
	padding: 55px 0px 0px 25px;
	}
	&__line{
		position: relative;
		z-index: 89393;
    top: 15px;
    left: 45%;
   	width: 28px;
		height: 4px;
    background: #1F2020;
		opacity: 0.6;
		border-radius: 40px;
	}
}
@media (max-width: 1200px) {
	.selectors{
		&__wrapper{
			display: none;
		}
		&__mobVers{
			display: block;
		}
	}
}
</style>
