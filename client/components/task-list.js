import React, { useState } from 'react'
import TaskItem from './taskItem'
import './task-list.scss'

const TaskList = (props) => {
  // через пропсы принимаем taskList
  const [newTask, setNewTask] = useState('')
  return (
    <div>
      <p className="text-2xl font-semibold text-center mb-5">List of tasks</p>
      {props.taskList.map((el) => (
        <div key={el.taskId}>
          <TaskItem
            title={el.title}
            status={el.status}
            taskId={el.taskId}
            updateStatus={props.updateStatus}
            updateTitle={props.updateTitle}
          />
        </div>
      ))}
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        className="item_input bg-green-200 border border-green-500 rounded text-black p-2 mr-4 mt-4"
        placeholder="New task"
      />
      <button
        type="button"
        onClick={() => props.addTask(newTask)}
        className="item_button bg-green-700 hover:bg-green-500 rounded text-white p-2"
      >
        Add
      </button>
    </div>
  )
}

export default TaskList
