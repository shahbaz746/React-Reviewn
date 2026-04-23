import React, { useState } from 'react'

const Todo = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        return saved ? JSON.parse(saved) : [] // Load if exists, else empty array
    })

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const addTasks = () => {
    if (task.trim() === '') return
    const newTasks = [...tasks, task]
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks)) // Save to localStorage
    setTask('')
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks)) // Save to localStorage
  }

  const handleEdit = (index) => {
    const newTask = prompt('Edit Task', tasks[index])
    if (newTask) {
      const newTasks = [...tasks]
      newTasks[index] = newTask
      setTasks(newTasks)
      localStorage.setItem('tasks', JSON.stringify(newTasks)) // Save to localStorage
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Remember Your Tasks
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="Add your task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onKeyDown={(e) => e.key === 'Enter' && addTasks()}
          />
          <button
            onClick={addTasks}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="text-gray-700">{t}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded-md hover:bg-yellow-500 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            No tasks yet...
          </p>
        )}
      </div>

    </div>
  )
}

export default Todo