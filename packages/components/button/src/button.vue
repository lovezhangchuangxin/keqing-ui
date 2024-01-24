<template>
  <component
    :is="tag"
    :type="nativeType"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('disabled', disabled),
      ns.is('loading', loading),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('has-bg', bg),
    ]"
    :disabled="disabled || loading"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <kq-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </kq-icon>
    </template>
    <kq-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </kq-icon>
    <span>
      <slot name="default" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { useNamespace } from '@kq-ui/hooks'
import { Loading } from '@kq-ui/icons'
import { KqIcon } from '@kq-ui/components/icon'
import '../style'
import { ButtonProps, ButtonEmits } from './button'
import { useButtonCustomStyle } from './button-custom'

defineOptions({
  name: 'KqButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
  loadingIcon: Loading,
  tag: 'button',
})
const emit = defineEmits<ButtonEmits>()
const ns = useNamespace('button')
const buttonStyle = useButtonCustomStyle(props)

const handleClick = (e: MouseEvent) => {
  emit('click', e)
}
</script>

<style scoped></style>
