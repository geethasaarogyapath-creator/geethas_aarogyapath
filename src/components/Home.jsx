import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  const nav = useNavigate()

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-200 flex flex-col items-center justify-center px-6">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
          Welcome to <span className="text-indigo-600">Geetha's Aarogyapath</span>
        </h1>

        <img
          src="https://res.cloudinary.com/dgvzeqveu/image/upload/v1768581453/Screenshot_2026-01-15_215539_mzrgnb.png"
          alt="Aarogyapath"
          className="w-full max-w-md rounded-3xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
        />

        <p className="text-gray-600 text-lg text-center max-w-xl mb-8">
          A modern healthcare platform built with React and Tailwind CSS, designed for speed, beauty, and responsiveness.
        </p>

        <button
          onClick={() => nav('/register')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all"
        >
          Register Now
        </button>

      </div>
    </>
  )
}

export default Home
