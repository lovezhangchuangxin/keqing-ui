# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
  <button-basic></button-basic>
  <div class="tool-box">
    <span @click="expand">展开</span>
  </div>
  <div style="display:none">

```vue
<script setup>
console.log(123)
</script>
```

  </div>
</div>

<script setup lang="ts">
import { ref } from 'vue'
import buttonBasic from './basic.vue'

const expand = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const code = target.parentNode?.nextSibling as HTMLElement
  if (code.style.display === 'none') {
    code.style.display = 'block'
    target.innerText = '收起'
  } else {
    code.style.display = 'none'
    target.innerText = '展开'
  }
}
</script>

<style scoped>
</style>
