import Text from "../../ui/Text";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";



function Profile( {} ) {

    

    return (
        
        <>
            <div className="bg-background flex-grow flex flex-col">
                <div className="border-2 border-black flex-grow">

                </div>

                <div className="flex flex-row justify-between gap-5 p-6">
                    <Button variant="circular" className="h-20 w-20"></Button>
                    <div className="flex flex-col justify-center items-start">
                        <Text className="!font-bold !text-black text-xl">Jane Doe</Text>
                        <Text className="text-sm">janedoeofficial@gmail.com</Text>
                    </div>
                    <div className="flex-grow"/>
                    <Button variant="secondary" className="my-4">Save</Button>
                    <Button className="my-4">Edit Profile</Button>
                </div>

                <div className="border-2 border-black flex-grow flex flex-row justify-between">
                    <div className="flex flex-col justify-between" >
                        <div className="flex flex-col">
                            <Text>FullName</Text>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                        <div className="flex flex-col">
                            <Text>FullName</Text>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                        <div className="flex flex-col">
                            <Text>FullName</Text>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between" >
                        <div className="flex flex-col">
                            <Text>FullName</Text>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                        <div className="flex flex-col">
                            <Text>FullName</Text>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                        <div className="flex flex-col">
                            <Text>FullName</Text>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                    </div>
                </div>

                <div className="border-2 border-black flex-grow flex flex-col justify-between">
                    <Text>Active Email Addresses</Text>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <Text>janedoeofficial@gmail.com</Text>
                            <Text>Added 1 month ago</Text>
                        </div>
                    </div>
                    <Button>Add Email Address</Button>
                </div>
            </div>
        </>
    );
}

export default Profile
