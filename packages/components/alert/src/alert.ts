export type AlertType = 'success' | 'info' | 'warning' | 'error'

export type AlertProps = {
  /**
   * 标题
   */
  title?: string
  /**
   * 类型
   */
  type?: AlertType
  /**
   * 描述
   */
  description?: string
  /**
   * 是否可以被关闭
   */
  closable?: boolean
  /**
   * 关闭文本
   */
  closeText?: string
  /**
   * 是否显示图标
   */
  showIcon?: boolean
  /**
   * 内容是否居中
   */
  center?: boolean
  /**
   * 主题
   */
  theme?: 'light' | 'dark'
}

export type AlertEmits = {
  /**
   * 关闭时触发
   */
  close: [e: MouseEvent]
}
