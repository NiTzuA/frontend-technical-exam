import './App.css'
import DashboardPage from './components/pages/DashboardPage'
import LoginPage from './components/pages/LoginPage'
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState("login")

  return (
    <>
    {currentPage === "login" && <LoginPage setCurrentPage={setCurrentPage} />}
    {currentPage === "dashboard" && <DashboardPage setCurrentPage={setCurrentPage}/>}
    </>
  )
}

export default App
