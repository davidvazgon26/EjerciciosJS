//Ejemplo de un componente de clase
class Persona extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>David</h2>
                <h2>Vazquez</h2>
            </div>
        );
    }
}

export default Persona;

// Componente funcionales
function Tren(){
    return (
        <div>
            <h1>Nombre del tren: Tren 1</h1>
            <h2>Largo del tren: 10 metros</h2>
        </div>
    )
}

var elementoHTML = <div>
    <p>Solo es un ejemplo</p>
</div>

// Conectar al render
ReactDOM.render(
    <React.Fragment>
        <Persona />
        <Tren />
    </React.Fragment>
    , document.getElementById('App'))

    console.log( document.getElementById('App'))