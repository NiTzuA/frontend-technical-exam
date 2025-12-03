import InputField from "../ui/InputField";
import Button from "../ui/Button";
import Text from "../ui/Text";

function Navbar() {
    return (
        <>
            <div className="bg-navbar h-16 flex flex-row py-3 px-10 items-center flex-grow">
                <InputField type="search" placeholder="Search" 
                className="basis-64 shrink placeholder:text-sm text-sm rounded-full py-1"></InputField>

                <div className="flex-grow px-5"/>
                <Text className="text-white px-3 hidden sm:block">Hi, Jane Doe!</Text>
                <Button variant="circular" className="shrink-0"></Button> 
            </div>
        </>
    );
}

export default Navbar