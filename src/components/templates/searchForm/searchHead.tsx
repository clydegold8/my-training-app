import React from "react";
import InputText from "../../atoms/inputs";
import { Grid } from "semantic-ui-react";
import { StyledButtonSelect } from "./style/searchHead.styled.component";
import { useHistory } from "react-router-dom";

export type IsearchHeadForm = {
  isDisabled: boolean;
  isPrimary: boolean;
  placeholder: string;
  isLoading: boolean;
};

const SearchHead = ({
  isDisabled = false,
  isPrimary = false,
  placeholder = "Search",
  isLoading = false,
}: IsearchHeadForm) => {
  const history = useHistory();

  const onClicked = () => {
    history.push("/selecttodo");
  };

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <InputText
              isDisabled={isDisabled}
              type="text"
              icon="search"
              iconPosition="left"
              name="search"
              placeholder={placeholder}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <StyledButtonSelect
              btnlabel="Select"
              isLoading={isLoading}
              isDisabled={isDisabled}
              isPrimary={isPrimary}
              onClickHandler={() => onClicked()}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SearchHead;
