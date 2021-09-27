import React from "react";
import InputText from "../../atoms/inputs";
import { Grid } from "semantic-ui-react";
import { StyledButtonSelect } from "./style/searchHead.styled.component";

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
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <InputText
              isDisabled={isDisabled}
              type="text"
              icon="search"
              iconPosition="left"
              name="search"
              placeholder={placeholder}
            />
          </Grid.Column>
          <Grid.Column width={2}>
            <StyledButtonSelect
              btnlabel="Search"
              isLoading={isLoading}
              isDisabled={isDisabled}
              isPrimary={isPrimary}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SearchHead;
