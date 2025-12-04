const variants = {
    primary: "py-2 px-3 rounded border-2 border-textgray text-lg placeholder-black"
}

export default function Dropdown ( {variant = "primary", className = "", options = [], ...props} ) {
    return (
        <select {...props} className={`${variants[variant]} ${className}`}>
        {options.map((opt, index) => (
            <option key={index} value={opt.value}>
            {opt.label}
            </option>
        ))}
        </select>
    );
}