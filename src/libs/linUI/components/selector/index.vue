<template>
  <div class="selector-wrapper">
    <input v-select-focus :value="inputVal" :placeholder="formatPlaceholder" readonly @focus="focusEvent" @blur="blurEvent"
      @input="changeValue"
    >
    <SelectMenu :data="filterData" @selectItem="getSelectItem" :active="modelValue"/>
    <SvgIcon icon-class="down_arrow" v-show="!focusFlag" />
    <SvgIcon icon-class="search" v-show="focusFlag" />
  </div>
</template>

<script>
import SelectMenu from './SelectMenu.vue'
import focusDirective from '../../directives/select-focus.js'
import { reactive, toRefs, onMounted, computed } from 'vue'
export default {
  components: {
    SelectMenu
  },
  directives: {
    'select-focus': focusDirective
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    modelValue: {
      type: [Number, String],
      default: undefined
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  setup (props, ctx) {
    const state = reactive({
      inputVal: '',
      tempLabel: '',
      filterData: props.data,
      focusFlag: false
    })

    const getSelectItem = item => {
      state.inputVal = item.label
      ctx.emit('update:modelValue', item.value)
      state.tempLabel = item.label
    }

    const focusEvent = () => {
      state.inputVal = ''
      state.filterData = props.data
      state.focusFlag = true
    }

    const blurEvent = () => {
      state.inputVal = state.tempLabel
      state.focusFlag = false
    }

    onMounted(() => {
      const { data, modelValue } = props
      const defaultItem = data.find(item => item.value === modelValue)
      if (defaultItem !== undefined) state.inputVal = defaultItem.label
    })

    const formatPlaceholder = computed(() => {
      return state.tempLabel.length ? state.tempLabel : props.placeholder
    })

    const changeValue = (e) => {
      const val = e.target.value
      state.inputVal = val
      state.filterData = props.data.filter(item => item.label.includes(val))
    }

    return {
      getSelectItem,
      focusEvent,
      blurEvent,
      formatPlaceholder,
      changeValue,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.selector-wrapper {
  width:220px;
  position:relative;
  > input {
    width:100%;
    padding: 0 8px;
    border-radius:4px;
    height: 34px;
    border:1px solid #efefef;
    transition: all 0.3s;
    &:focus {
      border-color: skyblue;
      box-shadow:0 0 4px skyblue;
    }
  }
  .svg-icon {
    color:#cfcfcf;
    position:absolute;
    right:10px;
    top:50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
