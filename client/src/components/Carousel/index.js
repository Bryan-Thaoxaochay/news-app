import React from "react";
import {SourceView, FullView} from "../SearchCards";
import './style.css';

function Carousel(props){
    return (
    <div className={"carousel slide" + props.className} id="newsCarousel" data-interval="false">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <SourceView></SourceView>
            </div>
            <div class="carousel-item">
                <SourceView></SourceView>

            </div>
            <div class="carousel-item">
                <SourceView></SourceView>
            </div>
        </div>
        <button class="carousel-control-prev carBtn" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button class="carousel-control-next carBtn" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
    )
};



export default Carousel;