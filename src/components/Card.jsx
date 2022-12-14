import React, { useState } from "react";
import "./text.css";
import Button from "./Button";

export default function Card({ text, children }) {

    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: "white", margin: "2rem"}}>
            <div style={{fontSize: 40, margin: "1rem"}}>{text}</div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
                {children}
            </div>
        </div>
    );
}
