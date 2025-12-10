interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className? : string;
}

function Card( {
    className = "", 
    ...props}
: CardProps ) {
    return (
        <>
            <div {...props} className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
                <div className="p-6">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Card