import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About This App
        </h1>

        <p className="text-gray-600 mb-4 leading-relaxed">
          This Todo List App is a simple practice project built using React. 
          It helps users manage daily tasks by allowing them to add, edit, 
          and delete tasks easily.
        </p>

        <p className="text-gray-600 mb-4 leading-relaxed">
          The main purpose of this project is to improve understanding of 
          React concepts like state management, event handling, and component structure.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          This is not an official product — it is created for learning and 
          practicing frontend development skills.
        </p>

        {/* Features */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Add tasks</li>
            <li>Edit tasks</li>
            <li>Delete tasks</li>
            <li>Simple and clean UI</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Technologies Used
          </h2>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
              React
            </span>
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About