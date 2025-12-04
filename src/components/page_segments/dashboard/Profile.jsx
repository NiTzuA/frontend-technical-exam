import Text from "../../ui/Text";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import HeroImage from "../../../assets/hero_image.jpg"
import ProfileImg from "../../../assets/user_dark.png"
import StarImg from "../../../assets/star.png"
import Dropdown from "../../ui/Dropdown";
import Languages from "../../../data/languages.json"
import Genders from "../../../data/genders.json"
import Countries from "../../../data/countries.json"
import Timezones from "../../../data/timezones.json"
import Toast from "../../layout/Toasts";
import { useState } from "react";


function Profile( {} ) {

    const [isDisabled, setIsDisabled] = useState(true)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

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
                    <img src={ProfileImg} className="rounded-full h-20 w-20 border-2"/>
                    <div className="flex flex-col justify-center items-start">
                        <Text className="!font-bold !text-black text-xl">Jane Doe</Text>
                        <Text className="text-sm">janedoeofficial@gmail.com</Text>
                    </div>
                    <div className="flex-grow"/>
                    <Button variant="secondary" className="my-4" 
                        onClick={() => {
                            setIsDisabled(true)
                            setToastMessage("Profile saved successfully")
                            setShowToast(true)
                        }}
                    >Save</Button>
                    <Button className="my-4" onClick={() => setIsDisabled(false)}>Edit Profile</Button>
                </div>

                <div className="flex flex-row justify-between flex-wrap">

                    <div className="flex flex-col justify-between gap-6 p-6 flex-grow" >
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Full Name</Text>
                            </div>
                            <InputField type="text" placeholder="Your Full Name" value="Jane Doe" disabled={isDisabled}></InputField>
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Gender</Text>
                            </div>
                            <Dropdown
                                options={Genders}
                                defaultValue="male"
                                disabled={isDisabled}
                            />
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Language</Text>
                            </div>
                            <Dropdown
                                options={Languages}
                                defaultValue="en"
                                disabled={isDisabled}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-6 p-6 flex-grow" >
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Username</Text>
                            </div>
                            <InputField type="text" placeholder="Preferred Username" value="JaneyDoverman" disabled={isDisabled}></InputField>
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Country</Text>
                            </div>
                            <Dropdown
                                options={Countries}
                                defaultValue="ph"
                                disabled={isDisabled}
                            />
                        </div>
                        <div className="flex flex-col items-stretch gap-1">
                            <div className="flex flex-row">
                                <Text className="!text-black">Timezone</Text>
                            </div>
                            <Dropdown
                                options={Timezones}
                                defaultValue="Asia/Manila"
                                disabled={isDisabled}
                            />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-between p-6 items-start gap-3">
                    <Text className="!text-black">Active Email Addresses</Text>
                    <div className="flex flex-row gap-3 pb-1">
                        <img src={StarImg} className="w-10 h-10"></img>
                        <div className="flex flex-col items-start">
                            <Text className="!text-black text-sm">janedoeofficial@gmail.com</Text>
                            <Text className="text-xs">Added 1 month ago</Text>
                        </div>
                    </div>
                    <Button>Add Email Address</Button>
                    <div className="p-5"/>
                </div>
            </div>

            <Toast
                show={showToast}
                message={toastMessage}
                onClose={() => setShowToast(false)}
                />

        </>
    );
}

export default Profile
