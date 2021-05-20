import React from "react";


export function SourceView(props){
    return (
    <div className={"card articleCard sourceView indexUp" + props.className}></div>
    )
};



export function FullView(props){
    return (
    <div className={"card articleCard sourceView indexDown" + props.className}></div>
    )
}