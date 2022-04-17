
function focusFn (menuNode, inputNode) {
  menuNode.style.visibility = 'visible'
  menuNode.style.opacity = 1
  inputNode.readOnly = false
}

function blurFn (menuNode, inputNode) {
  menuNode.style.visibility = 'hidden'
  menuNode.style.opacity = 0
  inputNode.readOnly = true
}

export default {
  mounted (el) {
    const menuWrapperNode = el.nextElementSibling
    el.addEventListener('focus', focusFn.bind(el, menuWrapperNode, el))
    el.addEventListener('blur', blurFn.bind(el, menuWrapperNode, el))
  },
  beforeUnmount (el) {
    el.removeEventListener('focus', focusFn)
    el.removeEventListener('blur', blurFn)
  }
}
