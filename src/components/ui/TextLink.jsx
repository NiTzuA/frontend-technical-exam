export default function TextLink ( {className = "", ...props} ) {
    return (
        <a
            {...props}
            className = {`$className`}
        >
            {props.children}
        </a>
    );
}