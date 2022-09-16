

export default function CardCat( {cat}, key){
    return <div key={key}>
            <h3>{cat.breed}</h3>
            <p>{cat.country}</p>
            <p>{cat.origin}</p>
            <p>primeras 3 letras: {cat.breed.split("",3).reverse().join("").toUpperCase()}</p>

        </div>
    
}