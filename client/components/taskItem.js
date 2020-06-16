import React, { useState } from 'react'

const TaskItem = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [taskName, setTaskName] = useState(props.title)
  return (
    <div className="flex">
      <span className="flex items-center justify-center mr-3">
        <svg
          className="octicon octicon-pencil"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
          >
            .
          </path>
        </svg>
      </span>
      <div className="py-2">
        {editMode ? (
          <span>
            <button
              type="button"
              onClick={() => props.updateTitle(taskName, props.taskId)}
              className="bg-gray-800 hover:bg-gray-700 rounded text-white p-1 mr-3"
            >
              Save
            </button>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="bg-green-200 border border-green-500 rounded text-black p-1"
            />
          </span>
        ) : (
          <span>
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="bg-red-800 hover:bg-red-700 rounded text-white p-1 mr-3"
            >
              Edit
            </button>
            <span className="inline text-lg font-mono">{props.title}</span>
          </span>
        )}
        {props.status === 'new' && (
          <button
            type="button"
            onClick={() => props.updateStatus(props.taskId, 'in progress')}
            className="bg-indigo-800 hover:bg-indigo-700 rounded text-white p-1 ml-6"
          >
            In progress
          </button>
        )}
        {props.status === 'in progress' && (
          <div className="inline">
            <button
              type="button"
              onClick={() => props.updateStatus(props.taskId, 'blocked')}
              className="bg-blue-800 hover:bg-blue-700 rounded text-white p-1 mx-3"
            >
              Blocked
            </button>
            <button
              type="button"
              onClick={() => props.updateStatus(props.taskId, 'done')}
              className="bg-yellow-800 hover:bg-yellow-700 rounded text-white p-1"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskItem
