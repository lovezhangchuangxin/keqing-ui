<template>
  <div :class="`${ns.b('group')}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@keqing-ui/hooks'
import { buttonGroupContextKey } from './constants'
import { ButtonGroupProps } from './button-group'

defineOptions({
  name: 'KqButtonGroup',
})
const props = defineProps<ButtonGroupProps>()
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  }),
)
const ns = useNamespace('button')
</script>

<style scoped></style>
