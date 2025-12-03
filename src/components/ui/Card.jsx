function Card( {className = "", ...props} ) {
    return (
        <>
            <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
                <div className="p-6">
                    {props.children}
                </div>
            </div>
        </>
    );
}

export default Card