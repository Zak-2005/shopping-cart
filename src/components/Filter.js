import React, {useState} from "react";
const Filter = (props) =>{
    return(
        <div>
        <input type="checkbox" onChange={(e)=>props.setChecked(e.target.checked)}/>
        <label>{props.label}</label>
        </div>
    )
}

export default Filter;