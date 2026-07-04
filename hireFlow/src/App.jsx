import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
import LoginPage from './pages/LoginPage'
import RoleSection from './pages/RoleSection'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/loadingpage" element={<LoadingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/rolesection" element={<RoleSection />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App