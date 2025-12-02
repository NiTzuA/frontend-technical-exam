import Button from "../ui/Button";
import Text from "../ui/Text";

function Sidebar() {
    return (
        <>
        
        <div className="flex flex-col bg-sidebar min-h-screen justify-between">
            <div className="flex flex-row bg-logoarea px-5 py-3 gap-1 justify-center items-center h-16">
                <Button className="bg-logoarea px-5">X</Button>
                <Text variant="title" className="text-white text-xl">LOREM IPSUM</Text>
            </div>
            <div className="py-6">

            </div>
            <div className="flex flex-col">
                <Button variant="sidebar" className="text-left">Dashboard</Button>
                <Button variant="sidebar" className="text-left">Profile</Button>
                <Button variant="sidebar" className="text-left">Settings</Button>
            </div>
            <div className="flex-grow">

            </div>
            <div className="flex flex-col">
                <Button variant="sidebar" className="text-left">Logout</Button>
            </div>
        </div>
        
        </>
    );
}

export default Sidebar