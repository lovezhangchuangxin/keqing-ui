import { withInstall } from '@kq-ui/utils'
import Icon from './src/icon.vue'

export const KqIcon = withInstall(Icon)
export default KqIcon

export * from './src/icon'
export type IconInstance = InstanceType<typeof Icon>
