import { Loading } from '@kq-ui/icons'
import { ButtonHTMLAttributes } from 'vue'

export const buttonTypes = ['default', 'primary', 'success', 'info', 'danger', 'warning'] as const
export const buttonSize = ['large', 'default', 'small'] as const

export type ButtonType = (typeof buttonTypes)[number]

export type ButtonSizeType = (typeof buttonSize)[number]

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>

export type IconPropType = typeof Loading

export type ButtonProps = {
  /**
   * 类型
   */
  type?: ButtonType
  /**
   * 大小
   */
  size?: ButtonSizeType
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 按钮原生 type 属性
   */
  nativeType?: ButtonNativeType
  /**
   * icon
   */
  icon?: IconPropType
  /**
   * 是否加载中
   */
  loading?: boolean
  /**
   * 加载 icon
   */
  loadingIcon?: IconPropType
  /**
   * 是否显示背景色
   */
  bg?: boolean
  /**
   * 原生 autofocus 属性
   */
  autofocus?: boolean
  /**
   * 是否是圆角按钮
   */
  round?: boolean
  /**
   * 是否是圆形按钮
   */
  circle?: boolean
  /**
   * 自定义按钮颜色，会自动计算 hover 和 active 状态的颜色
   */
  color?: string
  /**
   * dark 模式自动计算颜色
   */
  dark?: boolean
  /**
   * 是否朴素按钮
   */
  plain?: boolean
  /**
   * 是否是文字按钮
   */
  text?: boolean
  /**
   * 是否是链接按钮
   */
  link?: boolean
  /**
   * 自定义元素标签
   */
  tag?: keyof HTMLElementTagNameMap | string
}

export type ButtonEmits = {
  /**
   * 点击事件
   */
  click: [e: MouseEvent]
}
