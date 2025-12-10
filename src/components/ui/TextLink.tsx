const variants = {
    normal: "text-textgray font-medium tracking-wide",
    highlight: "text-primary font-medium tracking-wide"
} as const

type Variant = keyof typeof variants;

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: Variant;
    className?: string;
}


export default function TextLink ( {variant = "normal", className = "", ...props}: TextLinkProps ) {
    return (
        <a
            {...props}
            className = {` ${variants[variant]} ${className}`}
        >
            {props.children}
        </a>
    );
}