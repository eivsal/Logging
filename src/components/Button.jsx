import React  from "react";
import "./button.css";

export default function Button({ clicked, setClicked, text}) {

    const buttonClicked = () => {
        setClicked(prev => !prev);
    }

    return (
    <>
      <button
        className={"text_box start_button start_text "}
        onClick={buttonClicked}
      >
        {clicked ? "Unclick" : text}
      </button>
    </>
  );
}
