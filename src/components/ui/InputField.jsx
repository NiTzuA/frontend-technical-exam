const variants = {
    primary: "py-2 px-3 rounded border-2 border-textgray text-lg placeholder-black"
}

export default function InputField ( {variant = "primary", className = "", ...props} ) {
    return (
        <input
            {...props}
            className = {`${variants[variant]} ${className}`}
        />
    );
}