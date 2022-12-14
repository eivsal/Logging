import React  from "react";
import "./text.css";

export default function Text({ text }) {

    return (
        <>
            <div className={"text_field"}>
                {text}
            </div>
        </>
    );
}
