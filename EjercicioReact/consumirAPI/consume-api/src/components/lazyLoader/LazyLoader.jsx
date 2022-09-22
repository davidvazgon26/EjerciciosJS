import React from "react";


function LazyLoader (){

    return(
        <div>
            <img src ={require("../../assets/images/logo192.png")} width="auto" height="250px" alt="imagen de carga retardada"/>
        </div>
    )
}

export default LazyLoader;


//Como cargar solo los componentes o elementos necesarios.