import Text from "../../ui/Text";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { useState, useEffect } from "react";
import updatesDummy from "../../../data/updates.json";
import calculationDummy from "../../../data/calculations.json"


function Home() {

    const [updates, setUpdates] = useState([]);
    const [calculations, setCalculations] = useState([]);

    useEffect(() => {
        setCalculations(calculationDummy);
    }, []);

    useEffect(() => {
        setUpdates(updatesDummy);
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
                                        <img src={calc.image} className="w-14 h-14"></img>
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