<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { CSSProperties, computed } from 'vue'
import { useNamespace } from '@kq-ui/hooks'
import { isUndefined, addUnit } from '@kq-ui/utils'
import { iconProps } from './icon'
import '../style'

defineOptions({
  name: 'KqIcon',
  inheritAttrs: false,
})

const ns = useNamespace('icon')
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>

<style scoped></style>
