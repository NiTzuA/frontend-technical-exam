import HeroImage from "../../../assets/hero_image.jpg"

function IllustrationForm () {
    return (
        <>
            <img src={HeroImage}
                className="object-cover"
            />
        </>
    );
}

export default IllustrationForm