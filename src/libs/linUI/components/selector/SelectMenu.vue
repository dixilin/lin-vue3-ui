<template>
  <div class="menu-wrapper">
    <ul class="options" v-if="hasData">
      <li :class="['option-item',{active:active === item.value}]" v-for="item in data" :key="item.value"
        @click="selectItem(item)"
      >{{item.label}}</li>
    </ul>
    <NoDataWrapper v-else/>
  </div>
</template>

<script>
import { computed } from 'vue'
import NoDataWrapper from './NoDataWrapper.vue'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: {
      type: [Number, String],
      default: undefined
    }
  },
  components: {
    NoDataWrapper
  },
  setup (props, ctx) {
    const hasData = computed(() => {
      return props.data.length
    })
    let flag = true
    const selectItem = item => {
      if (!flag) {
        return
      }
      flag = false
      ctx.emit('selectItem', item)
      setTimeout(() => {
        flag = true
      }, 500)
    }
    return {
      hasData,
      selectItem
    }
  }
}
</script>

<style scoped lang="scss">
.menu-wrapper {
  border-radius:4px;
  box-shadow: 0 2px 9px rgba(0,0,0,0.1);
  position:absolute;
  padding:3px 0;
  visibility: hidden;
  transition: all 0.3s;
  top:38px;
  width:100%;
  .options {
    list-style: none;
    .option-item {
      height:34px;
      line-height:34px;
      transition: all 0.3s;
      &:hover {
        background:lightskyblue !important;
      }
      &.active {
        background:#efefef;
      }
    }
  }
}

</style>
