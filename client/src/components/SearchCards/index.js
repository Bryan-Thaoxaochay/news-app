import React from "react";
import { Container } from "../Grid";
import "./style.css";

//data-bs-target is listgroup's ID
export function SourceView(props){
    return (
    <div className="card sourceCard sourceView indexUp">
        <Container fluid content className="sourceSearch">
            <ResultsList/>
            <div data-bs-spy="scroll" data-bs-target="" data-bs-offset="0" class="chScroll" tabindex="0">
                <ArticleList/>
            </div>
        </Container>
    </div>
    )
};

//ID of articles should depend on info being passed in
function ArticleList(props){
    return (
    <div className="card articleCard" id="">

    </div>
    )
}


function ResultsList(){
    return (
    <div className="list-group" id="">
        
    </div>
    )
}



