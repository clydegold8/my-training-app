import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonComponent, {buttonProps} from '../../../components/atoms/button';

import 'semantic-ui-css/semantic.min.css';

export default {
    title: 'Components/Atoms/Button',
    component: ButtonComponent,
    argTypes: { onClick: { action: 'clicked' } },
  } as Meta;


  const Template: Story<buttonProps> = (args:buttonProps) => <ButtonComponent {...args} />;

export const Login = Template.bind({});
Login.args = {
  btnlabel:'Login',
  color:'blue',
  isPrimary:true,
  isLoading: false,
  isDisabled: false,
};

export const Select = Template.bind({});
Select.args = {
  btnlabel:'Select',
  color:'blue',
  isPrimary:false,
  isLoading: false,
  isDisabled: false,
};
