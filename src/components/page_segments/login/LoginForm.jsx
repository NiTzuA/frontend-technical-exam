import InputField from "../../ui/InputField";
import Text from "../../ui/Text";
import TextLink from "../../ui/TextLink";
import Button from "../../ui/Button";
import FacebookIcon from "../../../assets/facebook_icon.png";
import GoogleIcon from "../../../assets/google_icon.png";
import AppleIcon from "../../../assets/apple_icon.png";
import RightArrow from "../../../assets/right_arrow.png"

function LoginForm ( {setCurrentPage} ) {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen items-stretch flex-1
                px-6 sm:px-12 md:px-24">
                <div className="flex flex-col gap-6 md:gap-16 py-6">
                    <div className="mt-24">
                        <Text variant="title" className="text-5xl">LOREM IPSUM</Text>
                        <Text variant="title" className="text-5xl">COMPANY</Text>
                    </div>

                    <Text className="text-[#626262]">Login with Email</Text>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <InputField placeholder="Email" type="email"></InputField>
                            <InputField placeholder="Password" type="password"></InputField>
                        </div>
                        
                        <div className="flex flex-row-reverse">
                            <TextLink className="text-textgray text-xs font-normal tracking-wider" href="">Forgot your password?</TextLink>
                        </div>
                        
                    </div>
                </div>
                
                
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center">
                        <Button variant="primary" img={RightArrow}  imgWidth="30px" imgHeight="30px" onClick={() => setCurrentPage("dashboard")}></Button>
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
            </div>

            

        </>
    );
}

export default LoginForm