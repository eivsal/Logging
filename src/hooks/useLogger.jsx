import {useEffect, useState} from "react";


export default function useLogger(logDestination){
    const [logMessage, setLogMessage] = useState(null);

    useEffect(() => {
        if(logMessage != null){
            console.log("I NEEEEED THIS")
            console.log(logMessage)

            // Simple POST request with a JSON body using fetch
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ title: 'React POST Request Example' })
            // };
            // fetch("http://localhost:8080"+logDestination, requestOptions)
            //     .then(response => response.json())
            //     .then(data => console.log(data));
        }
    }, [logMessage, logDestination])

    return setLogMessage;
}