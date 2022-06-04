//Traer los mensajes con el nivel adecuado y con el separador    
//Ejemplo: array de mensajes:

let messages = [
    {level:10, text: "foo"},
    {level:20, text: "bar"},
    {level:30, text: "baz"},
];

function joinedLogger(level, sep){
     let filtro = messages.filter(item => item.level>=level)
    let filtro2 = filtro.map(item => item.text + sep)
    
    console.log(filtro2)

}

joinedLogger(15,';')


