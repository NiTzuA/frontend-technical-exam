const variants = {
    normal: "text-textgray font-medium tracking-wide",
    title: "text-primary font-bold tracking-wide ",

} // Predefined variants which I will set later

export default function Text ( {variant = "normal", className = "", ...props} ) {
    return (
        <p
            {...props}
            className = {`${variants[variant]} ${className}`}
        >
            {props.children}
        </p>
    );
}