import { withInstall } from '@keqing-ui/utils'
import Alert from './src/alert.vue'

export const KqAlert = withInstall(Alert)
export default KqAlert

export * from './src/alert'
export type AlertInstance = InstanceType<typeof Alert>
