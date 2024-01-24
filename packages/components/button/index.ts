import { withInstall, withNoopInstall } from '@keqing-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const KqButton = withInstall(Button, {
  Group: ButtonGroup,
})
export const KqButtonGroup = withNoopInstall(ButtonGroup)
export default KqButton

export * from './src/button'
export * from './src/button-group'
export type ButtonInstance = InstanceType<typeof Button>
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
