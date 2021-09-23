import { Story, Meta } from '@storybook/react/types-6-0';
import LogInForm, {loginFormInterface} from '../../../components/organisms/loginForm';


export default {
    title: 'Components/Organisms/LoginForm',
    component: LogInForm,

  } as Meta;

  const Template: Story<loginFormInterface> = (args:loginFormInterface) => <LogInForm {...args} />;

export const loginForm = Template.bind({});
loginForm.args = {
    isDisabled:false,
    isLoading:false,
    isPrimary:true,
    isError:false,
};