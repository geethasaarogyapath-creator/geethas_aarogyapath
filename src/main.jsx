import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} />
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>
)
