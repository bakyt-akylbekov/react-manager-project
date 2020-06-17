import React, { useState } from 'react'
import TaskItem from './taskItem'

const TaskList = (props) => {
  // через пропсы принимаем taskList
  const [newTask, setNewTask] = useState('')
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={() => props.timeFilter('all')}
          className="bg-gray-700 hover:bg-gray-500 rounded text-white px-2 py-1 mr-2"
        >
          all
        </button>
        <button
          type="button"
          onClick={() => props.timeFilter('month')}
          className="bg-gray-700 hover:bg-gray-500 rounded text-white px-2 py-1"
        >
          month
        </button>
        <button
          type="button"
          onClick={() => props.timeFilter('week')}
          className="bg-gray-700 hover:bg-gray-500 rounded text-white px-2 py-1 mx-2"
        >
          week
        </button>
        <button
          type="button"
          onClick={() => props.timeFilter('day')}
          className="bg-gray-700 hover:bg-gray-500 rounded text-white px-2 py-1"
        >
          day
        </button>
      </div>
      <p className="text-2xl font-semibold text-center mb-5 mt-4">List of tasks</p>
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
        className="w-9/12 bg-green-200 border border-green-500 rounded text-black p-2 mr-4 mt-4"
        placeholder="New task"
      />
      <button
        type="button"
        onClick={() => props.addTask(newTask)}
        className="w-1/5 bg-green-700 hover:bg-green-500 rounded text-white p-2"
      >
        Add
      </button>
    </div>
  )
}

export default TaskList
