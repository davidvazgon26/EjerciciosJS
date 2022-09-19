import React from "react";


function LazyLoader (){

    return(
        <div>
            <img src ={require("../../assets/images/logo192.png")} width="auto" height="250px"/>
        </div>
    )
}

export default LazyLoader;