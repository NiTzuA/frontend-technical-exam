import LoginForm from "../page_segments/login/LoginForm";
import HeroImage from "../../assets/hero_image.jpg"

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