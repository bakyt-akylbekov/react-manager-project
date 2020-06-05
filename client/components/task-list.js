import React from 'react'

const TaskList = (props) => {
  // через пропсы принимаем taskList
  return (
    <div>
      {props.taskList.map((el) => (
        <div>{el.title}</div>
      ))}
    </div>
  )
}

export default TaskList
