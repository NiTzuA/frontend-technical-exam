import Text from "../../ui/Text";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import HeroImage from "../../../assets/hero_image.jpg"



function Profile( {} ) {

    

    return (
        
        <>
            <div className="flex-grow flex flex-col overflow-y-auto">
                <div className="">
                    <img
                    src={HeroImage}
                    className="w-full h-48 object-cover"
                    />
                </div>

                <div className="flex flex-row justify-between gap-5 p-6 flex-wrap">
                    <Button variant="circular" className="h-20 w-20"></Button>
                    <div className="flex flex-col justify-center items-start">
                        <Text className="!font-bold !text-black text-xl">Jane Doe</Text>
                        <Text className="text-sm">janedoeofficial@gmail.com</Text>
                    </div>
                    <div className="flex-grow"/>
                    <Button variant="secondary" className="my-4">Save</Button>
                    <Button className="my-4">Edit Profile</Button>
                </div>

                <div className="flex flex-row justify-between flex-wrap">

                    <div className="flex flex-col justify-between gap-6 p-6 flex-grow" >
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Full Name</Text>
                            </div>
                            <InputField type="text" placeholder="Your Full Name"></InputField>
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Gender</Text>
                            </div>
                            <InputField type="text" placeholder="Select Gender"></InputField>
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Language</Text>
                            </div>
                            <InputField type="text" placeholder="Select Main Language"></InputField>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-6 p-6 flex-grow" >
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Username</Text>
                            </div>
                            <InputField type="text" placeholder="Preferred Username"></InputField>
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Country</Text>
                            </div>
                            <InputField type="text" placeholder="Select Country"></InputField>
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Timezone</Text>
                            </div>
                            <InputField type="text" placeholder="Select Time Zone"></InputField>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-between p-6 items-start gap-3">
                    <Text className="!text-black">Active Email Addresses</Text>
                    <div className="flex flex-row gap-3 pb-1">
                        <Button></Button>
                        <div className="flex flex-col items-start">
                            <Text className="!text-black text-sm">janedoeofficial@gmail.com</Text>
                            <Text className="text-xs">Added 1 month ago</Text>
                        </div>
                    </div>
                    <Button>Add Email Address</Button>
                    <div className="p-5"/>
                </div>
            </div>
        </>
    );
}

export default Profile
