import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'
import '../assets/scss/task-list.scss'

const Category = (props) => {
  // через пропсы принимаем categoryList
  const [newCategory, setNewCategory] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${newCategory}`)
    }
  }

  return (
    <div>
      <p className="text-2xl font-semibold text-center mb-5">List of categories</p>
      {props.categoryList.map((el) => (
        <div className="border-b border-green-300 bg-green-100 py-2 flex">
          <span className="flex items-center justify-center mr-3">
            <svg
              className="octicon octicon-git-commit"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"
              >
                .
              </path>
            </svg>
          </span>
          <span className="text-lg font-mono">
            <Link to={`/${el}`}>{el}</Link>
          </span>
        </div>
      ))}
      <input
        type="text"
        onChange={(e) => setNewCategory(e.target.value)}
        onKeyDown={handleSearch}
        value={newCategory}
        className="item_input bg-green-200 border border-green-500 rounded text-black p-2 mr-3 mt-4"
        placeholder="New category"
      />
      <button
        type="button"
        onClick={() => history.push(`/${newCategory}`)}
        className="item_button bg-green-700 hover:bg-green-500 rounded text-white p-2"
      >
        Add
      </button>
    </div>
  )
}

export default Category
