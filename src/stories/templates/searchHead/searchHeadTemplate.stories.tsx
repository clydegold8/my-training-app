import { Story, Meta } from "@storybook/react/types-6-0";
import SearchHead, {
  IsearchHeadForm,
} from "../../../components/templates/searchForm";

export default {
  title: "Components/Templates/SearchHead",
  component: SearchHead,
} as Meta;

const Template: Story<IsearchHeadForm> = (args: IsearchHeadForm) => (
  <SearchHead {...args} />
);

export const searchHead = Template.bind({});
searchHead.args = {
  isDisabled: false,
  placeholder: "Search",
  isPrimary: false,
};
