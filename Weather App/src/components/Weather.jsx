import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const API_URL = import.meta.env.VITE_API_URL
    const API_KEY = import.meta.env.VITE_API_KEY

    async function fetchWeather() {
        try {
            if (!city) {
                alert('Please enter a city name')
                return
            }

            const responces = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await responces.json()
            setWeatherData(data)

        } catch (error) {
            console.error('Error fetching weather data:', error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 p-4">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    🌤️ Check Weather
                </h2>

                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        onClick={fetchWeather}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Search
                    </button>
                </div>

                {weatherData && weatherData.main && (
                    <div className="bg-gray-100 rounded-xl p-4 shadow-inner">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            {weatherData.name}
                        </h3>

                        <p className="text-3xl font-bold text-blue-600">
                            {Math.round(weatherData.main.temp)}°C
                        </p>

                        <p className="text-gray-600 capitalize">
                            {weatherData.weather[0].description}
                        </p>

                        <div className="mt-3 text-sm text-gray-500">
                            Humidity: {weatherData.main.humidity}%
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Weather
