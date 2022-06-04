// console.log('hoka putos')

var btn = document.querySelector('.btn1')

// console.log(btn)

var cont = 1
var offSet = 10

btn.addEventListener('click', ()=>{
    // console.log('Todo bien conectado')
    var api

    if (cont===1) {
        api =  `https://pokeapi.co/api/v2/pokemon`
    } else {
        api= `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=10`
    }

    $.get( api, (datosAPI)=>{
        var datos = datosAPI.results.map(dato => " | "+dato.name)
        // console.log(datos)
        var list = document.querySelector('.lista')
        
        var content = document.createElement('p')
        content.innerText = datos
        list.appendChild(content)
    })

    cont = cont +1
    offSet = offSet + 10
})

// Ejemplo con AJAX
var btnSearch = document.querySelector('.btnBuscador')
// console.log(btnSearch)

btnSearch.addEventListener('click', ()=>{

        //Obtener dato del input
        var input = document.querySelector('.datoBuscar')
        // console.log(input.value)
        
        if (!input.value) {
            return alert('No se ingreso dato')
        }

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${input.value}`,
            type: 'get',
            success: (datosDeAPI) =>{
                console.log(datosDeAPI)

                var contenedor = document.querySelector('.Contenedor')
                contenedor.innerText = ''

                var name = document.createElement('h3')
                name.innerText = "Nombre Pokemon: "+datosDeAPI.name
                contenedor.appendChild(name)

                var id = document.createElement('p')
                id.innerText = "El Id del Pokemon es: "+datosDeAPI.id
                contenedor.appendChild(id)

                var peso_altura = document.createElement('p')
                peso_altura.innerText =`Height: ${datosDeAPI.height} | Weight: ${datosDeAPI.weight}`
                contenedor.appendChild(peso_altura)

                var habilidades = document.createElement('p')
                habilidades.innerText = `Habilidades: ${datosDeAPI.abilities[0].ability.name}, ${datosDeAPI.abilities[1].ability.name}`
                contenedor.appendChild((habilidades))
            }
        })
})



