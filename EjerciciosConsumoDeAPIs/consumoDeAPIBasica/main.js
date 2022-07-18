// se le aplico un query prameter a la constante URL

// puedes concatenar parametros con el simbolo &

const API_URL_Random = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=60a1a2f4-f24c-4878-b860-841f1995b549 "

const API_URL_Favorites = "https://api.thecatapi.com/v1/favourites?api_key=60a1a2f4-f24c-4878-b860-841f1995b549 "

const spanError = document.getElementById('error')

// fetch(URL)
// .then(response => response.json())
// .then(data => {

//     const img = document.querySelector('img');
//     img.src = data[0].url;
// });

async function loadRandomCats() {
    const res = await fetch(API_URL_Random);
    const data = await res.json();
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: "+ res.status + data.message
    }else{
        
        const img1 = document.getElementById('1');
        const img2 = document.getElementById('2');
        img1.src = data[0].url
        img2.src = data[1].url
    }

}

loadRandomCats()

async function loadFavorites() {
    const res = await fetch(API_URL_Favorites);
    const data = await res.json();
    console.log("Favoritos")
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: "+ res.status + data.message
    }else{
        
        
    }

}

loadFavorites()

async function saveFavouritesCats(){
    const res = await fetch(API_URL_Favorites, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: 'n7'
        }),
    });
    const data = await res.json();

    console.log("Save");
    console.log(res);

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status + data.message
    }

}
saveFavouritesCats()



// HTTP status codes

// 1XX Respuestas Afirmativas

// 2XX Respuestas satisfactorias

// 3XX Re-direcciones

// 4XX Error del cliente

// 5XX Error de servidor

//autenticacion -> quies es quien

//Autorizacion -> Tiene permitido hacer esto?

// API key -> sirve para validar los 2 puntos anteriores