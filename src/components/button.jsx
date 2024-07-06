import React from "react";
import "../components/cardstyle.css"

const Button = (props)=>{
    return(
        <>
        <button className="btn" onClick={props.onClick}>{props.value}</button>
        </>
    )
} 

export default Button