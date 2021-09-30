import React from "react";
import {
  Grid,
  Dropdown,
  Checkbox,
  CheckboxProps,
  DropdownItemProps,
} from "semantic-ui-react";
import {
  StyledGridElipsisColumn,
  StyledGridCheckboxColumn,
  StyledGridTaskColumn,
} from "./style/task.styled.component";

export type ITask = {
  taskName: String;
  isTask?: boolean;
  taskID: number;
  onHandleDropDownChange: (data: DropdownItemProps, taskID: number) => any;
  onHandleCheckboxChange: (data: CheckboxProps) => any;
};

const TaskComponent = ({
  taskName = "My Task",
  isTask = false,
  taskID = 0,
  onHandleDropDownChange = () => {},
  onHandleCheckboxChange = () => {},
}: ITask) => {
  return (
    <>
      <Grid.Row>
        {!isTask ? (
          <StyledGridCheckboxColumn width={1}>
            <Checkbox
              value={taskID}
              name="idTask"
              onChange={(e, data) => onHandleCheckboxChange(data)}
            />
          </StyledGridCheckboxColumn>
        ) : (
          ""
        )}
        <StyledGridTaskColumn width={13}>{taskName}</StyledGridTaskColumn>
        {isTask ? (
          <StyledGridElipsisColumn width={2}>
            <Dropdown
              icon="ellipsis vertical"
              direction="left"
              floating
              className="icon"
            >
              <Dropdown.Menu>
                <Dropdown.Menu scrolling>
                  <Dropdown.Item
                    onClick={(e, data) => onHandleDropDownChange(data, taskID)}
                    value="update"
                    text="Update"
                  />
                  <Dropdown.Item
                    onClick={(e, data) => onHandleDropDownChange(data, taskID)}
                    value="delete"
                    text="Delete"
                  />
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </StyledGridElipsisColumn>
        ) : (
          ""
        )}
      </Grid.Row>
    </>
  );
};

export default TaskComponent;
