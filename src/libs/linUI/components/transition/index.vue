<template>
  <transition v-on="on">
    <slot></slot>
  </transition>
</template>

<script>

export default {
  setup () {
    const transitionStyle = '0.3s height ease-in-out'
    const Transition = {
      beforeEnter (el) {
        el.style.transition = transitionStyle
        if (!el.dataset) el.dataset = {}
        el.style.height = 0
      },
      enter (el) {
        if (el.scrollHeight !== 0) {
          el.style.height = `${el.scrollHeight}px`
        } else {
          el.style.height = ''
        }
        el.style.overflow = 'hidden'
      },
      afterEnter (el) {
        el.style.transition = ''
        el.style.height = ''
      },
      beforeLeave (el) {
        if (!el.dataset) el.dataset = {}
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
      },
      leave (el) {
        if (el.scrollHeight !== 0) {
          el.style.transition = transitionStyle
          el.style.height = 0
        }
      },
      afterLeave (el) {
        el.style.transition = ''
        el.style.height = ''
      }
    }
    return {
      on: Transition
    }
  }
}
</script>
