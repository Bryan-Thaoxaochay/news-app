import React from "react";
import { Container } from "../Grid";
import "./style.css";


export function SourceView(props){
    return (
    <div className="card sourceCard sourceView indexUp">
        <Container fluid className="sourceSearch">

            <div data-bs-spy="scroll" data-bs-target="" data-bs-offset="0" class="chScroll" tabindex="0">
                <ArticleList/>
            </div>
        </Container>
    </div>
    )
};

function SourceBtn(props){
    return(
    <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls=""></button>
    )
}

function ArticleList(props){
    return (
        <div className="card articleCard">
            
        </div>
    )
}


function ResultsList(){
    <div className="list-group" id="">

    </div>
}



