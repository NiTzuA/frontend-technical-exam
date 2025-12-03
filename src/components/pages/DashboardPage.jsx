import Sidebar from '../layout/Sidebar.jsx'
import Navbar from '../layout/Navbar.jsx'
import Card from '../ui/Card.jsx'
import Profile from '../page_segments/dashboard/Profile.jsx'
import Home from '../page_segments/dashboard/Home.jsx'
import Settings from '../page_segments/dashboard/Settings.jsx'

import { useState } from 'react'
import { useEffect } from 'react'



function DashboardPage( {setCurrentPage} ) {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [dashboardPage, setDashboardPage] = useState("home");

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
      <div className={`flex w-full ${isSmallScreen ? "flex-col-reverse min-h-screen" : "flex-row h-screen"}`}>

          <Sidebar 
            isMaximized={isSidebarOpen}
            setIsMaximized={setIsSidebarOpen}
            setDashboardPage={setDashboardPage}
            setCurrentPage={setCurrentPage}
            isSmallScreen={isSmallScreen}
            className={`${
              isSmallScreen && isSidebarOpen ? "flex-grow" : ""
            }`}
          />

        {!isSmallScreen || !isSidebarOpen ? (
            <div className="flex-grow flex flex-col">
                <div className="shrink-0 sticky top-0 z-40 bg-logoarea">
                <Navbar />
                </div>

                <div className={`flex-grow overflow-y-auto ${isSmallScreen ? "pb-16" : ""}`}>
                {dashboardPage === "home" && <Home />}
                {dashboardPage === "profile" && <Profile />}
                {dashboardPage === "settings" && <Settings />}
                </div>
            
            </div>
        ) : null}
      </div>

      
    </>
  )
}

export default DashboardPage
