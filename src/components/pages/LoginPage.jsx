import LoginForm from "../page_segments/login/LoginForm";
import HeroImage from "../../assets/hero_image.jpg"

function LoginPage ( {setCurrentPage}) {
    return (
        <>
            <div className="flex min-h-screen w-screen overflow-auto">
                <LoginForm setCurrentPage={setCurrentPage}/>
                <img
                    src={HeroImage}
                    className="object-cover overflow-hidden hidden md:block"
                />
            </div>

        </>
    );
}

export default LoginPage