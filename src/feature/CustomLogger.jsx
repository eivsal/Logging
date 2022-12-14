import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Card from "../components/Card";
import logger from "../utils/logger";

export default function CustomLogger() {
    const [kindButtonClicked, setKindButtonClicked] = useState(false);
    const [evilButtonClicked, setEvilButtonClicked] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        if(kindButtonClicked){
            let string = logger("info", "This is some important info")
            setText(prevState => prevState += string)
        }
        if(evilButtonClicked){
            let string = logger("error", "An error was sent for analysis")
            setText(prevState => prevState += string)
        }
    }, [kindButtonClicked, evilButtonClicked])



    return (
        <Card text={"Custom logger"} >
            <div style={{width: "min-content"}}>
                <Button clicked={kindButtonClicked} setClicked={setKindButtonClicked} text={"Info"}/>
                <Button clicked={evilButtonClicked} setClicked={setEvilButtonClicked} text={"Error"}/>
            </div>
            <Text style={{alignSelf: "left"}} text={text}/>
        </Card>

    )
}