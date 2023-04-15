<template>
  <select
    class="select"
    :value="modelValue"
    @input="changeOption($event.target.value)"
    @click="isOpen = !isOpen"
  >
    <option class="select__dis" disabled value="">Выберите из списка</option>
    <option
      class="select__item"
      v-for="option in options"
      :key="option.id"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
  <div :class="{ black: isOpen === true }"></div>
</template>
<script>
export default {
  name: "filterSelector",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event);
    },
  },
};
</script>
<style lang="scss" scoped>
.select {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #1f2020;
	border-radius: 0;
  &__dis {
    display: none;
  }
  &__item {
    padding: 20px;
  }
}
.black {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.7;
}
select option {
  border: none;
  outline: none;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
