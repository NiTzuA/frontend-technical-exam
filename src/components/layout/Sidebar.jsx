import Button from "../ui/Button";
import Text from "../ui/Text";
import BurgerIcon from "../../assets/menu.png"
import DashboardIcon from "../../assets/home.png"
import ProfileIcon from "../../assets/user.png"
import SettingsIcon from "../../assets/settings.png"
import LogoutIcon from "../../assets/logout.png"

function Sidebar( {isSmallScreen, isMaximized, setIsMaximized, className, setDashboardPage, setCurrentPage} ) {
    return (
        <>

            <div
                className={`
                    bg-sidebar shrink-0
                    ${className}
                    ${isSmallScreen
                    ? "fixed bottom-0 left-0 w-full h-16 flex flex-row justify-around items-center z-50"
                    : "flex flex-col bg-sidebar min-h-screen justify-between h-full shrink-0"}
                `}
                >
                {!isSmallScreen && (
                    <div className="flex flex-row bg-logoarea pl-5 pr-5 py-3 gap-5 justify-center items-center h-16">
                        <Button 
                        className="bg-transparent hover:bg-transparent !px-2" 
                        img={BurgerIcon} 
                        imgWidth="30px" 
                        imgHeight="30px"
                        onClick={() => setIsMaximized(prev => !prev)}
                        />

                        {isMaximized && (
                        <Text 
                            variant="title" 
                            className="text-white text-2xl tracking-wider"
                        >
                            LOREM IPSUM
                        </Text>
                        )}
                    </div>
                )}

            <div className="py-6">

            </div>
            <div className={`flex ${isSmallScreen ? "flex-row" : "flex-col"}`}>

                <Button variant="sidebar" className="text-left" img={DashboardIcon} imgWidth="30px" imgHeight="30px" onClick={() => setDashboardPage("home")}>{isMaximized && "Dashboard"}</Button>
                <Button variant="sidebar" className="text-left" img={ProfileIcon} imgWidth="30px" imgHeight="30px" onClick={() => setDashboardPage("profile")}>{isMaximized && "Profile"}</Button>
                <Button variant="sidebar" className="text-left" img={SettingsIcon} imgWidth="30px" imgHeight="30px" onClick={() => setDashboardPage("settings")}>{isMaximized && "Settings"}</Button>
            </div>
            <div className="flex-grow">

            </div>
            <div className="flex flex-col py-3">
                <Button variant="sidebar" className="text-left" img={LogoutIcon} imgWidth="30px" imgHeight="30px" onClick={() => setCurrentPage("login")}>{isMaximized && "Logout"}</Button>
            </div>
        </div>
        
        </>
    );
}

export default Sidebar