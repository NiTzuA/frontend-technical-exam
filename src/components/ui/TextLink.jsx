const variants = {
    normal: "text-textgray font-medium tracking-wide",
    highlight: "text-primary font-medium tracking-wide"
} 


export default function TextLink ( {variant = "normal", className = "", ...props} ) {
    return (
        <a
            {...props}
            className = {` ${variants[variant]} ${className}`}
        >
            {props.children}
        </a>
    );
}