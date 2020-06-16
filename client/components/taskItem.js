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
        {props.status === 'blocked' && (
          <button
            type="button"
            onClick={() => props.updateStatus(props.taskId, 'in progress')}
            className="bg-red-800 hover:bg-red-700 rounded text-white p-1 ml-6"
          >
            Blocked
          </button>
        )}
      </div>
      {props.status === 'done' && (
        <span className="flex items-center justify-center ml-6">
          <svg
            className="octicon octicon-rocket"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"
            >
              .
            </path>
          </svg>
        </span>
      )}
    </div>
  )
}

export default TaskItem
