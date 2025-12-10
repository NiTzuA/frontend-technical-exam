import { SelectHTMLAttributes } from "react";

const variants = {
    primary: "py-2 px-3 rounded border-2 border-textgray text-lg placeholder-black"
} as const;

type Variant = keyof typeof variants;

type Option = {
    value: string;
    label: string;
    
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    variant?: Variant;
    className?: string;
    options?: Option[];
}

export default function Dropdown ( {
    variant = "primary", 
    className = "", 
    options = [], 
    ...props
}: DropdownProps ) {
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