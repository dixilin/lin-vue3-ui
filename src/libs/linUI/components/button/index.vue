<template>
  <button :class="['lin-button',getBtnTypeClass]">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
const btnType = ['default', 'primary', 'success', 'info', 'warning', 'danger']
export default {
  name: 'LinButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  setup (props) {
    const getBtnTypeClass = computed(() => {
      let item = btnType.find(item => item === props.type)
      if (!item) item = 'default'
      return item
    })
    return { getBtnTypeClass }
  }
}
</script>

<style lang="scss">
  .lin-button {
    width:80px;
    height:32px;
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    border-radius:3px;
    color:#fff;
    &.default {
      background:#fff;
    }
  }
</style>
