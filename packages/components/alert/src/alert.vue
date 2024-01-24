<template>
  <transition :name="ns.b('fade')">
    <div v-show="visible" :class="[ns.b(), ns.m(type), ns.is('center', center), ns.is(theme)]" role="alert">
      <!-- 类型图标 -->
      <kq-icon v-if="showIcon && iconComponent" :class="iconClass">
        <component :is="iconComponent" />
      </kq-icon>

      <div :class="ns.e('content')">
        <!-- 标题 -->
        <span v-if="title || $slots.title" :class="[ns.e('title'), isBoldTitle]">
          <slot name="title">{{ title }}</slot>
        </span>
        <!-- 描述 -->
        <p v-if="$slots.default || description" :class="ns.e('description')">
          <slot>
            {{ description }}
          </slot>
        </p>
        <!-- 关闭 -->
        <template v-if="closable">
          <div v-if="closeText" :class="[ns.e('close-btn'), ns.is('customed')]" @click="close">
            {{ closeText }}
          </div>
          <kq-icon v-else :class="ns.e('close-btn')" @click="close">
            <Close />
          </kq-icon>
        </template>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import { KqIcon } from '@keqing-ui/components/icon'
import { useNamespace } from '@keqing-ui/hooks'
import { SuccessFilled, WarningFilled, CircleCloseFilled, InfoFilled, Close } from '@keqing-ui/icons'
import { AlertProps, AlertEmits } from './alert'
import '../style'

defineOptions({
  name: 'KqAlert',
})

const props = withDefaults(defineProps<AlertProps>(), {
  title: '',
  type: 'info',
  closable: true,
  theme: 'light',
})
const emit = defineEmits<AlertEmits>()
const ns = useNamespace('alert')
const slots = useSlots()
const visible = ref(true)

const TypeComponentsMap = {
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}
const iconComponent = computed(() => TypeComponentsMap[props.type])

const iconClass = computed(() => [ns.e('icon'), { [ns.is('big')]: !!props.description || !!slots.default }])

const isBoldTitle = computed(() => {
  return { [ns.is('bold')]: props.description || slots.default }
})

const close = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}
</script>

<style scoped></style>
