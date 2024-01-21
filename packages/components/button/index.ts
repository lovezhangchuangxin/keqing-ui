import { withInstall } from '@kq-ui/utils'
import Button from './src/button.vue'

export const KqButton = withInstall(Button)
export default KqButton

export * from './src/button'
export type ButtonInstance = InstanceType<typeof Button>
