import { ExtractPropTypes } from 'vue'

export const iconProps = {
  size: {
    type: [Number, String],
  },
  color: {
    type: String,
  },
}

export type IconProps = ExtractPropTypes<typeof iconProps>
