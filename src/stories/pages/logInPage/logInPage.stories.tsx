import { Story, Meta } from '@storybook/react/types-6-0';
import LogInPage from '../../../components/pages/logInPage';

export default {
    title: 'Components/Page/LogInPage',
    component: LogInPage,

  } as Meta;

  const Template: Story<typeof LogInPage> = (args) => <LogInPage {...args} />;

export const loginPage = Template.bind({});
loginPage.args = {

};