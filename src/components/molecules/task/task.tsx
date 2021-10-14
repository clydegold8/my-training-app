// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import {
  Grid,
  Dropdown,
  Checkbox,
  CheckboxProps,
  DropdownItemProps
} from 'semantic-ui-react'
import {
  StyledGridElipsisColumn,
  StyledGridCheckboxColumn,
  StyledGridTaskColumn
} from './style/task.styled.component'

export type ITask = {
  taskName: String;
  isTask?: boolean;
  taskID: number;
  isCrashout?: boolean;
  isAllchecked?: boolean;
  onHandleDropDownChange: (data: DropdownItemProps, taskID: number) => void;
  onHandleCheckboxChange: (data: CheckboxProps) => void;
  onHandleColumnClick: (taskID: number) => void;
};

const TaskComponent = ({
  taskName = 'My Task',
  isTask = false,
  taskID = 0,
  isCrashout,
  isAllchecked = false,
  onHandleDropDownChange = () => {},
  onHandleCheckboxChange = () => {},
  onHandleColumnClick = () => {}
}: ITask) => {
  const [isChecked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(isAllchecked)
  }, [isAllchecked])

  const toggle = () => {
    setChecked(!isChecked)
  }

  return (
    <>
      <Grid.Row>
        <StyledGridCheckboxColumn width={1}>
          {!isTask
            ? (
            <Checkbox
              checked={isChecked}
              value={taskID}
              name="idTask"
              onClick={(_e, data) => onHandleCheckboxChange(data)}
              onChange={toggle}
            />
              )
            : (
                ''
              )}
        </StyledGridCheckboxColumn>

        <StyledGridTaskColumn
          width={12}
          isCrashOut={isCrashout}
          onClick={() => onHandleColumnClick(taskID)}
        >
          {taskName}
        </StyledGridTaskColumn>
        {isTask && !isCrashout
          ? (
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
                    onClick={(_e, data) => onHandleDropDownChange(data, taskID)}
                    value="update"
                    text="Update"
                  />
                  <Dropdown.Item
                    onClick={(_e, data) => onHandleDropDownChange(data, taskID)}
                    value="delete"
                    text="Delete"
                  />
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </StyledGridElipsisColumn>
            )
          : (
              ''
            )}
      </Grid.Row>
    </>
  )
}

export default TaskComponent
