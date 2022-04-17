<template>
  <div :class="['menu-item-wrapper', {selected:index === activeIndex}]" @click="itemClick">
    <slot />
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  props: {
    index: {
      type: String,
      default: ''
    },
    selectKey: {
      type: String,
      default: ''
    },
    defaultActive: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { activeIndex, setIndex } = inject('menuRoot')
    const itemClick = () => {
      setIndex(props.index)
    }
    return {
      itemClick,
      activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item-wrapper {
  text-align: left;
  height:50px;
  display:flex;
  align-items: center;
  cursor: pointer;
  transition:all 0.3s;
  &:hover {
    background:rgba(0,0,0,0.4);
  }
  .svg-icon {
    width:18px;
    height:18px;
    margin-right:5px;
  }
  &.selected{
    color:rgb(255, 208, 75);
  }
}
</style>
