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
.dropdown-button {
	cursor: pointer;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #1F2020;
}
.dropdown-item {
	cursor: pointer;
}
</style>