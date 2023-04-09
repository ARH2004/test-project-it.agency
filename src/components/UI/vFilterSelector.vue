<template>
	<div :class="{black : isOpen === true}"></div>
	<div class="dropdown">
    <div class="dropdown-button" @click="isOpen = !isOpen">{{ selected }}</div>
    <div class="dropdown-menu" v-if="isOpen">
      <div class="dropdown-item" v-for="item in items" :key="item.id" @click="selectItem(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
	name: 'filterSelector',
	props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      selected: this.items[0].label,
    };
  },
  methods: {
    selectItem(item) {
      this.selected = item.label;
      this.isOpen = false;
      // Эмитируем событие выбора элемента
      this.$emit('select', item);
    },
  },
}
</script>
<style lang="scss" scoped>
.dropdown{
  position: relative;
  z-index: 20;
}
.black{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>