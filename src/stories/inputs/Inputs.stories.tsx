import { Story, Meta } from '@storybook/react/types-6-0';

import InputText, {textInput} from '../../components/inputs/';
import 'semantic-ui-css/semantic.min.css';

export default {
    title: 'Components/Input',
    component: InputText,
    argTypes: {
        isDisabled: {
          options: ['True', 'False'],
          control: { type: 'boolean' }
        },
        isError: {
            options: ['True', 'False'],
            control: { type: 'boolean' }
          }
      }

  } as Meta;

  const Template: Story<textInput> = (args:textInput) => <InputText {...args} />;


export const Text = Template.bind({});
Text.args = {
    type:'text',
    placeholder:'Username',
    isDisabled:false,
    isError:false,
    label:"Username",
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder:'Password',
  isDisabled:false,
  isError:false,
  label:"Password",
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder:'Email',
  isDisabled:false,
  isError:false,
  label:"Email",
  pattern:'[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'
};