import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center p-6">
      
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-6">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About Weather App 🌤️
        </h1>

        <p className="text-gray-600 mb-4">
          This Weather App is a simple and user-friendly application built using React.js. 
          It allows users to search for any city and instantly get real-time weather updates.
        </p>

        <p className="text-gray-600 mb-4">
          The app uses a weather API to fetch live data such as temperature, humidity, 
          and weather conditions. It is designed with a clean and modern UI using Tailwind CSS.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Features 🚀
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Search weather by city name</li>
            <li>Real-time temperature updates</li>
            <li>Humidity and weather conditions</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Tech Stack 💻
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Weather API (OpenWeather)</li>
          </ul>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4">
          Version 1.0.0 | Created for learning and practice purposes.
        </p>

      </div>
    </div>
  )
}

export default About