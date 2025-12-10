import InputField from "../../ui/InputField";
import Text from "../../ui/Text";
import TextLink from "../../ui/TextLink";
import Button from "../../ui/Button";
import Toast from "../../layout/Toasts";
import FacebookIcon from "../../../assets/facebook_icon.png";
import GoogleIcon from "../../../assets/google_icon.png";
import AppleIcon from "../../../assets/apple_icon.png";
import RightArrow from "../../../assets/right_arrow.png"
import { useState } from "react";

function LoginForm ( {setCurrentPage} ) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending:", {
            UserName: username,
            Password: password
        });

        try {
            const res = await fetch("https://localhost:7275/Login/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    UserName: username,
                    Password: password
                }),
            });

            console.log("Status code:", res.status);

            const text = await res.text();
            console.log("Raw response:", text);

            const data = text ? JSON.parse(text) : null;
            console.log("Parsed:", data);

            if (data?.Status?.Message === "Login successful") {
                setCurrentPage("dashboard");
            } else {
                setShowToast(true);
                setToastMessage("Incorrect Username or Password");
            }

        } catch (err) {
            console.error("ERROR:", err);
            setShowToast(true);
            setToastMessage("Server error");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col justify-between min-h-screen items-stretch flex-1
                px-6 sm:px-12 md:px-24">
                <div className="flex flex-col gap-6 md:gap-16 py-6">
                    <div className="mt-24">
                        <Text variant="title" className="text-5xl">LOREM IPSUM</Text>
                        <Text variant="title" className="text-5xl">COMPANY</Text>
                    </div>

                    <Text className="text-[#626262]">Login with Username</Text>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <InputField placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)}></InputField>
                            <InputField placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></InputField>
                        </div>
                        
                        <div className="flex flex-row-reverse">
                            <TextLink className="text-textgray text-xs font-normal tracking-wider" href="">Forgot your password?</TextLink>
                        </div>
                        
                    </div>
                </div>
                
                
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center">
                        <Button variant="primary" img={RightArrow}  imgWidth="30px" imgHeight="30px" type="submit"></Button>
                    </div>

                    <div className="bg-black mx-24 h-[1px]"/>

                    <div className="flex flex-col gap-3 items-center">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                            <Button variant="facebook" img={FacebookIcon} imgWidth="30px" imgHeight="30px" onClick={() => setCurrentPage("dashboard")}> </Button>
                            <Button variant="google" img={GoogleIcon} imgWidth="30px" imgHeight="30px" onClick={() => setCurrentPage("dashboard")}> </Button>
                            <Button variant="apple" img={AppleIcon} imgWidth="30px" imgHeight="30px" onClick={() => setCurrentPage("dashboard")}> </Button>
                        </div>

                        <div className="flex flex-row gap-1">
                            <Text className="text-textgray text-xs font-normal tracking-wider">Don't have an account?</Text>
                            <TextLink variant="highlight" className="text-primary text-xs font-normal tracking-wider" href="">Register Now</TextLink>
                        </div>
                    </div>
                </div>
                

                <div className="bg-accent p-1 -mx-6 mt-6 sm:-mx-12 md:-mx-24" />
            </form>

            <Toast
                show={showToast}
                message={toastMessage}
                onClose={() => setShowToast(false)}
            />

        </>
    );
}

export default LoginForm