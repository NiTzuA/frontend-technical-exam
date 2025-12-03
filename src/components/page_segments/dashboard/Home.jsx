import Text from "../../ui/Text";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import ProgressBar from "../../ui/ProgressBar";
import { useState, useEffect } from "react";
import updatesDummy from "../../../data/updates.json";
import calculationDummy from "../../../data/calculations.json"
import messageDummy from "../../../data/messages.json"
import regionDummy from "../../../data/regions.json"
import UserIcon from "../../../assets/user_dark.png"
import Analytics from "../../ui/Analytics";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../../calendar.css'
import TaskItem from "../../ui/TaskItem";
import InputField from "../../ui/InputField";


function Home() {

    const [updates, setUpdates] = useState([]);
    const [calculations, setCalculations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [regions, setRegions] = useState([]);
    const [tasks, setTasks] = useState([
        "Check Files",
        "Center Div",
        "Fix Database",
    ])

    const [newTask, setNewTask] = useState("")

    useEffect(() => {
        setCalculations(calculationDummy);
    }, []);

    useEffect(() => {
        setUpdates(updatesDummy);
    }, []);

    useEffect(() => {
        setMessages(messageDummy)
    });

    useEffect(() => {
        setRegions(regionDummy)
    });

    return (
        <>
            <div className="flex flex-col justify-between items-stretch p-8 gap-3 flex-grow h-full overflow-y-auto">
                <div className="flex flex-row">
                    <Text className="text-2xl !text-black">Welcome, Jane Doe!</Text>
                </div>
                <div className="flex flex-col md:flex-row gap-6 flex-grow flex-wrap items-stretch">
                    <div className="flex flex-col gap-3 justify-between flex-[1_1_24rem] min-w-[18rem]">
                        <Card className="flex-grow">
                            <div className="flex flex-col gap-3">
                               <div className="flex flex-row">
                                    <Text className="text-2xl !text-black">To-Do</Text>
                                </div> 
                                {tasks.map((t, i) => (
                                    <TaskItem key={i} task={t} />
                                ))}

                                <InputField 
                                    placeholder="Add a new task..."
                                    type="text"
                                    value={newTask}
                                    onChange={e => setNewTask(e.target.value)}
                                    onKeyDown={e => {
                                    if (e.key === "Enter" && newTask.trim()) {
                                        setTasks([...tasks, newTask])
                                        setNewTask("")
                                        }
                                    }}
                                
                                />
                            </div>
                        </Card>
                        <Card className="">
                            <div className="flex flex-row items-center justify-center">
                                <Calendar />
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-3 justify-between flex-[2_1_28rem] min-w-[22rem]">

                        <Card>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                    <Text>Latest Updates</Text>
                                </div>
                                {updates.map (evt => (
                                    <div key={evt.id} className="flex flex-row gap-5">
                                        <div className="flex-grow text-left">
                                            <Text className="font-normal text-xs">{evt.description}</Text>
                                        </div>

                                        <div className="flex-grow text-right">
                                            <Text className="text-accent">{evt.date}</Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                    <Text>Status</Text>
                                </div>
                                <div className="flex flex-row gap-5 justify-between">
                                    {calculations.map (calc => (
                                    <div key={calc.id} className="flex flex-row gap-3">
                                        <img src={calc.image} className="hidden md:block w-14 h-14"></img>
                                        <div className="flex flex-col justify-start items-start">
                                            <Text className="font-bold">{calc.name}</Text>
                                            <Text className="text-xl !text-accent">{calc.value}</Text>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                        <div className="flex flex-row gap-3 justify-between flex-grow">
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <img src={UserIcon} className="w-12 h-12" />
                                    <div className="flex flex-col gap-0 text-left">
                                        <Text>Active Users</Text>
                                        <Text className="text-4xl">1,234,567</Text>
                                        <Text className="text-xs font-normal !text-primary">5.1% Increase</Text>
                                    </div>
                                    <div className="flex flex-row">
                                        <Text>Stats</Text>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {regions.map (rgn => (
                                        <div key={rgn.map} className="flex flex-row gap-3 items-center justify-between">
                                            <Text className="text-right">{rgn.code}</Text>
                                            <ProgressBar
                                                value={rgn.percentage}
                                                color={rgn.id % 2 === 0 ? "bg-accent" : "bg-primary"}
                                            />
                                            <Text>{rgn.percentage}</Text>
                                        </div>
                                    ))}
                                    </div>
                                    

                                </div>
                            </Card>
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row">
                                        <Text>Unread Messages</Text>
                                    </div>
                                    {messages.map (msg => (
                                        <div key={msg.map} className="flex flex-col gap-5">
                                            <div className="flex flex-row gap-3">
                                                <img src={msg.image} className="w-14 h-14 rounded-full"/>
                                                <Text className="!text-accent">{msg.name}</Text>
                                            </div>
                                            <div className="flex flex-row justify-start items-start text-left">
                                                <Text className="!text-primary text-xs">{msg.message}</Text>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home