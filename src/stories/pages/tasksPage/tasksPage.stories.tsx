import { Story, Meta } from "@storybook/react/types-6-0";
import TasksPage from "../../../components/pages/tasksPage";

export default {
  title: "Components/Page/Tasks",
  component: TasksPage,
} as Meta;

const Template: Story<typeof TasksPage> = (args) => <TasksPage {...args} />;

export const tasksPage = Template.bind({});
tasksPage.args = {};
