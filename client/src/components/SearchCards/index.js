import React from "react";
import { Container } from "../Grid";
import "./style.css";


export function SourceView(props){
    return (
    <div className={"card articleCard sourceView indexUp" + props.className}>
        <Container fluid className="sourceSearch">
            <div className="list-group" id="">
                
            </div>
            <div data-bs-spy="scroll" data-bs-target="" data-bs-offset="0" class="chScroll" tabindex="0">
                <SourceBtn/>
                <SourceCollapse>

                </SourceCollapse>
            </div>
        </Container>
    </div>
    )
};

function SourceBtn(props){
    return(
    <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls=""></button>
    )
}

function SourceCollapse(props){
    return (
    <div class="collapse" id="">
        <div class="card card-body">
        </div>
    </div>
    )
}


export function FullView(props){
    return (
    <div className={"card articleCard fullView indexDown" + props.className}>
       
    </div>
    )
}



