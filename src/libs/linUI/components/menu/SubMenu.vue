<template>
  <div class="sub-menu-wrapper">
    <div class="title" @click="titleClick">
      <slot name="title"></slot>
      <div class="down-arrow" :class="{rotate:opend}">
        <SvgIcon icon-class="down_arrow" />
      </div>
    </div>
    <CollapseTransition>
      <div class="sub-menu-content" v-show="opend">
        <slot />
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import { ref, inject, computed, getCurrentInstance } from 'vue'
export default {
  name: 'SubMenu',
  props: {
    index: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { openSubMenu, closeSubMenu, openedMenus } = inject('menuRoot')
    const isShowMenu = ref(false)

    const upLevelIndex = []
    const rootIndex = (() => {
      let instance = getCurrentInstance()
      while (instance.parent.type.name !== 'Menu') {
        if (instance.parent.type.name === 'SubMenu') {
          upLevelIndex.push(instance.parent.props.index)
        }
        instance = instance.parent
      }
      return instance.props.index
    })()
    const opend = computed(() => {
      return openedMenus.value.find(item => item.index === props.index)
    })
    const titleClick = () => {
      opend.value ? closeSubMenu(props.index, upLevelIndex) : openSubMenu(props.index, rootIndex)
    }
    return {
      isShowMenu,
      titleClick,
      opend
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-menu-wrapper {
  text-align: left;
  .title{
    display:flex;
    align-items: center;
    height:50px;
    position:relative;
    cursor: pointer;
    transition:all 0.3s;
    &:hover {
      background:rgba(0,0,0,0.4);
    }
    >.svg-icon {
      width:18px;
      height:18px;
      margin-right:5px;
    }
    .down-arrow {
      position:absolute;
      right:10px;
      top:50%;
      transform: translateY(-50%);
      transition: all 0.3s;
      &.rotate {
        transform:translateY(-50%) rotateZ(180deg)
      }
      .iconright_arrow {
        width:10px;
        height:10px;
      }
    }
  }
}
</style>
