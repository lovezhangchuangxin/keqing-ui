// 根据 svg 生成 vue 组件
import consola from 'consola'
import chalk from 'chalk'
import camelcase from 'camelcase'
import { type BuiltInParserName, format } from 'prettier'
import { emptyDir, ensureDir } from 'fs-extra'
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'
import { pathComponents, pathSvgs } from './path'

/**
 * 获取 svg 文件
 */
const getSvgFiles = async () => {
  return (await readdir(pathSvgs)).filter((file) => file.endsWith('.svg'))
}

/**
 * 获取组件名称
 */
const getName = (file: string) => {
  const filename = basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

/**
 * 格式化代码
 */
const formatCode = (code: string, parser: BuiltInParserName = 'typescript') => {
  return format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })
}

/**
 * 将 svg 转换为 vue 组件
 */
const transformToVueComponent = async (file: string) => {
  const content = await readFile(file, 'utf-8')
  const { filename, componentName } = getName(file)
  const vue = await formatCode(
    `
<template>
${content}
</template>
<script lang="ts" setup>
defineOptions({
  name: ${JSON.stringify(componentName)}
})
</script>`,
    'vue',
  )
  await writeFile(resolve(pathComponents, `${filename}.vue`), vue, 'utf-8')
}

/**
 * 生成入口文件
 */
const generateEntry = async (files: string[]) => {
  const code = await formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n'),
  )
  await writeFile(resolve(pathComponents, 'index.ts'), code, 'utf-8')
}

consola.info(chalk.blue('generating vue components'))
await ensureDir(pathComponents)
await emptyDir(pathComponents)
const files = await getSvgFiles()
await Promise.all(files.map((file) => transformToVueComponent(resolve(pathSvgs, file))))
await generateEntry(files)
consola.success(chalk.green('vue components generated'))
