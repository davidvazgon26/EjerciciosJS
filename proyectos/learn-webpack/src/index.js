//cambiamos a React

import React from 'react';
import {render} from 'react-dom';
import './style.css'

const Greting = () => {
    return(
        <div>
            <h1> Hello from React</h1>
            <div id='image'></div>
        </div>
    )
}


render(
    <Greting/>, document.getElementById('target')
)


// con jquery

/*

const $ = require("jquery");

$("#target").html("hello world desde jquery!!");

*/