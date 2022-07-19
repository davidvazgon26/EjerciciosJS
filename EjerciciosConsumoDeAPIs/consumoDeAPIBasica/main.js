// se le aplico un query prameter a la constante URL

// puedes concatenar parametros con el simbolo &

const API_URL_Random = "https://api.thecatapi.com/v1/images/search?limit=2"

const API_URL_Favorites = "https://api.thecatapi.com/v1/favourites" //Se elimino la api key aqui para hacer el ejercicio de agregar como header dentro de la peticion a la misma api key, esta se utiliza en loadFavoriteCats y loadFavoriteCats
const API_URL_Favorites_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=60a1a2f4-f24c-4878-b860-841f1995b549`

const API_URL_Upload = "https://api.thecatapi.com/v1/images/upload" 

const spanError = document.getElementById('error')

// fetch(URL)
// .then(response => response.json())
// .then(data => {

//     const img = document.querySelector('img');
//     img.src = data[0].url;
// });

async function loadRandomCats() {
    const res = await fetch(API_URL_Random); //fetch por default es un GET
    const data = await res.json();
    console.log("Random")
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message
    } else {

        const img1 = document.getElementById('1');
        const btn1 = document.getElementById('btn1');
        const img2 = document.getElementById('2');
        const btn2 = document.getElementById('btn2');

        img1.src = data[0].url
        img2.src = data[1].url

        btn1.onclick = () => saveFavouriteCat(data[0].id)
        btn2.onclick = () => saveFavouriteCat(data[1].id)
    }

}

loadRandomCats()

async function loadFavoriteCats() {
    const res = await fetch(API_URL_Favorites,{
        method: 'GET',
        headers: {
            'X-API-KEY': '60a1a2f4-f24c-4878-b860-841f1995b549'
        }
    });
    const data = await res.json();
    console.log("Favoritos")
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message
    } else {

        console.log("array de favoritos")
        console.log(data)
        //    limpiar la seccion antes de recargar

        const section = document.getElementById('favoritesCat');
        section.innerHTML = "";
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode('Gatitos Favoritos')
        h2.appendChild(h2Text);
        section.appendChild(h2)

        data.forEach(cat => {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const bntText = document.createTextNode('Eliminar de Favoritos');

            img.src = cat.image.url
            btn.appendChild(bntText);
            btn.onclick = () => deleteFavouriteCat(cat.id)

            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);

        })

    }

}

loadFavoriteCats()

async function saveFavouriteCat(id) {
    const res = await fetch(API_URL_Favorites, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': '60a1a2f4-f24c-4878-b860-841f1995b549'
        },
        body: JSON.stringify({
            image_id: id
        }),
    });
    const data = await res.json();

    console.log("Save");
    console.log(res);

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message
    } else {
        console.log("Se guardo el cat")
        loadFavoriteCats();
    }
}

async function deleteFavouriteCat(id) {
    const res = await fetch(API_URL_Favorites_DELETE(id), {
        method: 'DELETE',
    });
    const data = await res.json();

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message
    } else {
        console.log('Se elimino el cat')
        loadFavoriteCats()
    }
}
// saveFavouriteCat()

async function uploadCatPhoto(){
    const form = document.getElementById('uploadingForm');
    const formData = new FormData(form);

    console.log(formData.get('file'))

    const res = await fetch( API_URL_Upload, {
        method: "POST",
        headers: {
            //'Content-Type': 'multipart/form-data',  //No fue necesario porque lo agrega en automatico el FormData
            'x-api-key': '60a1a2f4-f24c-4878-b860-841f1995b549',
        }, 
        body: formData,
    });
    const data  = await res.json()

    if (res.status !== 201) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message
    } else {
        console.log('Se subio el cat' + res.status);
        console.timeLog(data)
        console.timeLog(data.url)
    }
}



// HTTP status codes

// 1XX Respuestas Afirmativas

// 2XX Respuestas satisfactorias

// 3XX Re-direcciones

// 4XX Error del cliente

// 5XX Error de servidor

//autenticacion -> quies es quien

//Autorizacion -> Tiene permitido hacer esto?

// API key -> sirve para validar los 2 puntos anteriores