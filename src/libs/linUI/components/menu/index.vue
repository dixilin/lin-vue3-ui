<template>
  <div class="nav-menu-wrapper" ref="navRef">
    <slot/>
  </div>
</template>

<script>
import { onMounted, ref, provide } from 'vue'
export default {
  name: 'Menu',
  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    uniqueOpend: {
      type: Boolean,
      default: false
    }
  },
  setup (props, ctx) {
    const navRef = ref(null)
    const paddingNum = 20
    const activeIndex = ref(props.defaultActive)
    const openedMenus = ref([])

    onMounted(() => {
      const navNode = navRef.value
      const getPaddingStyle = (fakeData, level) => {
        const children = Array.from(fakeData)
        const paddingLength = `${paddingNum * level}px`
        children.forEach(c => {
          if (c.className === 'sub-menu-wrapper') {
            c.children[0].style.paddingLeft = paddingLength
            getPaddingStyle(c.children[1].children, level + 1)
          } else {
            c.style.paddingLeft = paddingLength
          }
        })
      }
      getPaddingStyle(navNode.children, 1)
    })
    const setIndex = index => {
      activeIndex.value = index
      ctx.emit('selected', index)
    }
    const openSubMenu = (index, rootIndex) => {
      if (props.uniqueOpend) {
        const flag = openedMenus.value.some(item => item.rootIndex === rootIndex)
        if (!flag && openedMenus.value.length && openedMenus.value[0].rootIndex !== rootIndex) {
          openedMenus.value = [{ index, rootIndex }]
        } else {
          openedMenus.value.push({ index, rootIndex })
        }
      } else {
        openedMenus.value.push({ index, rootIndex })
      }
    }
    const closeSubMenu = (index, upLevelData) => {
      if (props.uniqueOpend) {
        if (!upLevelData.length) {
          openedMenus.value = []
        } else {
          const temp = []
          upLevelData.forEach(item => {
            openedMenus.value.forEach((o, i) => {
              if (item === o.index) {
                temp.push(i)
              }
            })
          })
          const maxIndex = Math.max.apply(null, temp)
          for (let i = 0; i < openedMenus.value.length; i++) {
            if (i > maxIndex) {
              openedMenus.value.splice(i, 1)
              i--
            }
          }
        }
      } else {
        const i = openedMenus.value.findIndex(item => item.index === index)
        i !== -1 && openedMenus.value.splice(i, 1)
      }
    }
    provide('menuRoot', { activeIndex, setIndex, openedMenus, openSubMenu, closeSubMenu })
    return {
      navRef
    }
  }
}
</script>

<style scoped lang="scss">
.nav-menu-wrapper {
  width:240px;
  background:rgb(84, 92, 100);
  color:#fff;
}
</style>
