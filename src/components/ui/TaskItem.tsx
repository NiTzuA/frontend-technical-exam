import Card from "./Card"
import Text from "./Text";
import { useState } from "react";

interface TaskItemProps {
    task?: string;
}

function TaskItem( {task = "", ...props}: TaskItemProps ) {

    const [checked, setChecked] = useState(false);
    if (checked) return null;

    return (
        <>
            <Card>
                <div className="flex flex-row justify-between items-center"> 
                    <Text>{task}</Text>
                    <input type="checkbox"
                        className="h-5 w-5 accent-primary"
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                </div>
                
            </Card>
        </>
    );
}

export default TaskItem