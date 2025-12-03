const base = "px-8 py-2 rounded-md font-medium transition flex flex-row items-center gap-5 font-medium transition";

const variants = { 
    primary: "bg-primary text-white hover:bg-blue-900", 
    secondary: "bg-accent text-white hover:bg-red-400", 
    danger: "bg-red-600 text-white hover:bg-red-700", 
    google: "bg-white text-black hover:bg-gray-100 border border-textgray", 
    facebook: "bg-[#1877F2] text-white hover:bg-[#3e8ff7]", 
    apple: "bg-black text-white hover:bg-gray-800",
    sidebar: "h-16 bg-sidebar text-white hover:bg-[#3650A4] rounded-none", 
    circular: "w-6 h-6 !rounded-full bg-white !px-0 !py-0"
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

