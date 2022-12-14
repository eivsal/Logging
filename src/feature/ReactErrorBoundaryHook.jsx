import logger from "../utils/logger";
import Card from "../components/Card";
import Button from "../components/Button";
import Text from "../components/Text";
import {useEffect, useState} from "react";
import {useErrorHandler} from "react-error-boundary";

export default function ReactErrorBoundaryHook(){

    const [kindApiButton, setKindApiButton] = useState(false);
    const [text, setText] = useState("");
    const handleError = useErrorHandler()

    useEffect(() => {
        if(kindApiButton){
            try {
                throw new Error("This is a error")
            }catch(err) {
                setText("This function should fail...")
                //handleError(err)
            }
        }

    }, [kindApiButton])



    return (

        <Card text={"ErrorBoundary (Hook)"} >
            <div style={{width: "min-content"}}>
                <Button clicked={kindApiButton} setClicked={setKindApiButton} text={"API"}/>
            </div>
            <Text style={{alignSelf: "left"}} text={text}/>
        </Card>

    )
}