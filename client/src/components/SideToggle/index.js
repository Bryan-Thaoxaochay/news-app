import React from 'react';
import { Row } from "../Grid";
import TimeToggler from "../TimeToggler";
import './style.css';

function SideToggle(props){
    return (
        <Row>
            <div className="card" id="sideBarToggle">
                <TimeToggler/>
            </div>
        </Row>
    )
}
