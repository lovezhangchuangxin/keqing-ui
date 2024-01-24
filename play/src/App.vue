<template>
  <div>
    Hello World
    <kq-icon size="20" class="is-loading">
      <Loading />
    </kq-icon>

    <kq-button @click="(e: any) => console.log(e)">点击</kq-button>
    <kq-button type="primary" loading round @click="(e: any) => console.log(e)">点击</kq-button>

    <p style="--color: green">你好</p>

    <kq-alert title="success alert" type="success" description="more text description" show-icon />
    <kq-alert title="info alert" type="info" description="more text description" show-icon />
    <kq-alert title="warning alert" type="warning" description="more text description" show-icon />
    <kq-alert
      title="error alert"
      type="error"
      description="more text description"
      show-icon
      @click="console.log('alert!')"
    />
  </div>
</template>

<script setup lang="ts">
import KqIcon from '@kq-ui/components/icon'
import { Loading } from '@kq-ui/icons'
</script>

<style scoped>
:root {
  --kq-color-primary: #cf3adc;
}

p {
  --color: blue;
  color: var(--color);
}

.kq-alert {
  margin: 20px 0 0;
}
</style>
