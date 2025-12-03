import './App.css'
import LoginPage from './components/pages/LoginPage'
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar.jsx'
import { useState } from 'react'
import { useEffect } from 'react'



function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
        setIsSidebarOpen(false);
      } else {
        setIsSmallScreen(false);
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-row w-full h-screen">
          <Sidebar 
            isSmallScreen={isSmallScreen}
            isMaximized={isSidebarOpen}
            setIsMaximized={setIsSidebarOpen}
            className={`${
              isSmallScreen && isSidebarOpen ? "flex-grow" : ""
            }`}
          />

        {!isSmallScreen || !isSidebarOpen ? (
          <Navbar />
        ) : null}
      </div>

      
    </>
  )
}

export default App
