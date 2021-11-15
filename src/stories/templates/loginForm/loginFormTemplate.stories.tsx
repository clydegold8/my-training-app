import { Story, Meta } from '@storybook/react/types-6-0'
import LogInForm, {
  IloginForm
} from '../../../components/templates/loginForm/loginForm'

export default {
  title: 'Components/Templates/LoginForm',
  component: LogInForm
} as Meta

const Template: Story<IloginForm> = (args: IloginForm) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <LogInForm {...args} />
)

export const loginForm = Template.bind({})
loginForm.args = {
  isDisabled: false,
  isPrimary: true
}
