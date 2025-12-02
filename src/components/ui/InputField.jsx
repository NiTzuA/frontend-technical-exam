export default function InputField ( {variant = "primary", className = "", ...props} ) {
    return (
        <input
            {...props}
            className = {`${className}`}
        />
    );
}