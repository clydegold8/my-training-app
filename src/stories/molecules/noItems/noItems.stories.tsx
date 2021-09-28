import { Story, Meta } from "@storybook/react/types-6-0";
import NoItemsComponent, {
    InoItemsComponent,
  } from "../../../components/molecules/noItems";
  
  export default {
    title: "Components/Molecule/No Items",
    component: NoItemsComponent,
  } as Meta;
  
  const Template: Story<InoItemsComponent> = (args: InoItemsComponent) => (
    <NoItemsComponent {...args} />
  );
  
  export const noItemsTasks = Template.bind({});
  noItemsTasks.args = {
    description:"To do list increases productivity",
    subdescription:"Add your first to do"
  };

  export const noToDo = Template.bind({});
  noToDo.args = {
    description:"No to do yet",
    subdescription:"Add your first to do"
  };

  export const noToDoFound = Template.bind({});
  noToDoFound.args = {
    description:"No to do found.",
    subdescription:"Try different keywords."
  };