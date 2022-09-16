import React from "react";

//components
import CatsList from "./CatsList";

class TipoClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
            <h4>Hi from ClassType</h4>
            <h3>This is your Cat List:</h3>
            <CatsList/>
            </>
        );
    }
}

export default TipoClase;