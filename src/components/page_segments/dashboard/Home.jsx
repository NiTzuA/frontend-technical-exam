import Text from "../../ui/Text";
import Card from "../../ui/Card";
import { useState, useEffect } from "react";
import updatesDummy from "../../../data/updates.json";

function Home() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(updatesDummy);
    }, []);

    return (
        <>
            <div className="flex flex-col justsify-between items-stretch p-8 gap-3 flex-grow">
                <div className="flex flex-row">
                    <Text>Welcome, Jane Doe!</Text>
                </div>
                <div className="flex flex-row gap-3 justify-between flex-grow">
                    <div className="flex flex-col gap-3 flex-grow justify-between">
                        <Card className="flex-grow">
                            <div>
                                
                            </div>
                        </Card>
                        <Card className="flex-grow">

                        </Card>
                    </div>
                    <div className="flex flex-col gap-3 flex-grow justify-between">
                        <Card>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row">
                                    <Text>Latest Updates</Text>
                                </div>
                                {events.map (evt => (
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

                        </Card>
                        <div className="flex flex-row gap-3 justify-between flex-grow">
                            <Card className="flex-grow">

                            </Card>
                            <Card className="flex-grow">

                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home