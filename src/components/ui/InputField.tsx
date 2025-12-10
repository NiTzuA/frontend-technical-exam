const variants = {
    primary: "py-2 px-3 rounded border-2 border-textgray text-lg placeholder-black"
} as const;

type Variant = keyof typeof variants;

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variants?: Variant;
    className?: string;
}

export default function InputField ( {
    variant = "primary", 
    className = "", 
    ...props
}: InputFieldProps ) {
    return (
        <input
            {...props}
            className = {`${variants[variant]} ${className}`}
        />
    );
}