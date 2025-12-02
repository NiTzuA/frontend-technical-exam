import LoginForm from "../login/LoginForm";
import IllustrationForm from "../login/IllustrationForm";
import HeroImage from "../../../assets/hero_image.jpg"
import Button from "../../ui/Button";

function LoginPage () {
    return (
        <>
            <div className="flex min-h-screen w-screen overflow-auto">
                <LoginForm />
                <img
                    src={HeroImage}
                    className="object-cover overflow-hidden hidden md:block"
                />
            </div>

        </>
    );
}

export default LoginPage