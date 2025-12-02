const base = "px-8 py-2 rounded-md font-medium transition";

const variants = { 
    primary: "bg-primary text-white hover:bg-blue-900", 
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300", 
    danger: "bg-red-600 text-white hover:bg-red-700", 
    google: "bg-white text-black hover:bg-gray-100 border border-textgray", 
    facebook: "bg-[#1877F2] text-white hover:bg-[#3e8ff7]", 
    apple: "bg-black text-white hover:bg-gray-800", 
};

export default function Button ( {variant = "primary", className = "", img, imgWidth, imgHeight, ...props} ) {
    return (
        <button
            {...props}
            className = {`${base} ${variants[variant]} ${className}`}
        >
            {img && (
                <img
                src={img}
                style={{ width: imgWidth, height: imgHeight }}
                className="object-contain"
                />
            )}
            {props.children}
        </button>
    );
}

