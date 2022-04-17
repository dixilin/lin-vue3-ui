---
title: sdfsa
dics: asdfs
wrapperClass: test-wrap
---

### vue preview

```vue demo
<template>
  <div>
    <button>button test</button>
    <button type="primary">primary button</button>
  </div>
</template>
```

### vue script import preview

### prism

code highlight

> demo need vue code wrapped

```typescript
import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '@/config'

const blockCls = getBlockCls('Main')

const Main = defineComponent({
  name: getCompName('Main'),
  setup(_, { slots }) {
    return () => <main class={blockCls}>{slots.default?.()}</main>
  }
})

Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

export default Main
```

### Icon `Button`

description

> demo need vue code wrapped

```vue demo
<template>
  <div>num: {{ num }}</div>
  <div>
    <el-button type="primary" icon="el-icon-edit" @click="testclick">add</el-button>
    text: {{ text }}
  </div>
</template>
```

### Attributes

## table

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |
