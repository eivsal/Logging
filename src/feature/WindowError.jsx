import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Card from "../components/Card";

export default function WindowError({header}) {
    const [kindButtonClicked, setKindButtonClicked] = useState(false);
    const [evilButtonClicked, setEvilButtonClicked] = useState(false);
    const [text, setText] = useState("");

    // window.addEventListener("error", (event) => {
    //     setText(`${event.type}: ${event.message}\n`)
    //     errorHandler(event);
    //     console.log(console.log.length);
    // });

    useEffect(() => {
        if(kindButtonClicked){
            console.log("Kind click to console")
            console.log(console.logs.length)
        }

        if (evilButtonClicked) {
            const badCode = "const s;";
            throw new Error("something is bad")
            //eval(badCode);
        }

    }, [evilButtonClicked, kindButtonClicked])

    useEffect(() => {
        if(console.logs.length > 0){
            let string = "";
            console.logs.forEach(el => string += el)
            setText(string)
        }
    }, [console.logs.length])


    return (
            <Card text={header? header : "Classic javascript"} >
                <div style={{width: "min-content"}}>
                    <Button clicked={kindButtonClicked} setClicked={setKindButtonClicked} text={"Kind"}/>
                    <Button clicked={evilButtonClicked} setClicked={setEvilButtonClicked} text={"Evil"}/>
                </div>
                <Text style={{alignSelf: "left"}} text={text}/>
            </Card>

    )
}