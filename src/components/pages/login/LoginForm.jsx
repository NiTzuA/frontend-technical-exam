import InputField from "../../ui/InputField";
import TextLink from "../../ui/TextLink";
import Button from "../../ui/Button";
import FacebookIcon from "../../../assets/facebook_icon.png";
import GoogleIcon from "../../../assets/google_icon.png";
import AppleIcon from "../../../assets/apple_icon.png";
import RightArrow from "../../../assets/right_arrow.png"

function LoginForm () {
    return (
        <>
            <Button variant="primary" img={`${RightArrow}`}  imgWidth="20px" imgHeight="20px"></Button>
            <Button variant="facebook" img={`${FacebookIcon}`} imgWidth="20px" imgHeight="20px"> </Button>
            <Button variant="google" img={`${GoogleIcon}`} imgWidth="20px" imgHeight="20px"> </Button>
            <Button variant="apple" img={`${AppleIcon}`} imgWidth="20px" imgHeight="20px"> </Button>
        </>
    );
}

export default LoginForm