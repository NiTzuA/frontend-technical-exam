import { useState } from "react";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Text from "../../ui/Text";
import Toggle from "../../ui/Toggle";

function Settings() {

    const [darkMode, setDarkMode] = useState(false)
    const [compactMode, setCompactMode] = useState(false)
    const [emailNotifs, setEmailNotifs] = useState(false)
    const [pushNotifs, setPushNotifs] = useState(false)
    const [updateAlerts, setUpdateAlerts] = useState(false)
    const [publicProfile, setPublicProfile] = useState(false)
    const [appearOnline, setAppearOnline] = useState(false)


    return (
        <>
            <div className="flex flex-col justify-between overflow-y-auto">
                <div className="flex flex-col p-6 pt-16 gap-4 flex-grow">
                    <div className="flex flex-row">
                        <Text className="text-3xl !text-black">Settings</Text>
                    </div>
                    <Card>
                        
                        {/* FUTURE AUSTIN, YOU COULD LITERALLY TURN ALL THE SETTINGS OBJECTS INTO A SINGLE COMPONENT
                            WRAAHHHHHHHHHHHHHHHHHHHHH
                            understandable since we're running out of time owo
                            or u could've used a list
                            lmao u need more sleep
                        */}

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row">
                                <Text className="text-xs">Appearance Settings</Text>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Dark Mode</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Switch between light and dark themes for a more comfortable viewing experience.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Compact Mode</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Reduce padding and spacing for a denser, more information-focused layout.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={compactMode}
                                    onChange={() => setCompactMode(!compactMode)}
                                />
                            </div>
                        </div>
                    </Card>
                     <Card>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row">
                                <Text className="text-xs">Notification Settings</Text>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Email Notifications</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Receive important updates and alerts through your email.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={emailNotifs}
                                    onChange={() => setEmailNotifs(!emailNotifs)}
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Push Notifications</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Get instant notifications on your device when something requires your attention.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={pushNotifs}
                                    onChange={() => setPushNotifs(!pushNotifs)}
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Update Alerts</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Be notified about new features, improvements, or changes to your account.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={updateAlerts}
                                    onChange={() => setUpdateAlerts(!updateAlerts)}
                                />
                            </div>
                        </div>
                    </Card>
                     <Card>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row">
                                <Text className="text-xs">User Settings</Text>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Public Profile</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Allow others to view your profile information. Disable this to stay private.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={publicProfile}
                                    onChange={() => setPublicProfile(!publicProfile)}
                                />
                            </div>
                            <div className="flex flex-row justify-between items-center gap-5">
                                <div className="flex flex-col justify-center items-start">
                                    <Text className="!text-black text-m">Appear Online</Text>
                                    <Text className="text-left font-normal text-xs">
                                        Show your status as “online” to other users when you’re active.
                                    </Text>
                                </div>

                                <Toggle 
                                    checked={appearOnline}
                                    onChange={() => setAppearOnline(!appearOnline)}
                                />
                            </div>
                        </div>
                    </Card>
                    


                    
                </div>
                <div className="flex flex-col justify-start items-end flex-grow">
                    <div className="flex flex-row py-4 pr-4 items-start gap-4">
                    <Button variant="secondary">Save</Button>
                    <Button>Reset to Defaults</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings
