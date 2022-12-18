
// En este ejercicio se muestra como renderizar diferentes componentes dependiendo de los valores que se quiere validar

const tahoe_peaks = [
    {name: "Freel", elevation: 10891},
    {name: "Monument", elevation: 10067},
    {name: "Pyramid", elevation: 9983},
    {name: "Tallac", elevation: 9735}

]

function List({data, renderItem, renderEmpty}){
    return !data.length? renderEmpty: <ul>{data.map((item,i) => (
        <li key={i}>{renderItem(item)}</li>
    ))}</ul>

}

function AppRenderDinamico(){
    return(
        <List
            data={tahoe_peaks}
            renderEmpty={<p>This list is empty</p>}
            renderItem={(item) =>(
                <>
                    {item.name} ---- {item.elevation} ft.
                </>
            )}
        />
    )
}

export default AppRenderDinamico