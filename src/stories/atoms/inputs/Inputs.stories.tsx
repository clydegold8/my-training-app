import { Story, Meta } from '@storybook/react/types-6-0'

import InputText, { textInput } from '../../../components/atoms/inputs'
import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Components/Atoms/Input',
  component: InputText
} as Meta

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<textInput> = (args: textInput) => <InputText {...args} />

export const SearchText = Template.bind({})
SearchText.args = {
  type: 'text',
  placeholder: 'Search',
  isDisabled: false,
  isError: false,
  icon: 'search',
  iconPosition: 'left',
  name: 'search'
}

export const Password = Template.bind({})
Password.args = {
  type: 'password',
  placeholder: 'Password',
  isDisabled: false,
  isError: false,
  label: 'Password',
  name: 'password'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'Email',
  isDisabled: false,
  isError: false,
  label: 'Email',
  pattern:
    '[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})',
  name: 'email'
}
