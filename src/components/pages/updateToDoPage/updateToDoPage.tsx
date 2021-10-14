// eslint-disable-next-line no-use-before-define
import React from 'react'
import UpdateToDoListComponent from '../../organisms/updateToDoList'
import { useParams } from 'react-router-dom'

type taskIDParams = {
  id: string;
};

const UpdateToDoListPageComponent = () => {
  const { id } = useParams<taskIDParams>()
  return (
    <>
      <UpdateToDoListComponent id={+id} />
    </>
  )
}

export default UpdateToDoListPageComponent
