import { Story, Meta } from '@storybook/react/types-6-0'
import TaskComponent, { ITask } from '../../../components/molecules/task'

export default {
  title: 'Components/Molecule/Task',
  component: TaskComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta

// eslint-disable-next-line react/react-in-jsx-scope
const Template: Story<ITask> = (args: ITask) => <TaskComponent {...args} />

export const ToDoTask = Template.bind({})
ToDoTask.args = {
  isTask: true,
  taskID: 0,
  taskName: 'My Task stories'
}

export const SelectToDoTask = Template.bind({})
SelectToDoTask.args = {
  isTask: false,
  taskID: 0,
  taskName: 'My Task stories'
}
