---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Keqing-UI
  text: 基于 Vue3 的组件库
  tagline: 使用 Vue3, TypeScript, Vite 构建
  image:
    src: images/aqing.jpg
    alt: keqing
    width: 40%
  actions:
    - theme: brand
      text: Get Started
      link: /markdown-examples
    - theme: alt
      text: View on GitHub
      link: https://github.com/lovezhangchuangxin/keqing-ui

features:
  - title: 支持 Vue3
    details: 使用 Vue3 的 Composition API 编写
  - title: 良好的 TypeScript 开发体验
    details: 使用 TypeScript 编写，提供完整的类型定义文件
  - title: 基于 Vite 构建
    details: 使用 Vite 构建，享受快速的热更新和开发体验
---

<style >
img[alt=keqing] {
  border-radius: 50%;
  transform-origin: top;
  animation: kq-rotate 4s linear infinite;
}

/* 旋转动画 */
@keyframes kq-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(10deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(-10deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
</style>
