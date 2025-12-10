const variants = {
    normal: "text-textgray font-medium tracking-wide",
    title: "text-primary font-bold tracking-wide ",
} as const;

type Variant = keyof typeof variants;

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: Variant;
    className?: string;
}

export default function Text ( {
    variant = "normal", 
    className = "", 
    ...props
}: TextProps ) {
    return (
        <p
            {...props}
            className = {`${variants[variant]} ${className}`}
        >
            {props.children}
        </p>
    );
}