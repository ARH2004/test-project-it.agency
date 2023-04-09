<template>
  <div class="selectors">
    <div class="container">
      <div class="selectors__block">
        <button
          class="selectors__btn"
          @click="moveCircle"
          :class="{ right: isRight }"
        >
          <p class="selectors__circle" :class="{ right: isRight }"></p>
        </button>
        <h3 class="selectors__title">{{text}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vSelectors",
	  props: {
    initialState: {
      type: Boolean,
      default: false,
			required: true,
    },
		text: {
			type: String,
			required: true,
		}
  },
  data() {
    return {
      isRight: this.initialState
    };
  },
  methods: {
    moveCircle() {
      this.isRight = !this.isRight;
    }
  }
};
</script>
<style lang="scss" scoped>
.selectors {
  &__block {
    width: 170px;
    display: flex;
		align-items: center;
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
