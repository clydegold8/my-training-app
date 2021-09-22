import { Story, Meta } from '@storybook/react/types-6-0';
import LogInForm, {loginFormInterface} from '../../../components/templates/loginForm/loginForm';


export default {
    title: 'Components/Templates/LoginForm',
    component: LogInForm,
    argTypes: { onSubmit: { action: 'clicked' } },

  } as Meta;

  const Template: Story<loginFormInterface> = (args:loginFormInterface) => <LogInForm {...args} />;

export const loginForm = Template.bind({});
loginForm.args = {
    isDisabled:false,
    isLoading:false,
    isPrimary:true,
    isError:false,
};