// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { Grid, Icon, Input, TransitionablePortal } from 'semantic-ui-react'
import {
  StyledCircularBtn,
  StyledGridFirstColumn,
  StyledGridSegment
} from './style/updateToDoList.styled.component'
import { useHistory } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { ITask, TaskState } from '../../../services/redux/types/type.d'
import { Dispatch } from 'redux'
import { updateTask } from '../../../services/redux/store/actionCreators'
import TasksService from '../../../services/tasks.services'

type ItaskIDParams = {
  id: number;
};

const UpdateToDoListComponent = ({ id }: ItaskIDParams) => {
  const [selectedTask, setSelectedTask] = useState<ITask>({
    id: 0,
    taskName: ''
  })

  const [showToast, setShowToast] = useState(false)

  const tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const updateSelectedTask = React.useCallback(
    (task: ITask) => dispatch(updateTask(task)),
    [dispatch]
  )

  useEffect(() => {
    handleSelectedTask(id)
  }, [id])

  const handleSelectedTask = (id: number) => {
    const task = tasks.filter((task) => task.id === id)
    setSelectedTask(task[0])
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      const taskSelected: ITask = {
        id: selectedTask.id,
        taskName: (e.target as HTMLInputElement).value
      }

      TasksService.updateTask(taskSelected.id, taskSelected)
        .then((response: any) => {
          updateSelectedTask(response.data.tasks[0])
        })
        .catch((e) => {})

      setShowToast(true)
      setTimeout(() => {
        setShowToast(false)
        handleClick()
      }, 2000)
    }
  }

  const handleClick = () => {
    history.push('/tasks')
  }

  const history = useHistory()
  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridFirstColumn>
            <Icon onClick={() => handleClick()} name="angle left" />
            <span>Update To Do</span>
          </StyledGridFirstColumn>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Input
              defaultValue={selectedTask.taskName}
              fluid
              focus
              placeholder="To do"
              onKeyDown={handleKeyDown}
            />
            <StyledCircularBtn
              onClick={() => handleClick()}
              circular
              icon="times"
            />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>

      <TransitionablePortal open={showToast}>
        <StyledGridSegment>
          <p>To do updated</p>
        </StyledGridSegment>
      </TransitionablePortal>
    </>
  )
}

export default UpdateToDoListComponent
