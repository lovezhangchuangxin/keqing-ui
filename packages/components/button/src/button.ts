import { ButtonHTMLAttributes } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning'

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>

// export type ButtonProps = {}
