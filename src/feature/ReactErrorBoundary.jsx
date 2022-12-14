import React, {useState, useEffect} from "react";


import {ErrorBoundary} from 'react-error-boundary'
import WindowError from "./WindowError";
import Text from "../components/Text";
import Card from "../components/Card";
import ReactErrorBoundaryHook from "./ReactErrorBoundaryHook";


export default function ReactErrorBoundary() {
    function ErrorFallback({error, resetErrorBoundary}) {
        return (
            <Card text={"Failure"}>
                <div style={{width: "min-content"}}>
                    <button onClick={resetErrorBoundary}> Reset system</button>
                </div>
                <Text style={{alignSelf: "left"}} text={error.message}/>
            </Card>

        )
    }

    return(
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
        >
             <WindowError header={"Error Boundary"}/>
            <ReactErrorBoundaryHook/>
        </ErrorBoundary>
    )


}
