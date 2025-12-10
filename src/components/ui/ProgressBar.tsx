interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string | number;
    color?: string;
    className?: string;
}

function ProgressBar( {
    value = "0", 
    color = "bg-primary", 
    className = "", 
    ...props
}: ProgressBarProps ) {
    return (
        <>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} transition-all duration-300`}
                    style={{ width: `${value}%` }}
                />
            </div>
        </>
    );
}

export default ProgressBar