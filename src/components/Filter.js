import React, {useState} from "react";
const Filter = (props) =>{
    return(
        <div className="filterText">
        <input type="checkbox" onChange={(e)=>props.setChecked(e.target.checked)} placeholder={props.label}/>
        <label>{props.label}</label>
        </div>
    )
}

export default Filter;